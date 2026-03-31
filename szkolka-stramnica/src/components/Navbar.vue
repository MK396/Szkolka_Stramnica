<template>
  <header :class="['navbar-wrapper', { 'is-shrunk': isShrunk }]">
    <div class="nav-content">
      
      <div class="left-element">
        <img src="../assets/logo.jpeg" alt="Logo" class="logo-img">
      </div>

      <div class="right-element">
        
        <div class="top-info-row">
          <div class="info-group">
            <div class="info-item">
              <span class="info-icon">📍</span>
              <div class="info-text">
                <span class="info-label">Adres</span>
                <span class="info-value">Stramnica 36J, Kołobrzeg</span>
                <a href="#kontakt" class="map-button">Jak dojechać</a>
              </div>
            </div>
            
            <div class="info-item">
              <span class="info-icon">⏰</span>
              <div class="info-text">
                <span class="info-label">Godziny otwarcia</span>
                <span class="info-value">Pn-Pt: 8:00-18:00, Sob: 8:00-14:00</span>
                <div :class="[
                  'open-info', 
                  { 
                    'status-open': status === 'open', 
                    'status-closed': status === 'closed', 
                    'status-almost-closed': status === 'almost' 
                  }
                ]">
                  {{ openInfo }}
                </div>             
              </div>
            </div>
            
            <div class="info-item">
              <span class="info-icon">📞</span>
              <div class="info-text">
                <span class="info-label">Kontakt</span>
                <a href="tel:+48728969006" class="phone-link">+48 728 969 006</a>
                <a href="#oferta" class="contact-form">Formularz kontaktowy</a>
              </div>
            </div>

            <div class="fb-wrapper">
               <a href="https://www.facebook.com/SzkolkaStramnica" class="social-dot-facebook" target="_blank">
                  <i class="fa fa-facebook"></i>
               </a>
            </div>
          </div>
        </div>

        <nav class="bottom-nav">
          <ul class="menu">
            <li><a href="#" class="active">Start</a></li>
            <li><a href="#o-nas">O nas</a></li>
            <li><a href="#oferta">Oferta</a></li>
            <li><a href="#kontakt">Kontakt</a></li>
          </ul>
        </nav>
        
      </div>
    </div>
  </header>
</template>

<style scoped>
/* Główna otoczka - tło i cień na całą szerokość ekranu */
.navbar-wrapper {
  background-color: #ffffff;
  position: sticky;
  top: 0;
  z-index: 1000;
  width: 100%;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.30);
}

.navbar-wrapper.is-shrunk {
  box-shadow: 0 10px 30px rgba(0,0,0,0.30); /* Mocniejszy cień przy przewijaniu */
}

.is-shrunk .nav-content {
  height: 80px; /* Nowa, mniejsza wysokość paska */
}

.is-shrunk .logo-img {
  height: 60px; /* Skalujemy logo, żeby pasowało do mniejszego paska */
}

/* Możesz też ukryć górny wiersz z danymi, aby zaoszczędzić miejsce */
.is-shrunk .top-info-row {
  opacity: 0;
  visibility: hidden;
  height: 0;
  margin: 0;
  padding: 0;
  overflow: hidden;
  transition: all 0.3s ease;
}

/* KONTENER ŚRODKUJĄCY - to on robi "pływające marginesy" */
.nav-content {
  max-width: 1000px; /* Maksymalna szerokość treści */
  margin: 0 auto;    /* Centrowanie */
  padding: 0 20px;   /* Bezpieczny margines na małych ekranach */
  height: 140px;     /* Wysokość Navbaru */
  display: flex;
  align-items: stretch;
}

.left-element {
  display: flex;
  align-items: center;
  padding-right: 40px;
}

.logo-img {
  height: 110px;
  width: auto;
  display: block;
}

.right-element {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* Rozpycha info do góry, menu na dół */
}

.top-info-row {
  display: flex;
  justify-content: flex-end;
  padding-top: 15px;
}

.info-group {
  display: flex;
  align-items: center;
  gap: 45px;
}

.info-item {
  display: flex;
  align-items: center;
  gap: 12px;
}

.info-icon {
  font-size: 1.2rem;
}

.info-text {
  display: flex;
  flex-direction: column;
}

.info-label {
  font-weight: 800;
  font-size: 0.7rem;
  text-transform: uppercase;
  color: #1a1a1a;
  letter-spacing: 0.5px;
}

.info-value, .phone-link {
  font-size: 0.85rem;
  color: #666;
  text-decoration: none;
  line-height: 1.3;
}

.phone-link {
  color: #2e7d32;
  font-weight: 700;
  transition: color 0.2s;
}

.phone-link:hover {
  color: #1b5e20;
}

.map-button {
  text-decoration: none;
  display: inline-block;
  text-align: center;
  margin-top: 5px;
  padding: 6px 12px;
  font-size: 0.75rem;
  color: #2e7d32;
  background-color: transparent;
  border: 1px solid #2e7d32;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s, color 0.2s;
}
.map-button.active, 
.map-button:hover {
  background-color: #2e7d32;
  color: white;
}

.contact-form {
  text-decoration: none;
  display: inline-block;
  text-align: center;
  margin-top: 5px;
  padding: 6px 12px;
  font-size: 0.75rem;
  color: #2e7d32;
  background-color: transparent;
  border: 1px solid #2e7d32;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s, color 0.2s;
}

.contact-form:hover,
.contact-form.active {
  background-color: #2e7d32;
  color: white;
}

.open-info {
  text-decoration: none;
  display: inline-block;
  text-align: center;
  margin-top: 5px;
  padding: 6px 12px;
  font-size: 0.75rem;
  background-color: transparent;
  border: 1px solid; /* zostawiamy szerokość, kolor uzupełnią klasy poniżej */
  border-radius: 4px;
  font-weight: 600;
  transition: all 0.3s ease;
}

/* Klasa dla stanu OTWARTE */
.status-open {
  color: #2e7d32;
  border-color: #2e7d32;
  background-color: rgba(46, 125, 50, 0.05); /* opcjonalne bardzo lekkie tło */
}

/* Klasa dla stanu ZAMKNIĘTE */
.status-closed {
  color: #d32f2f; /* Czerwony */
  border-color: #d32f2f;
  background-color: rgba(211, 47, 47, 0.05); /* opcjonalne bardzo lekkie tło */
}

.status-almost-closed {
  color: #f57c00; /* Pomarańczowy */
  border-color: #f57c00;
  background-color: rgba(245, 124, 0, 0.05); /* opcjonalne bardzo lekkie tło */
}

.social-dot-facebook {
  width: 36px;
  height: 36px;
  background-color: #3b5998;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: transform 0.2s, background-color 0.2s;
}

.social-dot-facebook:hover {
  background-color: #2d4373;
  transform: scale(1.1);
}

/* PASEK MENU */
.bottom-nav {
  display: flex;
  justify-content: center;
  padding-bottom: 15px;
}

.menu {
  display: flex;
  list-style: none;
  gap: 35px;
  margin: 0;
  padding: 0;
}

.menu a {
  text-decoration: none;
  color: #333;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 0.95rem;
  position: relative;
  transition: color 0.3s;
}

/* Efekt najechania na menu */
.menu a.active, .menu a:hover {
  color: #2e7d32;
}

/* Opcjonalna linia pod aktywnym linkiem */
.menu a.active::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: #2e7d32;
}

/* Responsywność dla tabletów i telefonów */
@media (max-width: 1000px) {
  .nav-content {
    height: auto;
    flex-direction: row;
    padding: 20px;
    align-items: center;
  }
  .info-group {
    display: none; /* Ukrywamy szczegóły na małych ekranach dla czytelności */
  }
  .right-element {
    width: 100%;
    align-items: center;
  }
  .bottom-nav {
    justify-content: center;
    padding-top: 20px;
  }
}
</style>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isShrunk = ref(false);
const isMenuOpen = ref(false);

const handleScroll = () => {
  // Używamy progu z "zapasem", aby uniknąć migotania
  const offset = window.scrollY;
  if (offset > 100) {
    isShrunk.value = true;
  } else if (offset < 20) {
    isShrunk.value = false;
  }
};

onMounted(() => {
  // throttle: dodajemy pasywne słuchanie dla lepszej wydajności
  window.addEventListener('scroll', handleScroll, { passive: true });
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});




onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});



const openInfo = ref('');
const status = ref('closed'); // 'open', 'closed', 'almost'
let timer = null;

const updateOpeningStatus = () => {
  const now = new Date();
  const day = now.getDay(); 
  const hour = now.getHours();
  const minute = now.getMinutes();
  const currentTimeInMinutes = hour * 60 + minute;

  const hoursConfig = {
    weekdays: { start: 8 * 60, end: 18 * 60 },
    saturday: { start: 8 * 60, end: 14 * 60 }
  };

  let todayConfig = null;
  if (day >= 1 && day <= 5) todayConfig = hoursConfig.weekdays;
  else if (day === 6) todayConfig = hoursConfig.saturday;

  // 1. Dzień wolny
  if (!todayConfig) {
    openInfo.value = "Dziś nieczynne";
    status.value = 'closed';
    return;
  }

  const timeUntilOpen = todayConfig.start - currentTimeInMinutes;
  const timeUntilClose = todayConfig.end - currentTimeInMinutes;

  // 2. Przed otwarciem
  if (currentTimeInMinutes < todayConfig.start) {
    if (timeUntilOpen <= 60) {
      openInfo.value = `Otwieramy za ${timeUntilOpen} min!`;
      status.value = 'almost';
    } else {
      openInfo.value = "Jeszcze zamknięte";
      status.value = 'closed';
    }
  } 
  // 3. Po zamknięciu
  else if (currentTimeInMinutes >= todayConfig.end) {
    openInfo.value = "Już zamknięte";
    status.value = 'closed';
  } 
  // 4. W trakcie otwarcia
  else {
    const h = Math.floor(timeUntilClose / 60);
    const m = timeUntilClose % 60;

    if (timeUntilClose <= 60) {
      openInfo.value = `Zamykamy za ${m} min`;
      status.value = 'almost';
    } else {
      openInfo.value = h > 0 ? `Otwarte jeszcze ${h}h ${m}min` : `Otwarte jeszcze ${m}min`;
      status.value = 'open';
    }
  }
};

onMounted(() => {
  updateOpeningStatus();
  timer = setInterval(updateOpeningStatus, 60000);
});

onUnmounted(() => {
  clearInterval(timer);
});
</script>