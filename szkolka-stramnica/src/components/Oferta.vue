<template>
  <section class="oferta-container">
    <h2>Nasza Oferta</h2>
    <div class="oferta-text">
      <p>Szkółka Stramnica to rodzinna firma, gdzie z pasją zajmujemy się uprawą i sprzedażą roślin. Naszym celem jest dostarczenie klientom zdrowych, pięknych i trwałych roślin, które będą stanowić ozdobę każdego ogrodu.</p>
      <p>W ofercie naszej szkółki roślin znajdziesz szeroki wybór roślin, zarówno tych popularnych, jak i rzadziej spotykanych. Dbamy o to, aby nieustannie poszerzać nasz asortyment o nowe gatunki i odmiany, które zaspokoją nawet najbardziej wymagające gusta. Wszystkie nasze rośliny są starannie wyselekcjonowane i uprawiane zgodnie z najwyższymi standardami.</p>
    </div>
    <div class="rosliny-grid">
      <div class="karta">
        <span class="ikona">🌲</span>
        <h3>Iglaki</h3>
        <p>Szeroki wybór tui i świerków.</p>
      </div>
      <div class="karta">
        <span class="ikona">🌸</span>
        <h3>Kwiaty</h3>
        <p>Byliny i rośliny ozdobne.</p>
      </div>
      <div class="karta">
        <span class="ikona">🌳</span>
        <h3>Drzewa</h3>
        <p>Drzewa owocowe i alejowe.</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
  .oferta-container {
    padding: 50px 20px;
    text-align: center; /* To centruje h2 i inline-blocki */
  }

  h2 {
    color: #2e7d32;
    margin-bottom: 30px;
  }

  .oferta-text {
    max-width: 1000px;
    margin: 0 auto 40px auto; /* KLUCZ: Centrowanie bloku na stronie */
    text-align: center;       /* Centrowanie tekstu wewnątrz */
  }

  .oferta-text p {
    margin-bottom: 20px;
    line-height: 1.8;
  }

  .rosliny-grid {
    display: flex;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
  }

  .karta {
    background: white;
    border: 1px solid #e0e0e0;
    padding: 20px;
    border-radius: 10px;
    width: 250px;
    transition: transform 0.3s;
  }
  .karta:hover {
    transform: translateY(-5px);
    border-color: #2e7d32;
  }
  .ikona {
    font-size: 3rem;
  }
</style>