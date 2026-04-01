<template>
	<section class="galeria-container" id="galeria">
		<h2>Galeria</h2>
        <div class="galeria-grid">
            <div v-for="(foto, index) in zdjecia" :key="index" class="foto-item"@click="indexOtwarty = index">
                <img :src="foto.url">
                <div class="foto-overlay">
                </div>
            </div>
        </div>

        <Transition name="fade">
            <div v-if="indexOtwarty !== null" class="lightbox" @click="indexOtwarty = null">
                <button class="close-btn">&times;</button>
                <button class="nav-btn prev" @click.stop="poprzednie">&#10094;</button>
                <img :src="zdjecia[indexOtwarty].url">
                <button class="nav-btn next" @click.stop="nastepne">&#10095;</button>
            </div>
        </Transition>
    </section>
</template>

<script setup>
import { ref } from 'vue';
import { onMounted, onUnmounted } from 'vue';

const indexOtwarty = ref(null);

// To pobierze wszystkie pliki .jpg i .png z folderu galeria
const pliki = import.meta.glob('../assets/photos_gallery/*.{jpg,png,jpeg}', { eager: true, import: 'default' });

// Przekształcamy to w tablicę, którą rozumie Twój kod
const zdjecia = ref(Object.values(pliki).map(path => ({ url: path })));

const nastepne = (event) => {
    event.stopPropagation(); // Zapobiega zamknięciu lightboxa przy kliknięciu w przycisk
    indexOtwarty.value = (indexOtwarty.value + 1) % zdjecia.value.length;
};

const poprzednie = (event) => {
    event.stopPropagation();
    indexOtwarty.value = (indexOtwarty.value - 1 + zdjecia.value.length) % zdjecia.value.length;
};

const handleKeydown = (e) => {
    if (indexOtwarty.value === null) return;
    if (e.key === 'ArrowRight') nastepne(e);
    if (e.key === 'ArrowLeft') poprzednie(e);
    if (e.key === 'Escape') indexOtwarty.value = null;
};

onMounted(() => window.addEventListener('keydown', handleKeydown));
onUnmounted(() => window.removeEventListener('keydown', handleKeydown));
</script>


<style scoped>
    .galeria-container {
		padding: 50px 20px;
		text-align: center;
	}
	h2 {
		color: #2e7d32;
		margin-bottom: 30px;
	}

    /* Siatka zdjęć */
    .galeria-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 20px;
        padding: 10px;
    }

    .foto-item {
        position: relative;
        height: 300px;
        border-radius: 15px;
        overflow: hidden;
        cursor: pointer;
        box-shadow: 0 4px 15px rgba(0,0,0,0.1);
    }

    .foto-item img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    }

    /* Efekty Hover */
    .foto-item:hover img {
        transform: scale(1.1);
    }

    /* Lightbox (powiększenie) */
    .lightbox {
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.8);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 2000;
        padding: 20px;
    }

    .lightbox img {
        max-width: 90%;
        max-height: 85vh;
        border-radius: 5px;
        box-shadow: 0 0 30px rgba(0,0,0,0.5);
    }

    .close-btn {
        position: absolute;
        top: 30px;
        right: 30px;
        background: none;
        border: none;
        color: white;
        font-size: 3rem;
        cursor: pointer;
    }

    .nav-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(255, 255, 255, 0.1);
    border: none;
    color: white;
    font-size: 2.5rem;
    padding: 20px 15px;
    cursor: pointer;
    transition: background 0.3s;
    border-radius: 5px;
    z-index: 2001;
    }

    .nav-btn:hover {
        background: rgba(255, 255, 255, 0.2);
    }

    .prev {
        left: 20px;
    }

    .next {
        right: 20px;
    }

    /* Animacja pojawiania się Lightboxa */
    .fade-enter-active, .fade-leave-active { transition: opacity 0.3s ease; }
    .fade-enter-from, .fade-leave-to { opacity: 0; }

    /* Responsywność */
    @media (max-width: 600px) {
        .galeria-grid {
            grid-template-columns: 1fr; /* Na telefonach jedno zdjęcie pod drugim */
        }
        .foto-item { height: 250px; }
    }

        /* Ukrycie strzałek na małych ekranach, jeśli zasłaniają zdjęcie lub zmiana ich rozmiaru */
    @media (max-width: 600px) {
        .nav-btn {
            padding: 10px 5px;
            font-size: 1.5rem;
        }
        .prev { left: 5px; }
        .next { right: 5px; }
    }
</style>