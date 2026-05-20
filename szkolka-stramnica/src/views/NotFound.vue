<template>
  <div class="error-container">
    <div class="error-card">
      <div class="error-icon">🌲</div>
      <h1 class="error-code">404</h1>
      <h2 class="error-title">Strona nie istnieje</h2>
      <p class="error-message">
        Niestety nie znaleźliśmy strony o podanym adresie. Prawdopodobnie została przeniesiona lub wpisany adres jest błędny.
      </p>
      <router-link to="/" class="back-home-btn">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="btn-icon"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
        Wróć do strony głównej
      </router-link>
    </div>
  </div>
</template>

<script setup>
// Kod komponentu
</script>

<style scoped>
.error-container {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 70vh; /* Centruje w pionie, zostawiając miejsce na Twój istniejący header/footer */
  padding: 20px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background-color: #f8fafc;
}

.error-card {
  text-align: center;
  max-width: 480px;
  width: 100%;
  padding: 40px 30px;
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.05);
  animation: fadeIn 0.6s ease-out;
}

.error-icon {
  font-size: 3rem;
  margin-bottom: 10px;
  animation: float 3s ease-in-out infinite;
}

.error-code {
  font-size: 6rem;
  font-weight: 800;
  line-height: 1;
  margin: 0;
  background: linear-gradient(135deg, #2e7d32, #4caf50); /* Zielone gradienty pasujące do szkółki roślin */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: -2px;
}

.error-title {
  font-size: 1.75rem;
  font-weight: 700;
  color: #1e293b;
  margin: 15px 0 10px 0;
}

.error-message {
  font-size: 1rem;
  color: #64748b;
  line-height: 1.6;
  margin-bottom: 30px;
}

.back-home-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background-color: #2e7d32; /* Kolor zielony pasujący do akcentów na stronie głównej */
  color: #ffffff;
  font-weight: 600;
  font-size: 0.95rem;
  text-decoration: none;
  padding: 12px 24px;
  border-radius: 8px;
  transition: background-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
  box-shadow: 0 4px 6px -1px rgba(46, 125, 50, 0.2);
}

.back-home-btn:hover {
  background-color: #1b5e20;
  transform: translateY(-1px);
  box-shadow: 0 10px 15px -3px rgba(46, 125, 50, 0.3);
}

.back-home-btn:active {
  transform: translateY(1px);
}

.btn-icon {
  transition: transform 0.2s ease;
}

.back-home-btn:hover .btn-icon {
  transform: translateX(-3px);
}

/* Animacje */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-8px);
  }
}
</style>