<template>
  <div class="katalog-page">
    <div class="container">
      <header class="section-header">
        <h1>Katalog roślin</h1>
        <div class="underline"></div>
      </header>
      <p class="subtitle">Przejrzyj rośliny dostępne w naszej szkółce. W asortymencie może nie być wszytskich dostępnych roślin w naszej szkółce. Dlatego zachęcamy do kontaktu z nami lub przyjechania osobiście, aby uzyskać więcej informacji.</p>

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
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

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

.section-header {
  text-align: center;
  margin-bottom: 50px;
}

h1 {
  color: #2e7d32;
  font-size: 2.5rem;
  margin-bottom: 10px;
}

.underline {
  width: 60px;
  height: 4px;
  background-color: #2e7d32;
  margin: 0 auto;
  border-radius: 2px;
}


.subtitle {
  text-align: left;
  color: #666;
  margin-bottom: 50px;
}


.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 30px;
}


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
  align-items: center;
  justify-content: left;
  padding-top: 15px;
  border-top: 1px solid #eee;
}

.price {
  font-weight: 700;
  color: #2e7d32;
  font-size: 2rem;
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

@media (max-width: 768px) {
  .product-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
  }
  .image-container {
    height: 160px;
  }
}

@media (max-width: 480px) {
  .product-grid {
    grid-template-columns: repeat(2, 1fr); 
    gap: 10px;
  }
  .price {
    font-size: 1.1rem;
  }
  .product-info {
    padding: 10px;
  }
}
</style>