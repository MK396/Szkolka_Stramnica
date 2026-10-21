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
                <picture>
                    <source media="(max-width: 768px)" :srcset="photoMobile" type="image/webp">
                    <img :src="photoDesktop" alt="Szkółka Stramnica - O nas" loading="lazy" decoding="async" width="952" height="540">
                </picture>
            </div>
        </div>
    </section>
</template>

<script setup>
import photoDesktop from '../assets/photo1.webp';
import photoMobile from '../assets/photo1-mobile.webp';
</script>

<style scoped>
    .opis-container {
        padding: 60px 20px;
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
        align-items: center;
        justify-content: stretch;
        gap: 40px;
        flex-wrap: wrap;
        padding: 10px;
        width: 100%;
        box-sizing: border-box;
    }

    .opis-text {
        flex: 1 1 420px;
        font-size: 1.1rem;
        min-width: 0;
        text-align: left;
    }

    .opis-text p {
        margin-bottom: 20px;
        line-height: 1.8;
        color: #333;
    }

    .opis-img {
        flex: 1.15 1 480px;
        min-width: 0;
        width: 100%;
        max-width: 640px;
    }

    .opis-img img,
    .opis-img picture {
        width: 100%;
        display: block;
    }

    .opis-img img {
        height: auto;
        border-radius: 12px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.1);
    }

    /* wcześniej układ pionowy — zdjęcie pełnej szerokości zamiast wąskiej kolumny */
    @media (max-width: 1100px) {
        .opis-text-img {
            flex-direction: column;
            gap: 28px;
        }

        .opis-text,
        .opis-img {
            flex: 1 1 100%;
            max-width: 100%;
        }

        .opis-img {
            max-width: 720px;
            margin: 0 auto;
        }
    }

    @media (max-width: 768px) {
        .opis-container {
            padding: 40px 20px;
        }

        .opis-text {
            font-size: 1.05rem;
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