<template>
  <div id="map" class="map-section" ref="mapEl">
    <iframe
      v-if="showMap"
      :src="mapSrc"
      width="100%"
      height="500"
      style="border:0;"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
      title="Mapa — Szkółka Stramnica"
    ></iframe>
    <div v-else class="map-skeleton" aria-hidden="true"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const showMap = ref(false);
const mapEl = ref(null);

const mapSrc =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d223399.39160195182!2d15.448253262915243!3d54.13869618961442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47003faf22450fe1%3A0x2f9baa139a9898f6!2sGospodarstwo%20rolno%20szk%C3%B3%C5%82karskie%20projektowanie%20teren%C3%B3w%20zielonych%20Ma%C5%82gorzata%20Bielecka%20Ku%C5%BCownik!5e0!3m2!1spl!2spl!4v1774945980846!5m2!1spl!2spl';

let observer;

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      if (entries.some((e) => e.isIntersecting)) {
        showMap.value = true;
        observer?.disconnect();
      }
    },
    { rootMargin: '200px' }
  );
  if (mapEl.value) observer.observe(mapEl.value);
});

onUnmounted(() => observer?.disconnect());
</script>

<style scoped>
.map-section {
  width: 100%;
  min-height: 500px;
}

.map-skeleton {
  width: 100%;
  height: 500px;
  background: #e8f0e8;
}
</style>
