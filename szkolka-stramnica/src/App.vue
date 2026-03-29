<template>
  <div>
    <Navbar />
    
    <header class="hero">
      <div class="hero-text">
        <h1>Rośliny ozdobne i drzewa</h1>
        <p>Pasja, która rośnie od 1994 roku.</p>
        <button>Sprawdź ofertę</button>
      </div>
    </header>

    <div id="oferta">
       <Oferta />
    </div>
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue';
</script>

<style>
/* Style globalne dla całej strony */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  color: #333;
}
.hero {
  height: 60vh;
  background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), 
              url('https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&q=80&w=1000');
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
}
.hero h1 { font-size: 3rem; margin-bottom: 10px; }
.hero button {
  background: #2e7d32;
  color: white;
  border: none;
  padding: 10px 25px;
  font-size: 1.1rem;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 20px;
}
</style>