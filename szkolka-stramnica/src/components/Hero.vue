<template>
  <div class="hero-container">
    <swiper
      :modules="modules"
      :effect="fade"
      fadeEffect="{
        crossFade: true
      }"
      :slides-per-view="1"
      :pagination="{ clickable: true }"
      :navigation="true"
      :autoplay="{ delay: 5000, disableOnInteraction: false }"
      :loop="true"
      class="hero-swiper"
    >
      <swiper-slide v-for="(slide, index) in slides" :key="index">
        <div class="slide-wrapper">
          <div 
            class="bg-image" 
            :style="{ backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${slide.image})` }"
          ></div>
          
          <div class="text-overlay">
            <h1>{{ slide.title }}</h1>
            <p>{{ slide.description }}</p>
            <button class="btn-cta">Zobacz ofertę</button>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Navigation, Autoplay, EffectFade } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

// Pamiętaj o dodaniu EffectFade do tablicy modules!
const modules = [Pagination, Navigation, Autoplay, EffectFade];

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=1600',
    title: 'Witaj w Szkółce Stramnica',
    description: 'Najpiękniejsze rośliny do Twojego ogrodu.'
  },
  {
    image: 'https://images.unsplash.com/photo-1416870213410-66fc33c26d8d?q=80&w=1600',
    title: 'Szeroki wybór iglaków',
    description: 'Sadzonki najwyższej jakości z własnej uprawy.'
  }
];
</script>

<style scoped>
.hero-container {
  width: 100%;
  height: 60vh;
  overflow: hidden;
}

.hero-swiper {
  width: 100%;
  height: 100%;
}

.slide-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden; /* Ważne, żeby powiększone zdjęcie nie wystawało */
}

/* --- STYL TŁA --- */
.bg-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  z-index: 1; /* Pod tekstem */
  will-change: transform;
}

/* --- STYL TEKSTU --- */
.text-overlay {
  position: relative;
  z-index: 2; /* Nad zdjęciem */
  color: white;
  text-align: center;
  pointer-events: none; /* Pozwala klikać w nawigację swipera przez tekst jeśli trzeba */
}

.text-overlay button {
  pointer-events: auto; /* Przywraca klikalność przycisku */
}

/* --- ANIMACJA TYLKO DLA TŁA --- */
@keyframes kenburns {
  0% { transform: scale(1); }
  100% { transform: scale(1.15); }
}

/* Animacja uruchamia się tylko na bg-image wewnątrz aktywnego slajdu */
:deep(.swiper-slide-active) .bg-image {
  animation: kenburns 5s linear forwards;
}

/* --- RESZTA STYLI --- */
.text-overlay h1 {
  font-size: 3.5rem;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 10px rgba(0,0,0,0.7);
}

.text-overlay p {
  font-size: 1.5rem;
  margin-bottom: 2rem;
}

.btn-cta {
  padding: 15px 30px;
  font-size: 1.2rem;
  background-color: #2e7d32;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;
}

.btn-cta:hover {
  background-color: #1b5e20;
}

@media (max-width: 768px) {
  .text-overlay h1 { font-size: 2rem; }
  .text-overlay p { font-size: 1rem; }
}
</style>