<template>
    <section class="opis-container" id="opis">
        <h2>Piękne ogrody zaczynają się tutaj - Stramnica</h2>
        <div class="opis-text-img">
            <div class="opis-text">
                <p><strong>Gospodarstwo szkółkarskie Szkółka Stramnica</strong> to rodzinny biznes z pasją, który powstał w 1994 roku. Znajdujemy się w miejscowości <strong>Stramnica, niedaleko Kołobrzegu</strong>. Specjalizujemy się w uprawie roślin ozdobnych, które dodadzą uroku każdemu ogrodowi. Nasza oferta obejmuje różnorodne krzewy, drzewa i byliny starannie wyselekcjonowane i pielęgnowane. Dzięki wieloletniemu doświadczeniu gwarantujemy najwyższą jakość naszych roślin.</p>
                <p>Wierzymy, że natura jest najpiękniejszym artystą, a my jesteśmy tylko jej skromnymi pomocnikami. Dokładamy wszelkich starań, aby nasze rośliny ozdobne były nie tylko piękne, ale przede wszystkim okazałe, zdrowe i silne. Nasza pasja do uprawy roślin jest zaraźliwa – chcemy, aby każdy, kto odwiedza naszą szkółkę, poczuł tę samą radość i satysfakcję z obcowania z naturą. Zapraszamy do odwiedzenia naszej szkółki w Stramnicy, bo piękno kryje się w naturze!</p>
                <p>Jesteśmy absolwentami Uniwersytetu Technologicznego w Szczecinie. Dzięki studiom, które odbyliśmy na kierunku ogrodnictwo oraz wieloletniemu doświadczeniu w branży i współpracy z najlepszymi specjalistami w dziedzinie ogrodnictwa zapewniamy klientom fachowe doradztwo. Cały czas pogłębiamy naszą wiedzę na różnych kursach i szkoleniach, aby sprostać oczekiwaniom naszych klientów.</p>
                <p>Szkółkę tworzą wykwalifikowane osoby, które z pasją i zaangażowaniem dzielą się swoją wiedzą i doświadczeniem. Praca ta jest dla nich nie tylko zawodem, ale i największą pasją. </p>
            </div>
            <div class="opis-img">
                <img src="../assets/photo1.jpg" alt="Szkółka Stramnica - O nas">
            </div>
        </div>
    </section>
</template>

<style scoped>
    .opis-container {
        padding: 60px 20px;
        max-width: 1400px;
        margin: 0 auto;
        text-align: center;
    }

    h2 {
        color: #2e7d32;
        font-size: clamp(1.5rem, 4vw, 2.2rem);
        margin-bottom: 40px;
        font-weight: 700;
    }

    .opis-text-img {
        display: flex;
        align-items: flex-start;
        justify-content: center;
        gap: 40px;
        flex-wrap: wrap;
    }

    .opis-text {
        flex: 1 1 500px;
        font-size: 1.1rem;
        max-width: 850px;
        text-align: left;
    }

    .opis-text p {
        margin-bottom: 20px;
        line-height: 1.8;
        color: #333;
    }

    .opis-img {
        flex: 1 1 400px;
        max-width: 650px;
        width: 100%;
    }

    .opis-img img {
        width: 100%;
        height: auto;
        border-radius: 12px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        display: block;
    }


    @media (max-width: 768px) {
        .opis-container {
            padding: 40px 15px;
        }

        .opis-text {
            min-width: 100%;
            font-size: 1.05rem;
        }

        .opis-img {
            max-width: 100%;
        }
    }

    @media (max-width: 480px) {
        h2 {
            margin-bottom: 25px;
        }
        
        .opis-text p {
            font-size: 1rem;
            line-height: 1.6;
        }
    }
</style>