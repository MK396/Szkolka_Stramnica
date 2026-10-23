<template>
  <section class="galeria-container" id="galeria" ref="sectionEl">
    <h2>Galeria</h2>
    <div class="galeria-grid">
      <div
        v-for="(foto, index) in zdjecia"
        :key="index"
        class="foto-item"
        @click="indexOtwarty = index"
        @mouseenter="preloadFull(index)"
      >
        <img
          v-if="foto.thumb"
          :src="foto.thumb"
          loading="lazy"
          decoding="async"
          alt=""
          width="400"
          height="300"
        >
        <div v-else class="foto-placeholder" aria-hidden="true"></div>
        <div class="foto-overlay"></div>
      </div>
    </div>

    <Transition name="fade">
      <div v-if="indexOtwarty !== null" class="lightbox" @click="handleLightboxClick">
        <button class="close-btn" type="button" aria-label="Zamknij">&times;</button>
        <div class="lightbox-shell">
          <button class="nav-btn prev" type="button" aria-label="Poprzednie" @click.stop="poprzednie">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M14.5 5.5 8 12l6.5 6.5" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>
          <div class="lightbox-content">
            <div class="lightbox-stage">
              <div v-if="slidePhase === 'loading'" class="lightbox-loader" aria-live="polite">
                <span class="lightbox-loader-spinner" aria-hidden="true"></span>
              </div>
              <img
                v-if="shownUrl"
                :src="shownUrl"
                :alt="lightboxMeta.caption || lightboxMeta.counter"
                class="lightbox-img"
                @click.stop
                :class="{
                  'is-shown': slidePhase === 'shown',
                  'is-leaving': slidePhase === 'leaving',
                  'is-entering': slidePhase === 'entering',
                  'is-forward': slideDirection === 1,
                  'is-backward': slideDirection === -1,
                  'is-opening': slideDirection === 0,
                }"
              >
            </div>
            <div ref="captionBlockRef" class="lightbox-caption-block">
              <p v-if="lightboxMeta.caption" class="lightbox-caption">{{ lightboxMeta.caption }}</p>
              <p class="lightbox-counter">{{ lightboxMeta.counter }}</p>
            </div>
          </div>
          <button class="nav-btn next" type="button" aria-label="Następne" @click.stop="nastepne">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M9.5 5.5 16 12l-6.5 6.5" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </Transition>
  </section>
</template>

<script setup>
import { ref, computed, watch, nextTick, onMounted, onUnmounted } from 'vue';

const SLIDE_MS = 300;

const indexOtwarty = ref(null);
const shownUrl = ref(null);
const slidePhase = ref('idle');
/** 1 = następne, -1 = poprzednie, 0 = pierwsze otwarcie */
const slideDirection = ref(0);
const sectionEl = ref(null);
const captionBlockRef = ref(null);
const thumbsLoaded = ref(false);
const fullUrlCache = new Map();

const thumbGlob = import.meta.glob('../assets/photos_gallery/thumbs/*.webp');
const fullGlob = import.meta.glob('../assets/photos_gallery/full/*.webp');

const byName = (a, b) => a.localeCompare(b, undefined, { numeric: true });

const thumbEntries = Object.entries(thumbGlob).sort(([a], [b]) => byName(a, b));

const zdjecia = ref(
  thumbEntries.map(([thumbPath], index) => {
    const name = thumbPath.split('/').pop();
    const fullKey = Object.keys(fullGlob).find((k) => k.endsWith('/' + name));
    return {
      thumb: null,
      // Opis pod zdjęciem — uzupełnij dla kolejnych indeksów
      caption: index === 0 ? "Hortensja bukietowa 'Limelight'" : '',
      loadThumb: thumbGlob[thumbPath],
      loadFull: fullKey ? fullGlob[fullKey] : null,
    };
  })
);

const lightboxMeta = computed(() => {
  const idx = indexOtwarty.value;
  if (idx === null) return { caption: '', counter: '' };
  const total = zdjecia.value.length;
  return {
    caption: zdjecia.value[idx]?.caption ?? '',
    counter: total ? `(${idx + 1}/${total})` : '',
  };
});

async function loadThumbs() {
  if (thumbsLoaded.value) return;
  thumbsLoaded.value = true;
  await Promise.all(
    zdjecia.value.map(async (foto) => {
      if (!foto.loadThumb) return;
      const mod = await foto.loadThumb();
      foto.thumb = mod.default;
    })
  );
}

function preloadImage(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      if (img.decode) img.decode().then(resolve).catch(resolve);
      else resolve();
    };
    img.onerror = reject;
    img.src = src;
  });
}

async function resolveFullUrl(idx) {
  if (fullUrlCache.has(idx)) return fullUrlCache.get(idx);
  const foto = zdjecia.value[idx];
  if (!foto?.loadFull) return null;
  const mod = await foto.loadFull();
  fullUrlCache.set(idx, mod.default);
  return mod.default;
}

function preloadFull(idx) {
  if (idx < 0 || idx >= zdjecia.value.length) return;
  resolveFullUrl(idx).catch(() => {});
}

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function loadFullForIndex(idx) {
  const url = await resolveFullUrl(idx);
  if (!url) return null;
  await preloadImage(url);
  return url;
}

watch(indexOtwarty, async (idx, prevIdx) => {
  if (idx === null) {
    shownUrl.value = null;
    slidePhase.value = 'idle';
    return;
  }

  const count = zdjecia.value.length;
  preloadFull((idx + 1) % count);
  preloadFull((idx - 1 + count) % count);

  const opening = prevIdx == null;
  if (opening) slideDirection.value = 0;

  const loadPromise = loadFullForIndex(idx);

  if (!opening && shownUrl.value) {
    slidePhase.value = 'leaving';
    await Promise.all([delay(SLIDE_MS), loadPromise]);
  } else {
    slidePhase.value = 'loading';
    await loadPromise;
  }

  if (indexOtwarty.value !== idx) return;

  let url;
  try {
    url = await loadPromise;
  } catch {
    url = null;
  }

  if (indexOtwarty.value !== idx) return;

  if (!url) {
    slidePhase.value = 'idle';
    return;
  }

  shownUrl.value = url;
  slidePhase.value = 'entering';
  await nextTick();
  requestAnimationFrame(() => {
    if (indexOtwarty.value === idx) slidePhase.value = 'shown';
  });
});

function handleLightboxClick() {
  const selection = window.getSelection();
  const captionEl = captionBlockRef.value;
  if (
    selection &&
    !selection.isCollapsed &&
    captionEl &&
    selection.anchorNode &&
    captionEl.contains(selection.anchorNode)
  ) {
    return;
  }
  indexOtwarty.value = null;
}

function goToSlide(delta, event) {
  event?.stopPropagation();
  const current = indexOtwarty.value;
  if (current === null) return;
  slideDirection.value = delta;
  const count = zdjecia.value.length;
  indexOtwarty.value = (current + delta + count) % count;
}

const nastepne = (event) => goToSlide(1, event);

const poprzednie = (event) => goToSlide(-1, event);

const handleKeydown = (e) => {
  if (indexOtwarty.value === null) return;
  if (e.key === 'ArrowRight') nastepne(e);
  if (e.key === 'ArrowLeft') poprzednie(e);
  if (e.key === 'Escape') indexOtwarty.value = null;
};

let observer;
onMounted(() => {
  window.addEventListener('keydown', handleKeydown);
  observer = new IntersectionObserver(
    (entries) => {
      if (entries.some((e) => e.isIntersecting)) {
        loadThumbs();
        observer?.disconnect();
      }
    },
    { rootMargin: '200px' }
  );
  if (sectionEl.value) observer.observe(sectionEl.value);
});

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown);
  observer?.disconnect();
});
</script>

<style scoped>
.galeria-container {
  padding: 60px 20px;
  text-align: center;
  width: 100%;
  box-sizing: border-box;
}

h2 {
  color: #2e7d32;
  font-size: 2rem;
  margin-bottom: 30px;
}

.galeria-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 12px;
  width: 100%;
  margin: 0 auto;
  box-sizing: border-box;
}

.foto-item {
  position: relative;
  aspect-ratio: 1 / 1;
  overflow: hidden;
  cursor: pointer;
  border-radius: 6px;
  background: #e8f0e8;
}

@media (max-width: 480px) {
  .galeria-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 8px;
  }
}

.foto-item img,
.foto-placeholder {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.35s ease;
}

.foto-placeholder {
  background: linear-gradient(110deg, #e8f0e8 30%, #f4f8f4 50%, #e8f0e8 70%);
  background-size: 200% 100%;
}

.foto-item:hover img {
  transform: scale(1.05);
}

.foto-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0);
  transition: background 0.3s;
}

.foto-item:hover .foto-overlay {
  background: rgba(0, 0, 0, 0.15);
}

.lightbox {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  padding: 48px 16px 32px;
  box-sizing: border-box;
}

.lightbox-shell {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: clamp(8px, 2vw, 20px);
  width: 100%;
  max-width: min(100%, 1680px);
  min-height: 0;
}

.lightbox-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1 1 auto;
  min-width: 0;
  max-width: min(100%, 1600px);
}

.lightbox-caption-block {
  margin-top: 14px;
  padding: 0 8px;
  max-width: min(96vw, 720px);
  text-align: center;
}

.lightbox-caption {
  margin: 0 0 6px;
  color: rgba(255, 255, 255, 0.92);
  font-size: 0.95rem;
  line-height: 1.45;
  user-select: text;
  -webkit-user-select: text;
  cursor: text;
}

.lightbox-counter {
  margin: 0;
  color: rgba(255, 255, 255, 0.65);
  font-size: 0.85rem;
  line-height: 1.3;
  font-variant-numeric: tabular-nums;
}

.lightbox-stage {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-height: calc(100vh - 140px);
  min-height: min(40vh, 320px);
  flex: 0 1 auto;
  overflow: hidden;
}

.lightbox-img {
  max-width: 100%;
  max-height: calc(100vh - 140px);
  object-fit: contain;
  border-radius: 4px;
  opacity: 0;
  transform: translateX(0);
  transition: opacity 0.3s ease, transform 0.3s ease;
  will-change: opacity, transform;
}

.lightbox-img.is-shown {
  opacity: 1;
  transform: translateX(0);
}

.lightbox-img.is-leaving.is-forward {
  opacity: 0;
  transform: translateX(-16%);
}

.lightbox-img.is-leaving.is-backward {
  opacity: 0;
  transform: translateX(16%);
}

.lightbox-img.is-entering.is-forward {
  opacity: 0;
  transform: translateX(16%);
}

.lightbox-img.is-entering.is-backward {
  opacity: 0;
  transform: translateX(-16%);
}

.lightbox-img.is-entering.is-opening,
.lightbox-img.is-leaving.is-opening {
  transform: translateX(0);
}

.lightbox-img.is-entering.is-opening {
  opacity: 0;
}

.lightbox-loader {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
}

.lightbox-loader-spinner {
  width: 44px;
  height: 44px;
  border: 3px solid rgba(255, 255, 255, 0.25);
  border-top-color: #fff;
  border-radius: 50%;
  animation: lightbox-spin 0.7s linear infinite;
}

@keyframes lightbox-spin {
  to { transform: rotate(360deg); }
}

.close-btn {
  position: absolute;
  top: 16px;
  right: 24px;
  z-index: 5;
  background: none;
  border: none;
  color: white;
  font-size: 2.5rem;
  cursor: pointer;
  line-height: 1;
  touch-action: manipulation;
}

.nav-btn {
  position: relative;
  z-index: 3;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  background: #ffffff;
  border: none;
  color: #1a1a1a;
  width: 48px;
  height: 48px;
  padding: 0;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0 2px 14px rgba(0, 0, 0, 0.35);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  touch-action: manipulation;
  -webkit-tap-highlight-color: transparent;
}

.nav-btn svg {
  width: 22px;
  height: 22px;
  display: block;
}

.nav-btn:hover {
  box-shadow: 0 4px 18px rgba(0, 0, 0, 0.45);
}

.nav-btn:active {
  transform: scale(0.96);
}

@media (max-width: 640px) {
  .lightbox {
    padding: 44px 8px 24px;
    align-items: stretch;
  }

  .lightbox-shell {
    flex: 1;
    align-self: center;
    gap: 6px;
    max-width: 100%;
  }

  .nav-btn {
    width: 44px;
    height: 44px;
    min-width: 44px;
    min-height: 44px;
  }

  .nav-btn svg {
    width: 20px;
    height: 20px;
  }

  .lightbox-stage {
    max-height: calc(100vh - 120px);
    min-height: 0;
  }

  .lightbox-img {
    max-height: calc(100vh - 120px);
  }

  .lightbox-caption-block {
    margin-top: 10px;
  }

  .lightbox-caption {
    font-size: 0.85rem;
  }

  .close-btn {
    top: 10px;
    right: 12px;
    font-size: 2.2rem;
  }
}

@media (max-width: 380px) {
  .lightbox-shell {
    position: relative;
    display: block;
  }

  .lightbox-content {
    width: 100%;
    max-width: 100%;
  }

  .nav-btn {
    position: absolute;
    top: 42%;
    transform: translateY(-50%);
    z-index: 10;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.5);
  }

  .nav-btn:active {
    transform: translateY(-50%) scale(0.96);
  }

  .nav-btn.prev {
    left: 4px;
  }

  .nav-btn.next {
    right: 4px;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
