<template>
  <Hero />
  <div class="container">
    <Opis />
    <Oferta />
    <Galeria />
  </div>
  <GoogleMap />
</template>

<script setup>
import Hero from '../components/Hero.vue';
import Opis from '../components/Opis.vue';
import Oferta from '../components/Oferta.vue';
import Galeria from '../components/Galeria.vue';
import GoogleMap from '../components/GoogleMap.vue';
</script>