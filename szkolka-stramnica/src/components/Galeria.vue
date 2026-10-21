<template>
  <section class="galeria-container" id="galeria" ref="sectionEl">
    <h2>Galeria</h2>
    <div class="galeria-grid">
      <div
        v-for="(foto, index) in zdjecia"
        :key="index"
        class="foto-item"
        @click="indexOtwarty = index"
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
      <div v-if="indexOtwarty !== null" class="lightbox" @click="indexOtwarty = null">
        <button class="close-btn" type="button" aria-label="Zamknij">&times;</button>
        <button class="nav-btn prev" type="button" aria-label="Poprzednie" @click.stop="poprzednie">&#10094;</button>
        <img v-if="lightboxUrl" :src="lightboxUrl" alt="">
        <button class="nav-btn next" type="button" aria-label="Następne" @click.stop="nastepne">&#10095;</button>
      </div>
    </Transition>
  </section>
</template>

<script setup>
import { ref, watch, onMounted, onUnmounted } from 'vue';

const indexOtwarty = ref(null);
const lightboxUrl = ref(null);
const sectionEl = ref(null);
const thumbsLoaded = ref(false);

const thumbGlob = import.meta.glob('../assets/photos_gallery/thumbs/*.webp');
const fullGlob = import.meta.glob('../assets/photos_gallery/full/*.webp');

const byName = (a, b) => a.localeCompare(b, undefined, { numeric: true });

const thumbEntries = Object.entries(thumbGlob).sort(([a], [b]) => byName(a, b));

const zdjecia = ref(
  thumbEntries.map(([thumbPath]) => {
    const name = thumbPath.split('/').pop();
    const fullKey = Object.keys(fullGlob).find((k) => k.endsWith('/' + name));
    return {
      thumb: null,
      loadThumb: thumbGlob[thumbPath],
      loadFull: fullKey ? fullGlob[fullKey] : null,
    };
  })
);

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

watch(indexOtwarty, async (idx) => {
  if (idx === null) {
    lightboxUrl.value = null;
    return;
  }
  const foto = zdjecia.value[idx];
  // Najpierw miniatura (szybki podgląd), potem pełna jakość
  lightboxUrl.value = foto?.thumb || null;
  if (foto?.loadFull) {
    const mod = await foto.loadFull();
    if (indexOtwarty.value === idx) {
      lightboxUrl.value = mod.default;
    }
  }
});

const nastepne = (event) => {
  event.stopPropagation();
  indexOtwarty.value = (indexOtwarty.value + 1) % zdjecia.value.length;
};

const poprzednie = (event) => {
  event.stopPropagation();
  indexOtwarty.value = (indexOtwarty.value - 1 + zdjecia.value.length) % zdjecia.value.length;
};

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
  padding: 40px;
}

.lightbox img {
  max-width: min(96vw, 1600px);
  max-height: 90vh;
  object-fit: contain;
  border-radius: 4px;
  image-rendering: auto;
}

.close-btn {
  position: absolute;
  top: 16px;
  right: 24px;
  background: none;
  border: none;
  color: white;
  font-size: 2.5rem;
  cursor: pointer;
  line-height: 1;
}

.nav-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.12);
  border: none;
  color: white;
  font-size: 2rem;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  cursor: pointer;
  transition: background 0.3s;
}

.nav-btn:hover {
  background: rgba(255, 255, 255, 0.25);
}

.nav-btn.prev { left: 16px; }
.nav-btn.next { right: 16px; }

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
