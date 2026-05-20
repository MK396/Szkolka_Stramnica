<template>
  <section class="oferta-container" id="oferta">
    <h2>Nasza Oferta</h2>
    <div class="oferta-text-grid">
      <div class="oferta-text">
        <p>Oferujemy szeroki wybór <strong>roślin ozdobnych</strong>, które doskonale sprawdzą się w każdym ogrodzie. Nasza oferta obejmuje krzewy, drzewa oraz byliny, które dodadzą uroku każdej przestrzeni. Wszystkie nasze rośliny są zdrowe, dobrze rozwinięte i gotowe do posadzenia. Dzięki wieloletniemu doświadczeniu w branży służymy fachową radą, w wyborze odpowiednich gatunków do każdego rodzaju ogrodu. Nieustannie poszerzamy naszą ofertę roślin ogrodowych, aby sprostać okazaniom nawet najbardziej wymagających klientów. Znajdziesz u nas między innymi:</p>
      </div>

      <div class="rosliny-grid-wrapper">
        <div class="rosliny-grid">
          <div class="karta">
            <span class="ikona">🌳</span>
            <h3>Drzewa</h3>
          </div>
          <div class="karta">
            <span class="ikona">🪴</span>
            <h3>Krzewy</h3>
          </div>
          <div class="karta">
            <span class="ikona">🌸</span>
            <h3>Byliny</h3>
          </div>
          <div class="karta">
            <span class="ikona">🌱</span>
            <h3>Pnącza</h3>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
  .oferta-container {
    padding: 50px 20px;
    text-align: center;
  }

  h2 {
    color: #2e7d32;
    font-size: 2rem;
    margin-bottom: 30px;
  }

  .oferta-text-grid {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;
    flex-wrap: wrap;
  }

  .oferta-text {
    flex: 1;
    font-size: 1.1rem;
    min-width: 500px;
    max-width: 850px;
    text-align: left;
  }

  .oferta-text p {
    margin-bottom: 20px;
    line-height: 1.8;
  }
  .rosliny-grid-wrapper {
    flex: 1;
    max-width: 650px;
    width: 100%;
  }

  .rosliny-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
  }

  .karta {
    background: white;
    border: 1px solid #e0e0e0;
    padding: 20px 10px;
    border-radius: 10px;
    text-decoration: none;
    color: inherit;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(0,0,0,0.05);
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .karta:hover {
    transform: translateY(-5px);
    border-color: #2e7d32;
    box-shadow: 0 6px 20px rgba(46, 125, 50, 0.1);
  }

  .ikona {
    font-size: 2.5rem;
    margin-bottom: 5px;
  }

  h3 {
    font-size: 1.1rem;
    margin: 0;
    color: #2e7d32;
  }

  @media (max-width: 1100px) {
    .oferta-text {
      min-width: 100%;
    }
    .rosliny-grid-wrapper {
      max-width: 100%;
    }
  }
</style>