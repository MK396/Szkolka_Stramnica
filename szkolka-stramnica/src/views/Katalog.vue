<template>
  <div class="katalog-page">
    <div class="container">
      <h1>Nasze Rośliny</h1>
      <p class="subtitle">Przejrzyj asortyment dostępny w naszej szkółce</p>

      <div class="product-grid">
        <div v-for="(roslina, index) in rosliny" :key="index" class="product-card">
          <div class="image-container">
            <img :src="roslina.url" :alt="roslina.nazwa">
            <span class="category-badge">{{ roslina.kategoria }}</span>
          </div>
          
          <div class="product-info">
            <h3>{{ roslina.nazwa }}</h3>
            <p class="description">{{ roslina.opis }}</p>
            <div class="card-footer">
              <span class="price" v-if="roslina.cena">{{ roslina.cena }} zł</span>
              <router-link to="/kontakt" class="ask-button">Zapytaj o produkt</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// Tablica z danymi o roślinach
const rosliny = ref([
  { 
    nazwa: 'Świerk', 
    kategoria: 'Drzewa', 
    opis: 'Opis',
    url: new URL('../assets/photos_catalog/photo1.jpg', import.meta.url).href,
    cena: '45' 
  },
  { 
    nazwa: 'Tuja Szmaragd', 
    kategoria: 'Tuje',
    opis: 'Opis',
    url: new URL('../assets/photos_catalog/photo3.jpg', import.meta.url).href,
    cena: '15'
  },
  { 
    nazwa: 'Lawenda', 
    kategoria: 'Kwiaty', 
    opis: 'Opis',
    url: new URL('../assets/photos_catalog/photo3.jpg', import.meta.url).href,
    cena: '12'
  },
  { 
    nazwa: 'Świerk', 
    kategoria: 'Drzewa', 
    opis: 'Opis',
    url: new URL('../assets/photos_catalog/photo1.jpg', import.meta.url).href,
    cena: '45' 
  },
  { 
    nazwa: 'Tuja Szmaragd', 
    kategoria: 'Tuje',
    opis: 'Opis',
    url: new URL('../assets/photos_catalog/photo3.jpg', import.meta.url).href,
    cena: '15'
  },
  { 
    nazwa: 'Lawenda', 
    kategoria: 'Kwiaty', 
    opis: 'Opis',
    url: new URL('../assets/photos_catalog/photo3.jpg', import.meta.url).href,
    cena: '12'
  },
  { 
    nazwa: 'Świerk', 
    kategoria: 'Drzewa', 
    opis: 'Opis',
    url: new URL('../assets/photos_catalog/photo1.jpg', import.meta.url).href,
    cena: '45' 
  },
  { 
    nazwa: 'Tuja Szmaragd', 
    kategoria: 'Tuje',
    opis: 'Opis',
    url: new URL('../assets/photos_catalog/photo3.jpg', import.meta.url).href,
    cena: '15'
  },
  { 
    nazwa: 'Lawenda', 
    kategoria: 'Kwiaty', 
    opis: 'Opis',
    url: new URL('../assets/photos_catalog/photo3.jpg', import.meta.url).href,
    cena: '12'
  },
]);
</script>

<style scoped>
.katalog-page {
  padding: 60px 20px;
  background-color: #f9fbf9;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

h1 {
  color: #2e7d32;
  text-align: center;
  margin-bottom: 10px;
}

.subtitle {
  text-align: center;
  color: #666;
  margin-bottom: 50px;
}

/* Siatka produktów */
.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 30px;
}

/* Karta produktu */
.product-card {
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0,0,0,0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
}

.product-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 25px rgba(0,0,0,0.1);
}

/* Zdjęcie w karcie */
.image-container {
  position: relative;
  height: 220px;
}

.image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.category-badge {
  position: absolute;
  top: 15px;
  right: 15px;
  background: rgba(46, 125, 50, 0.9);
  color: white;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
}

/* Info pod zdjęciem */
.product-info {
  padding: 20px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

h3 {
  margin: 0 0 10px 0;
  color: #333;
  font-size: 1.25rem;
}

.description {
  font-size: 0.9rem;
  color: #777;
  line-height: 1.5;
  margin-bottom: 20px;
  flex-grow: 1;
}

.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 15px;
  border-top: 1px solid #eee;
}

.price {
  font-weight: 700;
  color: #2e7d32;
  font-size: 1.1rem;
}

.ask-button {
  text-decoration: none;
  font-size: 0.8rem;
  font-weight: 600;
  color: #2e7d32;
  border: 1px solid #2e7d32;
  padding: 6px 12px;
  border-radius: 6px;
  transition: all 0.3s;
}

.ask-button:hover {
  background: #2e7d32;
  color: white;
}

@media (max-width: 600px) {
  .product-grid {
    grid-template-columns: 1fr;
  }
}
</style>