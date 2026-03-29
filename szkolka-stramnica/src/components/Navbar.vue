<template>
  <nav class="navbar">
    <div class="logo">Szkółka Stramnica</div>
    <ul class="menu">
      <li><a href="#">Strona główna</a></li>
      <li><a href="#oferta">Oferta</a></li>
      <li><a href="#kontakt">Kontakt</a></li>
    </ul>
  </nav>
</template>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 50px;
  background-color: #ffffff;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
}
.logo {
  font-weight: bold;
  font-size: 1.5rem;
  color: #2e7d32;
}
.menu {
  display: flex;
  list-style: none;
  gap: 20px;
}
.menu a {
  text-decoration: none;
  color: #333;
  font-weight: 500;
  transition: 0.3s;
}
.menu a:hover {
  color: #2e7d32;
}
</style>