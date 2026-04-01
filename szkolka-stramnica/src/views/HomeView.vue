<template>
  <Hero />
  <div class="container">
    <div id="opis"><Opis /></div>
    <div id="oferta"><Oferta /></div>
    <div id="galeria"><Galeria /></div>
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