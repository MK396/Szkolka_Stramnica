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
    >
      <swiper-slide v-for="(slide, index) in slides" :key="index">
        <div class="slide-wrapper">
          <div v-if="!slide.isGrid"
            class="bg-image" 
            :style="{ backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${slide.image})` }"
          ></div>

          <div v-else class="bg-grid">
            <div v-for="(img, i) in slide.images" :key="i" 
                class="grid-item" 
                :style="{ backgroundImage: `url(${img})` }">
            </div>
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
import { useRouter } from 'vue-router';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Navigation, Autoplay, EffectFade } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

import photo1 from '../assets/photos_gallery/photo1.jpg';
import photo2 from '../assets/photos_gallery/photo2.jpg';
import grid1 from '../assets/photos_gallery/photo3.jpg';
import grid2 from '../assets/photos_gallery/photo4.jpg';
import grid3 from '../assets/photos_gallery/photo5.jpg';
import grid4 from '../assets/photos_gallery/photo6.jpg';
import grid5 from '../assets/photos_gallery/photo7.jpg';
import grid6 from '../assets/photos_gallery/photo8.jpg';
import grid7 from '../assets/photos_gallery/photo9.jpg';
import grid8 from '../assets/photos_gallery/photo10.jpg';
import grid9 from '../assets/photos_gallery/photo1.jpg';
import grid10 from '../assets/photos_gallery/photo2.jpg';

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

const slides = [
  {
    image: photo1,
    title: 'Witaj w Szkółce Stramnica',
    description: 'Najpiękniejsze rośliny do Twojego ogrodu.',
  },
  {
    image: photo2,
    title: 'Szeroki wybór roślin',
    description: 'Oferujemy krzewy, drzewa i byliny najwyższej jakości.',
  },
  {
    isGrid: true, 
    images: [grid1, grid2, grid3, grid4, grid5, grid6, grid7, grid8, grid9, grid10],
    title: 'Nasza Galeria',
    description: 'Zobacz nasze rośliny',
    btnText: 'Zobacz galerię',
    btnLink: '#galeria'
  }
];
</script>

<style scoped>
.hero-container {
  width: 100%;
  height: 70vh;
  min-height: 450px;
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
  grid-template-columns: repeat(5, 1fr); 
  grid-template-rows: repeat(2, 1fr);
  z-index: 1;
}

.grid-item {
  width: 100%;
  height: 100%;
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

@media (max-width: 1024px) {
  .bg-grid { grid-template-columns: repeat(3, 1fr); }
}

@media (max-width: 768px) {
  .hero-container { height: 60vh; }
  .bg-grid { grid-template-columns: repeat(2, 1fr); grid-template-rows: repeat(5, 1fr); }
}

@media (min-width: 1025px) {
  @keyframes kenburns { 0% { transform: scale(1); } 100% { transform: scale(1.1); } }
  :deep(.swiper-slide-active) .bg-image { animation: kenburns 8s linear forwards; }
}

@media (max-width: 600px) {
  .bg-grid {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(5, 1fr);
  }
  
  .hero-container {
    height: 50vh;
  }
}
</style>