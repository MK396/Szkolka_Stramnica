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

  /* Safari: navbar jest fixed, więc treść schodzi poniżej niego. */
  .page-shell {
    padding-top: var(--nav-mobile-height);
  }

  /* Chrome chowa pasek adresu przy scrollu i zsuwa fixed/sticky navbar na hero.
     Dokument się nie przewija — pasek zostaje nad treścią. */
  @supports not (-webkit-touch-callout: none) {
    html, body {
      height: 100%;
      overflow: hidden;
    }

    #app {
      display: flex;
      flex-direction: column;
      height: 100dvh;
      max-height: 100dvh;
      overflow: hidden;
    }

    .page-shell {
      flex: 1 1 auto;
      min-height: 0;
      padding-top: 0;
      overflow-x: hidden;
      overflow-y: auto;
      -webkit-overflow-scrolling: touch;
      overscroll-behavior-y: contain;
    }
  }
}

@media (max-width: 768px) {
  :root {
    --section-gap: 40px;
    --content-inline: 15px;
  }
}
</style>