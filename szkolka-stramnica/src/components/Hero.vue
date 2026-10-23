<template>
  <div class="hero-container" id="home">
    <swiper
      :modules="modules"
      effect="fade"
      :fade-effect="{ crossFade: true }"
      :slides-per-view="1"
      :pagination="{ clickable: true }"
      :navigation="true"
      :autoplay="{ delay: 5000, disableOnInteraction: false }"
      :loop="true"
      class="hero-swiper"
      @slide-change="onSlideChange"
    >
      <swiper-slide v-for="(slide, index) in slides" :key="index">
        <div class="slide-wrapper">
          <div
            v-if="!slide.isGrid"
            class="bg-image"
            :style="{ backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${slide.image})` }"
          ></div>

          <div v-else class="bg-grid">
            <template v-if="gridReady">
              <div
                v-for="(img, i) in gridImages"
                :key="i"
                class="grid-item"
                :style="{ backgroundImage: `url(${img})` }"
              ></div>
            </template>
            <div class="grid-overlay"></div>
          </div>

          <div class="text-overlay">
            <h1>{{ slide.title }}</h1>
            <p>{{ slide.description }}</p>
            <a
              v-if="slide.btnText"
              href="#"
              @click.prevent="handleNavigation(slide.btnLink)"
              class="btn-cta"
            >
              {{ slide.btnText }}
            </a>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Navigation, Autoplay, EffectFade } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

import slide1Desktop from '../assets/photos_gallery/hero/slide1.webp';
import slide2Desktop from '../assets/photos_gallery/hero/slide2.webp';
import slide1Mobile from '../assets/photos_gallery/hero/slide1-mobile.webp';
import slide2Mobile from '../assets/photos_gallery/hero/slide2-mobile.webp';

const GRID_THUMB_LIMIT = 12;
const thumbModules = import.meta.glob('../assets/photos_gallery/thumbs/*.webp');

const gridImages = ref([]);
const gridReady = ref(false);
const isMobile = ref(
  typeof window !== 'undefined' && window.matchMedia('(max-width: 768px)').matches
);

let mq;
function syncViewport() {
  isMobile.value = mq.matches;
}

async function loadGridThumbs() {
  if (gridReady.value) return;
  const entries = Object.entries(thumbModules)
    .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
    .slice(0, GRID_THUMB_LIMIT);

  gridImages.value = await Promise.all(
    entries.map(async ([, loader]) => {
      const mod = await loader();
      return mod.default;
    })
  );
  gridReady.value = true;
}

function onSlideChange(swiper) {
  if (swiper.realIndex === 2) loadGridThumbs();
}

const router = useRouter();
const modules = [Pagination, Navigation, Autoplay, EffectFade];

const handleNavigation = (link) => {
  if (!link) return;
  if (link.startsWith('/')) {
    router.push(link);
  } else if (link.startsWith('#')) {
    const el = document.querySelector(link);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }
};

const slides = computed(() => {
  const s1 = isMobile.value ? slide1Mobile : slide1Desktop;
  const s2 = isMobile.value ? slide2Mobile : slide2Desktop;
  return [
    {
      image: s1,
      title: 'Witaj w Szkółce Stramnica',
      description: 'Najpiękniejsze rośliny do Twojego ogrodu.',
    },
    {
      image: s2,
      title: 'Szeroki wybór roślin',
      description: 'Oferujemy krzewy, drzewa i byliny najwyższej jakości.',
    },
    {
      isGrid: true,
      title: 'Nasza Galeria',
      description: 'Zobacz nasze rośliny',
      btnText: 'Zobacz galerię',
      btnLink: '#galeria',
    },
  ];
});

onMounted(() => {
  mq = window.matchMedia('(max-width: 768px)');
  syncViewport();
  mq.addEventListener('change', syncViewport);
});

onUnmounted(() => {
  mq?.removeEventListener('change', syncViewport);
});
</script>

<style scoped>
.hero-container {
  width: 100%;
  height: 52vh;
  min-height: 340px;
  max-height: 560px;
  position: relative;
  overflow: hidden;
  background-color: #1a1a1a;
}

.hero-swiper { width: 100%; height: 100%; }
.slide-wrapper { position: relative; width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; }

.bg-image { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background-size: cover; background-position: center; }

.bg-grid {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: grid;
  /* 12 zdjęć — siatki zawsze zapełnione */
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(2, 1fr);
  overflow: hidden;
  z-index: 1;
}

.grid-item {
  width: 100%;
  height: 100%;
  min-height: 0;
  background-size: cover;
  background-position: center;
  border: 0.1px solid rgba(255,255,255,0.05);
}

.grid-overlay { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.4); }

.text-overlay { position: relative; z-index: 10; color: white; text-align: center; padding: 0 20px; pointer-events: none; }
.text-overlay h1, .text-overlay p, .btn-cta { pointer-events: auto; }

.text-overlay h1 { font-size: clamp(2rem, 6vw, 3.5rem); margin-bottom: 1rem; text-shadow: 2px 2px 10px rgba(0,0,0,0.5); }
.text-overlay p { font-size: clamp(1rem, 2vw, 1.25rem); margin-bottom: 2rem; }

.btn-cta {
  display: inline-block;
  padding: 12px 30px;
  background-color: #2e7d32;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  font-weight: 600;
  transition: 0.3s;
}

@media (min-width: 1025px) {
  @keyframes kenburns { 0% { transform: scale(1); } 100% { transform: scale(1.1); } }
  :deep(.swiper-slide-active) .bg-image { animation: kenburns 8s linear forwards; }
}

/* mniej kolumn → szersze kafelki ≈ kwadrat; zawsze 12 komórek */
@media (max-width: 1000px) {
  .hero-container {
    margin-top: 0;
  }
}

@media (max-width: 1024px) {
  .hero-container { height: 48vh; max-height: 480px; }
  .bg-grid {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(3, 1fr);
  }
}

@media (max-width: 768px) {
  .hero-container { height: 44vh; min-height: 300px; max-height: 420px; }
  .bg-grid {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(4, 1fr);
  }
}

@media (max-width: 480px) {
  .hero-container { height: 40vh; min-height: 280px; }
  .bg-grid {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(4, 1fr);
  }
}
</style>
