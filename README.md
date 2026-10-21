# Strona internetowa szkółki roślin — Szkółka Stramnica

Responsywna aplikacja SPA (**Vue 3** + **Vite**) dla gospodarstwa szkółkarskiego w Stramnicy koło Kołobrzegu — wizytówka z ofertą, galerią, mapą i kontaktem.

**Aplikacja online:** [https://szkolka-stramnica.mkuzownik.tech/](https://szkolka-stramnica.mkuzownik.tech/)

---

## Spis treści

- [Opis projektu](#opis-projektu)
- [Funkcjonalności](#funkcjonalności)
- [Optymalizacja](#optymalizacja)
- [Technologie](#technologie)
- [Hosting](#hosting)
- [Struktura projektu](#struktura-projektu)
- [Architektura](#architektura)

---

## Opis projektu

Czysty frontend bez własnego backendu. Strona pokazuje historię i ofertę szkółki, galerię zdjęć oraz ułatwia kontakt — telefon, formularz (**EmailJS**) i lokalizacja (**Google Maps Embed**).

---

## Funkcjonalności

- **Strona główna** — Hero (karuzela Swiper), O nas, Oferta, Galeria, mapa Google
- **Galeria ze lightboxem** — siatka zdjęć; podgląd pełnoekranowy ze strzałkami i Escape
- **Status otwarcia na żywo** — wskaźnik „otwarte / zamknięte” na podstawie godzin pracy i świąt
- **Formularz kontaktowy** — wysyłka wiadomości przez EmailJS (bez własnego API)
- **Nawigacja SPA** — Vue Router, sticky navbar, menu hamburger na mobile
- **Responsywny design** — pełne dopasowanie do telefonów, tabletów i desktopów
- **Integracje zewnętrzne** — Google Maps, Facebook

| Ścieżka | Opis |
|---------|------|
| `/` | Strona główna |
| `/kontakt` | Formularz i dane kontaktowe |
| `/*` | Strona 404 |

---

## Optymalizacja

Strona jest zoptymalizowana pod szybkie ładowanie i mniejszy transfer:

- **WebP** — zdjęcia galerii i hero w formacie WebP
- **Miniatury** — w siatce galerii i hero używane są thumbs (`assets/photos_gallery/thumbs/`); pełne zdjęcia ładują się dopiero w lightboxie
- **Lazy-loading** — atrybut `loading="lazy"` na obrazach poza pierwszym widokiem
- **Dynamiczny lightbox** — kod podglądu galerii jest dołączany przy otwarciu, a nie przy starcie strony

---

## Technologie

| Warstwa | Stack |
|---------|--------|
| Frontend | Vue 3, Vue Router 4, Vite 8 |
| UI / media | Swiper, WebP, inline SVG |
| Integracje | EmailJS, Google Maps Embed |
| Produkcja | Docker (multi-stage), Nginx, Docker Compose |

---

## Hosting

Własny serwer **Proxmox**, kontener **Docker** (Nginx + statyczny build SPA), orkiestracja **Docker Compose**.

```
Internet → Proxmox → Docker (Nginx :80) → dist/
```

---

## Struktura projektu

<details>
<summary>Rozwiń pełną strukturę katalogów</summary>

```
Szkolka_Stramnica/
├── docker-compose.yml
├── README.md
└── szkolka-stramnica/
    ├── Dockerfile              # Node build → Nginx
    ├── nginx.conf
    ├── package.json
    ├── vite.config.js
    ├── index.html
    ├── public/
    └── src/
        ├── main.js
        ├── App.vue             # Navbar + router-view
        ├── router/index.js
        ├── views/
        │   ├── HomeView.vue
        │   ├── Kontakt.vue
        │   ├── Katalog.vue     # wyłączony w routerze
        │   └── NotFound.vue
        ├── components/
        │   ├── Navbar.vue
        │   ├── Hero.vue
        │   ├── Opis.vue
        │   ├── Oferta.vue
        │   ├── Galeria.vue
        │   └── GoogleMap.vue
        └── assets/
            ├── icons/              # SVG oferty (np. trawy, krzewy)
            ├── photos_gallery/     # pełne WebP + thumbs/
            └── photos_catalog/
```

</details>

---

## Architektura

```
Przeglądarka
    │
    ▼
Vue 3 SPA (Vue Router)
    ├── /         → HomeView (Hero, Opis, Oferta, Galeria, GoogleMap)
    ├── /kontakt  → Kontakt.vue → EmailJS
    └── /*        → NotFound.vue
```

| Warstwa | Rola |
|---------|------|
| `App.vue` | Layout — navbar + `<router-view>` |
| `views/` | Strony routera |
| `components/` | Sekcje UI strony głównej |

**Build Docker:** `node:20-alpine` (Vite) → `nginx:alpine` (`dist/` + `try_files` pod SPA). Klucze EmailJS jako build args `VITE_*`.
