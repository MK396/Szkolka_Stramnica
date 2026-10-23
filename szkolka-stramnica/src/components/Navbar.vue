<template>
  <header :class="['navbar-wrapper', { 'is-shrunk': isShrunk, 'mobile-nav-open': isMenuOpen }]">
    <div class="nav-content">
      
      <div class="left-element">
        <router-link to="/" class="logo-link" @click="isMenuOpen = false">
          <img src="../assets/logo.webp" alt="Logo" class="logo-img" width="110" height="110">
        </router-link>
      </div>

      <button
        class="hamburger-btn"
        :class="{ 'is-active': isMenuOpen }"
        @click="isMenuOpen = !isMenuOpen"
        :aria-label="isMenuOpen ? 'Zamknij menu' : 'Otwórz menu'"
        :aria-expanded="isMenuOpen"
      >
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </button>

      <div class="mobile-header-info">
        <a
          href="#map"
          class="mhi-chip"
          title="Stramnica 36J, 78-100 Kołobrzeg"
          @click.prevent="goToSection('#map')"
        >
          <span class="mhi-chip-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 21s-6-5.3-6-10a6 6 0 1 1 12 0c0 4.7-6 10-6 10z"/>
              <circle cx="12" cy="11" r="2.2"/>
            </svg>
          </span>
          <span class="mhi-chip-label">Stramnica 36J</span>
        </a>
        <a href="tel:+48728969006" class="mhi-chip mhi-chip-phone" title="+48 728 969 006">
          <span class="mhi-chip-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M22 16.9v2a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h2a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.5 2.1L7.1 9.5a16 16 0 0 0 6 6l1.1-1.1a2 2 0 0 1 2.1-.5c.8.3 1.7.5 2.6.6a2 2 0 0 1 1.7 2z"/>
            </svg>
          </span>
          <span class="mhi-chip-label">728 969 006</span>
        </a>
        <a
          href="https://www.facebook.com/SzkolkaStramnica"
          class="mobile-header-fb social-dot-facebook"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <FacebookIcon />
        </a>
      </div>

      <div class="right-element">
        <div class="top-info-row">
          <div class="info-group">
            <div class="info-item">
              <span class="info-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M12 21s-6-5.3-6-10a6 6 0 1 1 12 0c0 4.7-6 10-6 10z"/>
                  <circle cx="12" cy="11" r="2.2"/>
                </svg>
              </span>
              <div class="info-copy">
                <span class="info-label">Adres</span>
                <span class="info-value">Stramnica 36J, Kołobrzeg</span>
                <a href="#map" class="map-button" @click.prevent="goToSection('#map')">Jak dojechać</a>
              </div>
            </div>
            
            <div class="info-item">
              <span class="info-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="12" cy="12" r="9"/>
                  <path d="M12 7v5l3 2"/>
                </svg>
              </span>
              <div class="info-copy">
                <span class="info-label">Godziny otwarcia</span>
                <span class="info-value">Pn-Pt: 8:00-18:00, Sob: 8:00-14:00</span>
                <div v-if="openInfo" :class="['open-info', statusClass]">{{ openInfo }}</div>
              </div>
            </div>
            
            <div class="info-item">
              <span class="info-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M22 16.9v2a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h2a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.5 2.1L7.1 9.5a16 16 0 0 0 6 6l1.1-1.1a2 2 0 0 1 2.1-.5c.8.3 1.7.5 2.6.6a2 2 0 0 1 1.7 2z"/>
                </svg>
              </span>
              <div class="info-copy">
                <span class="info-label">Kontakt</span>
                <span class="info-value">+48 728 969 006</span>
                <a href="/kontakt" class="contact-form">Formularz kontaktowy</a>
              </div>
            </div>

            <div class="fb-wrapper">
               <a href="https://www.facebook.com/SzkolkaStramnica" class="social-dot-facebook" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <FacebookIcon />
               </a>
            </div>
          </div>
        </div>

        <nav :class="['bottom-nav', { 'mobile-open': isMenuOpen }]">

          <div class="mobile-info-panel">
            <div class="mobile-info-row">
              <span class="mi-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M12 21s-6-5.3-6-10a6 6 0 1 1 12 0c0 4.7-6 10-6 10z"/>
                  <circle cx="12" cy="11" r="2.2"/>
                </svg>
              </span>
              <span class="mi-text">Stramnica 36J, 78-100 Kołobrzeg</span>
            </div>
            <div class="mobile-info-row">
              <span class="mi-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="12" cy="12" r="9"/>
                  <path d="M12 7v5l3 2"/>
                </svg>
              </span>
              <div class="mi-text">
                <span>Pn-Pt: 8:00–18:00 &nbsp;|&nbsp; Sob: 8:00–14:00</span>
                <span v-if="openInfo" :class="['mobile-status', statusClass]">{{ openInfo }}</span>
              </div>
            </div>
            <div class="mobile-info-row mobile-info-bottom">
              <a href="tel:+48728969006" class="mi-phone">
                <svg class="mi-phone-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <path d="M22 16.9v2a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h2a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.5 2.1L7.1 9.5a16 16 0 0 0 6 6l1.1-1.1a2 2 0 0 1 2.1-.5c.8.3 1.7.5 2.6.6a2 2 0 0 1 1.7 2z"/>
                </svg>
                +48 728 969 006
              </a>
              <a href="https://www.facebook.com/SzkolkaStramnica" class="mi-facebook" target="_blank" rel="noopener noreferrer">
                <span class="mi-facebook-icon" aria-hidden="true">
                  <FacebookIcon />
                </span>
                Facebook
              </a>
            </div>
          </div>

          <ul class="menu">
            <li>
              <a
                href="/"
                :class="{ active: isStartActive }"
                @click.prevent="goHome"
              >
                Start
              </a>
            </li>
            <li>
              <a href="/#opis" :class="{ active: isSectionActive('#opis') }" @click.prevent="goToSection('#opis')">O nas</a>
            </li>
            <li>
              <a href="/#oferta" :class="{ active: isSectionActive('#oferta') }" @click.prevent="goToSection('#oferta')">Oferta</a>
            </li>
            <li>
              <a href="/#galeria" :class="{ active: isSectionActive('#galeria') }" @click.prevent="goToSection('#galeria')">Galeria</a>
            </li>
            <li>
              <router-link to="/kontakt" active-class="active" @click="isMenuOpen = false">Kontakt</router-link>
            </li>
          </ul>
        </nav>
      </div>
    </div>

    <div
      v-if="isMenuOpen"
      class="mobile-nav-backdrop"
      aria-hidden="true"
      @click="isMenuOpen = false"
    ></div>
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
  align-items: flex-start;
  gap: 12px;
}

.info-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  height: 2.4em; /* środek między etykietą a wartością */
  color: #2e7d32;
}

.info-icon svg {
  width: 22px;
  height: 22px;
}

.info-copy {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.info-label {
  font-weight: 800;
  font-size: 0.7rem;
  text-transform: uppercase;
  color: #1a1a1a;
  letter-spacing: 0.5px;
}

.info-value {
  font-size: 0.85rem;
  color: #666;
  line-height: 1.3;
}

.map-button,
.contact-form,
.open-info {
  display: inline-block;
  text-align: center;
  margin-top: 5px;
  padding: 6px 12px;
  font-size: 0.75rem;
  font-weight: 600;
  border-radius: 4px;
  transition: background-color 0.2s, color 0.2s;
}

.map-button,
.contact-form {
  text-decoration: none;
  color: #2e7d32;
  background-color: transparent;
  border: 1px solid #2e7d32;
  cursor: pointer;
}

.map-button.active,
.map-button:hover,
.contact-form:hover,
.contact-form.active {
  background-color: #2e7d32;
  color: white;
}

.open-info {
  align-self: stretch;
  box-sizing: border-box;
  background-color: transparent;
  border: 1px solid;
}

.status-open        { color: #2e7d32; border-color: #2e7d32; background-color: rgba(46,125,50,0.05); }
.status-closed      { color: #d32f2f; border-color: #d32f2f; background-color: rgba(211,47,47,0.05); }
.status-almost-closed { color: #f57c00; border-color: #f57c00; background-color: rgba(245,124,0,0.05); }

.social-dot-facebook {
  width: 36px;
  height: 36px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: transform 0.2s ease;
}
.social-dot-facebook:hover {
  transform: scale(1.08);
}

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

.mobile-header-info { display: none; }
.mobile-info-panel { display: none; }
.mobile-nav-backdrop { display: none; }

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

@media (min-width: 1001px) {
  .nav-content {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: 1fr;
    align-items: center;
    column-gap: 12px;
  }

  .left-element {
    position: static;
    grid-column: 1;
    grid-row: 1;
    justify-self: start;
    width: max-content;
  }

  .right-element {
    grid-column: 2;
    grid-row: 1;
    width: 100%;
    min-width: 0;
    align-items: center;
    justify-content: center;
  }

  .top-info-row {
    width: 100%;
    justify-content: center;
  }

  .info-group {
    justify-content: center;
  }

  .bottom-nav {
    width: 100%;
    justify-content: center;
  }
}

@media (max-width: 1000px) {

  .navbar-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    z-index: 1100;
  }

  .navbar-wrapper.mobile-nav-open {
    z-index: 1100;
  }

  .navbar-wrapper.is-shrunk .nav-content {
    height: 72px !important;
  }

  .navbar-wrapper.is-shrunk .logo-img {
    height: 50px !important;
  }

  .nav-content {
    display: grid;
    grid-template-columns: auto minmax(0, 1fr) auto;
    grid-template-rows: 72px;
    height: 72px !important;
    min-height: 72px;
    max-height: 72px;
    max-width: none;
    padding: 0 8px;
    align-items: center;
    gap: 6px;
    overflow: visible;
    position: relative;
    z-index: 2;
    background-color: #ffffff;
  }

  .navbar-wrapper.mobile-nav-open .nav-content {
    grid-template-columns: 1fr auto;
    box-shadow: 0 1px 0 #e8e8e8;
  }

  .navbar-wrapper.mobile-nav-open .mobile-header-info {
    display: none;
  }

  .logo-link {
    line-height: 0;
  }

  .logo-img {
    height: 50px !important;
    max-height: 50px;
    width: auto;
  }

  .top-info-row { display: none; }

  .left-element,
  .mobile-header-info,
  .hamburger-btn {
    position: relative;
    z-index: 2;
    pointer-events: auto;
  }

  .left-element {
    grid-column: 1;
    grid-row: 1;
    align-self: center;
    left: auto;
  }

  .mobile-header-info {
    grid-column: 2;
    grid-row: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    align-self: center;
    gap: 4px;
    min-width: 0;
    height: 100%;
    overflow: hidden;
  }

  .mobile-header-fb {
    flex-shrink: 0;
    width: 24px;
    height: 24px;
    margin-left: 2px;
  }

  .hamburger-btn {
    display: flex;
    grid-column: 3;
    grid-row: 1;
    position: static;
    transform: none;
    justify-self: end;
    align-self: center;
    flex-shrink: 0;
    width: 46px;
    height: 46px;
  }

  .hamburger-btn.is-active .bar:nth-child(1) {
    transform: translateY(9px) rotate(45deg);
  }

  .hamburger-btn.is-active .bar:nth-child(3) {
    transform: translateY(-9px) rotate(-45deg);
  }

  .mhi-chip {
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 3px;
    min-width: 0;
    flex: 0 1 auto;
    padding: 0;
    border-radius: 8px;
    text-decoration: none;
    color: inherit;
    -webkit-tap-highlight-color: transparent;
  }

  .mhi-chip:active {
    background: rgba(46, 125, 50, 0.08);
  }

  .mhi-chip-static {
    cursor: default;
  }

  .mhi-chip-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #2e7d32;
  }

  .mhi-chip-icon {
    flex-shrink: 0;
  }

  .mhi-chip-icon svg {
    width: 14px;
    height: 14px;
  }

  .mhi-chip-label {
    font-size: clamp(0.58rem, 2.85vw, 0.66rem);
    font-weight: 600;
    color: #444;
    line-height: 1.1;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .mhi-chip-badge {
    font-size: 0.72rem;
    font-weight: 700;
    line-height: 1.15;
    padding: 3px 7px;
    border-radius: 999px;
    border: 1px solid;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
  }

  .right-element {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    width: 100%;
    height: 0;
    overflow: hidden;
    pointer-events: none;
    z-index: 4;
  }

  .navbar-wrapper.mobile-nav-open .right-element {
    height: auto;
    overflow: visible;
  }

  .bottom-nav {
    display: none;
    flex-direction: column;
    position: relative;
    width: 100%;
    background-color: #ffffff;
    border-top: 1px solid #e8e8e8;
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.12);
    max-height: calc(100dvh - 72px);
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    pointer-events: auto;
  }

  .bottom-nav.mobile-open { display: flex; }

  .mobile-nav-backdrop {
    display: block;
    position: fixed;
    inset: 0;
    top: 72px;
    background: rgba(0, 0, 0, 0.45);
    z-index: 1;
  }

  .hamburger-btn {
    z-index: 5;
  }

  .hamburger-btn .bar {
    width: 28px;
  }

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
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    color: #2e7d32;
  }

  .mi-icon svg {
    width: 18px;
    height: 18px;
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
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-size: 0.85rem;
    font-weight: 400;
    color: #444;
    text-decoration: none;
  }

  .mi-phone-icon {
    width: 16px;
    height: 16px;
    color: #2e7d32;
    flex-shrink: 0;
  }

  .mi-facebook {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 0.85rem;
    font-weight: 700;
    color: #0163e0;
    background-color: rgba(1, 99, 224, 0.08);
    padding: 6px 14px 6px 10px;
    border-radius: 20px;
    text-decoration: none;
    transition: background-color 0.2s, transform 0.2s;
  }
  .mi-facebook:hover {
    background-color: rgba(1, 99, 224, 0.14);
  }

  .mi-facebook-icon {
    display: block;
    width: 22px;
    height: 22px;
    flex-shrink: 0;
  }

  .menu {
    flex-direction: column;
    gap: 0;
    width: 100%;
    padding: 8px 0;
  }

  .menu li { width: 100%; }

  .menu a {
    display: block;
    padding: 16px 20px;
    font-size: 0.95rem;
    border-bottom: 1px solid #eaeaea;
  }

  .menu li:last-child a { border-bottom: none; }

  .menu a:hover, .menu a.active {
    color: #2e7d32;
    background-color: rgba(46,125,50,0.06);
  }

  .menu a.active::after { display: none; }

  @supports not (-webkit-touch-callout: none) {
    .navbar-wrapper {
      position: relative;
      top: auto;
      flex: none;
    }
  }
}
</style>

<script setup>
import { ref, computed, watch, onMounted, onUnmounted, nextTick } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import FacebookIcon from './FacebookIcon.vue';

const route = useRoute();
const router = useRouter();

const isShrunk = ref(false);
const isMenuOpen = ref(false);
const activeSection = ref('');

const SECTION_IDS = ['opis', 'oferta', 'galeria'];

let scrollSpyLockedHash = null;
let scrollSpyUnlockTimer = null;
let scrollEndTimer = null;
let snappingToTop = false;

let pageScrollerEl = null;

function getPageScroller() {
  const shell = document.querySelector('.page-shell');
  if (!shell) return null;
  const oy = getComputedStyle(shell).overflowY;
  return oy === 'auto' || oy === 'scroll' ? shell : null;
}

function scrollTopOfPage() {
  const scroller = getPageScroller();
  return scroller ? scroller.scrollTop : window.scrollY;
}

function getNavOffset() {
  if (getPageScroller()) return 0;
  if (typeof window !== 'undefined' && window.matchMedia('(max-width: 1000px)').matches) {
    return 72;
  }
  return isShrunk.value ? 80 : 100;
}

function getSectionProbe() {
  return getNavOffset() + 40;
}

const isStartActive = computed(
  () => route.path === '/' && activeSection.value === ''
);

const isSectionActive = (hash) =>
  route.path === '/' && activeSection.value === hash;

const scrollToHash = (hash) => {
  const el = document.querySelector(hash);
  if (!el) return;
  const scroller = getPageScroller();
  if (scroller) {
    const top = el.getBoundingClientRect().top - scroller.getBoundingClientRect().top + scroller.scrollTop;
    scroller.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
    return;
  }
  const top = el.getBoundingClientRect().top + window.scrollY - getNavOffset();
  window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
};

const goHome = async () => {
  isMenuOpen.value = false;
  activeSection.value = '';
  if (route.path !== '/') {
    await router.push('/');
  }
  const scroller = getPageScroller();
  if (scroller) scroller.scrollTo({ top: 0, behavior: 'smooth' });
  else window.scrollTo({ top: 0, behavior: 'smooth' });
};

const lockScrollSpy = (hash) => {
  scrollSpyLockedHash = hash;
  clearTimeout(scrollSpyUnlockTimer);
  scrollSpyUnlockTimer = setTimeout(() => {
    scrollSpyLockedHash = null;
    updateActiveSection();
  }, 450);
};

const goToSection = async (hash) => {
  isMenuOpen.value = false;
  activeSection.value = hash;
  lockScrollSpy(hash);
  if (route.path !== '/') {
    await router.push({ path: '/', hash });
    await nextTick();
    setTimeout(() => scrollToHash(hash), 80);
    return;
  }
  if (route.hash !== hash) {
    await router.replace({ hash });
  }
  scrollToHash(hash);
};

const updateActiveSection = () => {
  if (route.path !== '/') {
    activeSection.value = '';
    return;
  }

  if (scrollTopOfPage() < 180) {
    activeSection.value = '';
    return;
  }

  if (scrollSpyLockedHash) {
    activeSection.value = scrollSpyLockedHash;
    return;
  }

  const scroller = getPageScroller();
  const limit = scroller
    ? scroller.getBoundingClientRect().top + 40
    : getSectionProbe();

  let current = '';
  for (let i = SECTION_IDS.length - 1; i >= 0; i--) {
    const id = SECTION_IDS[i];
    const el = document.getElementById(id);
    if (!el) continue;
    if (el.getBoundingClientRect().top <= limit) {
      current = `#${id}`;
      break;
    }
  }
  activeSection.value = current;
};

const handleScroll = () => {
  const offset = scrollTopOfPage();
  if (offset > 100) isShrunk.value = true;
  else if (offset < 20) isShrunk.value = false;
  updateActiveSection();

  if (getPageScroller()) return;
  if (window.matchMedia('(max-width: 1000px)').matches) {
    clearTimeout(scrollEndTimer);
    scrollEndTimer = setTimeout(() => {
      const y = window.scrollY;
      if (snappingToTop || y <= 0 || y >= 72) return;
      snappingToTop = true;
      window.scrollTo({ top: 0, behavior: 'instant' });
      setTimeout(() => { snappingToTop = false; }, 400);
    }, 160);
  }
};

function bindPageScroller() {
  const next = getPageScroller();
  if (next === pageScrollerEl) return;
  pageScrollerEl?.removeEventListener('scroll', handleScroll);
  pageScrollerEl = next;
  pageScrollerEl?.addEventListener('scroll', handleScroll, { passive: true });
}

watch(isMenuOpen, (open) => {
  if (typeof document === 'undefined') return;
  const shell = document.querySelector('.page-shell');
  const shellScrolls = shell && (
    getComputedStyle(shell).overflowY === 'auto' ||
    getComputedStyle(shell).overflowY === 'scroll' ||
    shell.style.overflowY === 'hidden'
  );
  if (shellScrolls) {
    shell.style.overflowY = open ? 'hidden' : '';
    return;
  }
  document.body.style.overflow = open ? 'hidden' : '';
});

watch(
  () => route.fullPath,
  async (toFull, fromFull) => {
    isMenuOpen.value = false;
    // Pierwsze załadowanie / odświeżenie — bez skoku do hash
    if (!fromFull) {
      activeSection.value = '';
      return;
    }
    await nextTick();
    if (route.path === '/' && route.hash) {
      activeSection.value = route.hash;
      lockScrollSpy(route.hash);
      setTimeout(() => scrollToHash(route.hash), 80);
    } else if (route.path !== '/') {
      activeSection.value = '';
    } else {
      updateActiveSection();
    }
  }
);

const openInfo = ref('');
const status = ref('');
let timer = null;

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
    openInfo.value = 'Dziś nieczynne';
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
    openInfo.value = 'Dziś nieczynne';
    status.value = 'closed';
    return;
  }

  const timeUntilOpen = todayConfig.start - currentTimeInMinutes;
  const timeUntilClose = todayConfig.end - currentTimeInMinutes;

  if (currentTimeInMinutes < todayConfig.start) {
    if (timeUntilOpen <= 60) {
      openInfo.value = `Otwieramy za ${timeUntilOpen} min!`;
      status.value = 'almost';
    } else {
      openInfo.value = 'Zamknięte';
      status.value = 'closed';
    }
  } else if (currentTimeInMinutes >= todayConfig.end) {
    openInfo.value = 'Już zamknięte';
    status.value = 'closed';
  } else {
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

// Od razu w setup — bez czerwonego flasha przed onMounted
updateOpeningStatus();

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true });
  window.addEventListener('resize', bindPageScroller);
  bindPageScroller();
  handleScroll();
  timer = setInterval(updateOpeningStatus, 60000);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
  window.removeEventListener('resize', bindPageScroller);
  pageScrollerEl?.removeEventListener('scroll', handleScroll);
  clearInterval(timer);
  clearTimeout(scrollSpyUnlockTimer);
  clearTimeout(scrollEndTimer);
  if (typeof document !== 'undefined') document.body.style.overflow = '';
});
</script>