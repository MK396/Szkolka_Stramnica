<template>
  <div>
    <Navbar />
    
    <Hero />
    
    <div class="container">
      <div id="opis">
         <Opis />
      </div>
      <div id="oferta">
         <Oferta />
      </div>
    </div>
    <div id="kontakt">
      <GoogleMap />
    </div>
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue';
import Hero from './components/Hero.vue';
import Opis from './components/Opis.vue';
import Oferta from './components/Oferta.vue';
import GoogleMap from './components/GoogleMap.vue'
</script>

<style>
/* Style globalne */
/* Dodaj to do sekcji <style> w App.vue */
.container {
  max-width: 1500px; /* Maksymalna szerokość treści */
  margin: 0 auto;    /* Centrowanie */
  padding: 0 20px;   /* Bezpieczny odstęp na telefonach */
  width: 100%;       /* Zapewnia responsywność */
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  color: #333;
  background-color: #fcfdfc; /* Lekki odcień bieli/zieleni pasujący do szkółki */
}
</style>