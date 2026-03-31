<template>
  <header class="navbar-wrapper">
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
              </div>
            </div>
            
            <div class="info-item">
              <span class="info-icon">⏰</span>
              <div class="info-text">
                <span class="info-label">Godziny otwarcia</span>
                <span class="info-value">Pn-Pt: 8:00-18:00, Sob: 8:00-14:00</span>
              </div>
            </div>
            
            <div class="info-item">
              <span class="info-icon">📞</span>
              <div class="info-text">
                <span class="info-label">Kontakt</span>
                <a href="tel:+48728969006" class="phone-link">+48 728 969 006</a>
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
  box-shadow: 0 4px 20px rgba(0,0,0,0.06);
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
  justify-content: flex-end;
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
@media (max-width: 1024px) {
  .nav-content {
    height: auto;
    flex-direction: column;
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