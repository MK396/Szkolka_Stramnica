<template>
  <header :class="['navbar-wrapper', { 'is-shrunk': isShrunk }]">
    <div class="nav-content">
      
      <div class="left-element">
        <router-link to="/" class="logo-link" @click="isMenuOpen = false">
          <img src="../assets/logo.jpeg" alt="Logo" class="logo-img">
        </router-link>
      </div>

      <button
        class="hamburger-btn"
        :class="{ 'is-active': isMenuOpen }"
        @click="isMenuOpen = !isMenuOpen"
        aria-label="Otwórz menu"
        :aria-expanded="isMenuOpen"
      >
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </button>

      <div class="right-element">
        
        <div class="top-info-row">
          <div class="info-group">
            <div class="info-item">
              <span class="info-icon">📍</span>
              <div class="info-text">
                <span class="info-label">Adres</span>
                <span class="info-value">Stramnica 36J, Kołobrzeg</span>
                <a href="#map" class="map-button">Jak dojechać</a>
              </div>
            </div>
            
            <div class="info-item">
              <span class="info-icon">⏰</span>
              <div class="info-text">
                <span class="info-label">Godziny otwarcia</span>
                <span class="info-value">Pn-Pt: 8:00-18:00, Sob: 8:00-14:00</span>
                <div :class="['open-info', statusClass]">{{ openInfo }}</div>
              </div>
            </div>
            
            <div class="info-item">
              <span class="info-icon">📞</span>
              <div class="info-text">
                <span class="info-label">Kontakt</span>
                <a href="tel:+48728969006" class="phone-link">+48 728 969 006</a>
                <a href="/kontakt" class="contact-form">Formularz kontaktowy</a>
              </div>
            </div>

            <div class="fb-wrapper">
               <a href="https://www.facebook.com/SzkolkaStramnica" class="social-dot-facebook" target="_blank">
                  <i class="fa fa-facebook"></i>
               </a>
            </div>
          </div>
        </div>

        <nav :class="['bottom-nav', { 'mobile-open': isMenuOpen }]">

          <!-- Panel informacyjny widoczny tylko w menu mobilnym -->
          <div class="mobile-info-panel">
            <div class="mobile-info-row">
              <span class="mi-icon">📍</span>
              <span class="mi-text">Stramnica 36J, 78-100 Kołobrzeg</span>
            </div>
            <div class="mobile-info-row">
              <span class="mi-icon">⏰</span>
              <div class="mi-text">
                <span>Pn-Pt: 8:00–18:00 &nbsp;|&nbsp; Sob: 8:00–14:00</span>
                <span :class="['mobile-status', statusClass]">{{ openInfo }}</span>
              </div>
            </div>
            <div class="mobile-info-row mobile-info-bottom">
              <a href="tel:+48728969006" class="mi-phone">📞 +48 728 969 006</a>
              <a href="https://www.facebook.com/SzkolkaStramnica" class="mi-facebook" target="_blank">
                <i class="fa fa-facebook"></i> Facebook
              </a>
            </div>
          </div>

          <ul class="menu">
            <li>
              <router-link 
                to="/" 
                :class="{ 'active': $route.path === '/' && activeSection === '' }" 
                @click="isMenuOpen = false; activeSection = ''"
              >
                Start
              </router-link>
            </li>
            <li><a href="/#opis"    :class="{ active: isSectionActive('#opis') }"    @click="isMenuOpen = false">O nas</a></li>
            <li><a href="/#oferta"  :class="{ active: isSectionActive('#oferta') }"  @click="isMenuOpen = false">Oferta</a></li>
            <li><a href="/#galeria" :class="{ active: isSectionActive('#galeria') }" @click="isMenuOpen = false">Galeria</a></li>
            <li><router-link to="/katalog" active-class="active" @click="isMenuOpen = false">Katalog</router-link></li>
            <li><router-link to="/kontakt" active-class="active" @click="isMenuOpen = false">Kontakt</router-link></li>
          </ul>
        </nav>
        
      </div>
    </div>
  </header>
</template>

<style scoped>
.navbar-wrapper {
  background-color: #ffffff;
  position: sticky;
  top: 0;
  z-index: 1000;
  width: 100%;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.30);
}

.navbar-wrapper.is-shrunk {
  box-shadow: 0 10px 30px rgba(0,0,0,0.30);
}

.is-shrunk .nav-content {
  height: 80px;
}

.is-shrunk .logo-img {
  height: 60px;
}

.is-shrunk .top-info-row {
  opacity: 0;
  visibility: hidden;
  height: 0;
  margin: 0;
  padding: 0;
  overflow: hidden;
  transition: all 0.3s ease;
}

.nav-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  height: 140px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  transition: height 0.3s ease;
}

.logo-link {
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  transition: opacity 0.2s;
}
.logo-link:hover { opacity: 0.7; }

.left-element {
  position: absolute;
  left: 20px;
  display: flex;
  align-items: center;
}

.logo-img {
  height: 110px;
  width: auto;
  display: block;
  transition: height 0.3s ease;
}

.right-element {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.top-info-row {
  display: flex;
  justify-content: center;
  width: 100%;
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

.info-icon { font-size: 1.2rem; }

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
.phone-link:hover { color: #1b5e20; }

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
.map-button.active, .map-button:hover {
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
.contact-form:hover, .contact-form.active {
  background-color: #2e7d32;
  color: white;
}

.open-info {
  display: inline-block;
  text-align: center;
  margin-top: 5px;
  padding: 6px 12px;
  font-size: 0.75rem;
  background-color: transparent;
  border: 1px solid;
  border-radius: 4px;
  font-weight: 600;
  transition: all 0.3s ease;
}

.status-open        { color: #2e7d32; border-color: #2e7d32; background-color: rgba(46,125,50,0.05); }
.status-closed      { color: #d32f2f; border-color: #d32f2f; background-color: rgba(211,47,47,0.05); }
.status-almost-closed { color: #f57c00; border-color: #f57c00; background-color: rgba(245,124,0,0.05); }

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

/* ─── DESKTOP MENU ─────────────────────────────────────────────────────── */
.bottom-nav {
  display: flex;
  justify-content: center;
  width: 100%;
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

.menu a.active, .menu a:hover { color: #2e7d32; }

.menu a.active::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: #2e7d32;
}

/* ─── MOBILE INFO PANEL – ukryty na desktopie ──────────────────────────── */
.mobile-info-panel { display: none; }

/* ─── HAMBURGER ────────────────────────────────────────────────────────── */
.hamburger-btn {
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 6px;
  width: 44px;
  height: 44px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1100;
}

.bar {
  display: block;
  width: 28px;
  height: 3px;
  background-color: #333;
  border-radius: 3px;
  transition: transform 0.35s cubic-bezier(0.23, 1, 0.32, 1),
              opacity 0.25s ease,
              width 0.3s ease;
  transform-origin: center;
}

.hamburger-btn.is-active .bar:nth-child(1) { transform: translateY(9px) rotate(45deg); }
.hamburger-btn.is-active .bar:nth-child(2) { opacity: 0; width: 0; }
.hamburger-btn.is-active .bar:nth-child(3) { transform: translateY(-9px) rotate(-45deg); }

/* ─── MOBILE ───────────────────────────────────────────────────────────── */
@media (max-width: 1000px) {

  .nav-content {
    height: 80px !important;
    padding: 0 20px;
    align-items: center;
  }

  .logo-img { height: 60px !important; }
  .top-info-row { display: none; }
  .hamburger-btn { display: flex; }
  .right-element { gap: 0; }

  .bottom-nav {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 80px;
    left: 0;
    width: 100%;
    background-color: #ffffff;
    box-shadow: 0 8px 20px rgba(0,0,0,0.15);
    z-index: 999;
  }

  .bottom-nav.mobile-open { display: flex; }

  /* ── Panel informacyjny ── */
  .mobile-info-panel {
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    border-bottom: 1px solid #f0f0f0;
    padding: 12px 20px;
    gap: 2px;
  }

  .mobile-info-row {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 5px 0;
  }

  .mi-icon {
    font-size: 1rem;
    flex-shrink: 0;
  }

  .mi-text {
    font-size: 0.85rem;
    color: #444;
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .mobile-status {
    font-size: 0.78rem;
    font-weight: 700;
    padding: 2px 10px;
    border-radius: 20px;
    border: 1px solid;
    display: inline-block;
    width: fit-content;
  }

  .mobile-info-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 8px;
  }

  .mi-phone {
    font-size: 0.9rem;
    font-weight: 700;
    color: #2e7d32;
    text-decoration: none;
    transition: color 0.2s;
  }
  .mi-phone:hover { color: #1b5e20; }

  .mi-facebook {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 0.85rem;
    font-weight: 700;
    color: #ffffff;
    background-color: #3b5998;
    padding: 6px 16px;
    border-radius: 20px;
    text-decoration: none;
    transition: background-color 0.2s;
  }
  .mi-facebook:hover { background-color: #2d4373; }

  /* ── Lista linków ── */
  .menu {
    flex-direction: column;
    gap: 0;
    width: 100%;
    padding: 8px 0;
  }

  .menu li { width: 100%; }

  .menu a {
    display: block;
    padding: 14px 24px;
    font-size: 1rem;
    border-bottom: 1px solid #f0f0f0;
  }

  .menu li:last-child a { border-bottom: none; }

  .menu a:hover, .menu a.active {
    color: #2e7d32;
    background-color: rgba(46,125,50,0.06);
  }

  .menu a.active::after { display: none; }
}
</style>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { useRoute } from 'vue-router'; // Dodaj ten import na górze

const route = useRoute();

const isShrunk = ref(false);
const isMenuOpen = ref(false);
const activeSection = ref('');

const handleScroll = () => {
  const offset = window.scrollY;
  if (offset > 100) isShrunk.value = true;
  else if (offset < 20) isShrunk.value = false;
};



const isSectionActive = (hash) => {
  // Sekcja jest aktywna TYLKO jeśli jesteśmy na '/' ORAZ observer ją wykrył
  return route.path === '/' && activeSection.value === hash;
};

let observer = null;

const initObserver = () => {
  // Jeśli nie jesteśmy na stronie głównej, czyścimy aktywną sekcję i nie odpalamy observera
  if (route.path !== '/') {
    activeSection.value = '';
    return;
  }

  const sections = ['opis', 'oferta', 'galeria'];

  const elements = sections.map(id => document.getElementById(id)).filter(Boolean);

  if (!elements.length) return;

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          activeSection.value = '#' + entry.target.id;
        }
      });
    },
    {
      // Sekcja jest "aktywna" gdy zajmuje środkową część ekranu
      rootMargin: '-40% 0px -40% 0px',
      threshold: 0,
    }
  );

  elements.forEach(el => observer.observe(el));
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true });
  setTimeout(initObserver, 300);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
  if (observer) observer.disconnect();
});

const openInfo = ref('');
const status = ref('closed');
let timer = null;

// Wspólna klasa CSS statusu – używana i na desktopie, i w panelu mobilnym
const statusClass = computed(() => ({
  'status-open':         status.value === 'open',
  'status-closed':       status.value === 'closed',
  'status-almost-closed': status.value === 'almost',
}));

const updateOpeningStatus = () => {
  const now = new Date();
  const day = now.getDay();
  const currentTimeInMinutes = now.getHours() * 60 + now.getMinutes();
  
  const dateString = now.toISOString().split('T')[0];
  const monthDay = dateString.slice(5);

  const holidays = ['01-01','01-06','05-01','05-03','08-15','11-01','11-11','12-25','12-26'];
  const movableHolidays = ['2026-04-05','2026-04-06','2026-06-04'];

  if (holidays.includes(monthDay) || movableHolidays.includes(dateString)) {
    openInfo.value = "Dziś nieczynne";
    status.value = 'closed';
    return;
  }

  const hoursConfig = {
    weekdays: { start: 8 * 60, end: 18 * 60 },
    saturday: { start: 8 * 60, end: 14 * 60 },
  };

  let todayConfig = null;
  if (day >= 1 && day <= 5) todayConfig = hoursConfig.weekdays;
  else if (day === 6) todayConfig = hoursConfig.saturday;

  if (!todayConfig) {
    openInfo.value = "Dziś nieczynne";
    status.value = 'closed';
    return;
  }

  const timeUntilOpen  = todayConfig.start - currentTimeInMinutes;
  const timeUntilClose = todayConfig.end   - currentTimeInMinutes;

  if (currentTimeInMinutes < todayConfig.start) {
    if (timeUntilOpen <= 60) { openInfo.value = `Otwieramy za ${timeUntilOpen} min!`; status.value = 'almost'; }
    else                     { openInfo.value = "Zamknięte"; status.value = 'closed'; }
  } else if (currentTimeInMinutes >= todayConfig.end) {
    openInfo.value = "Już zamknięte"; status.value = 'closed';
  } else {
    const h = Math.floor(timeUntilClose / 60);
    const m = timeUntilClose % 60;
    if (timeUntilClose <= 60) {
      openInfo.value = `Zamykamy za ${m} min`; status.value = 'almost';
    } else {
      openInfo.value = h > 0 ? `Otwarte jeszcze ${h}h ${m}min` : `Otwarte jeszcze ${m}min`;
      status.value = 'open';
    }
  }
};

onMounted(() => { updateOpeningStatus(); timer = setInterval(updateOpeningStatus, 60000); });
onUnmounted(() => clearInterval(timer));
</script>