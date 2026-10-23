<template>
  <Navbar />
  <div class="page-shell">
    <router-view />
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue';
</script>

<style>
:root {
  --section-gap: 60px;
  --nav-mobile-height: 72px;
  --content-inline: 20px;
}

html {
  scroll-behavior: smooth;
}

.container {
  max-width: 1500px;
  margin: 0 auto;
  padding: 0 var(--content-inline);
  width: 100%;
}

/* laptop — szersze wcięcia treści (navbar bez zmian) */
@media (min-width: 1024px) and (max-width: 1499px) {
  :root {
    --content-inline: 44px;
  }
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
  background-color: #fcfdfc;
}

@media (max-width: 1000px) {
  html {
    scroll-padding-top: var(--nav-mobile-height);
  }

  /* Navbar jest fixed — ten odstęp trzyma hero pod paskiem także po powrocie na górę. */
  .page-shell {
    padding-top: var(--nav-mobile-height);
  }
}

@media (max-width: 768px) {
  :root {
    --section-gap: 40px;
    --content-inline: 15px;
  }
}
</style>