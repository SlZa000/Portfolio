import React from 'react';
import '../css/FronttechStyle.css';

export default function Fronttech() {
  return (
    <>
      <div className='Fronttech'>
        <div className='PortfolioSection'>
      <div className='PortfolioSection'>
        <h1 className='PortfolioSection-title'>
          <span>Opis Projektu</span>
        </h1>
        <p className='PortfolioSection-description'>
          <span>
            React Portfolio to aplikacja internetowa typu Single Page Application (SPA) stworzona w oparciu o bibliotekę React. Głównym celem aplikacji jest umożliwienie programiście zaprezentowania swojego portfolio oraz ułatwienie kontaktu z potencjalnymi klientami lub pracodawcami. Projekt wykorzystuje różnorodne technologie i biblioteki do stworzenia dynamicznego interfejsu użytkownika (UI) oraz efektownych animacji.
          </span>
        </p>
      </div>

      <div className='PortfolioSection'>
        <h2 className='PortfolioSection-title'>
          <span>Zastosowanie Metodologii BEM</span>
        </h2>
        <p className='PortfolioSection-description'>
          <span>
            W projekcie zastosowano metodologię BEM (Block, Element, Modifier) do nazewnictwa klas CSS w celu utrzymania spójności w kodzie oraz ułatwienia zarządzania stylami. Przykładowe klasyfikacje BEM można znaleźć w plikach CSS odpowiednich komponentów.
          </span>
        </p>
      </div>

      <div className='PortfolioSection'>
        <h2 className='PortfolioSection-title'>
          <span>Wykorzystane Technologie</span>
        </h2>
        <ul className='PortfolioSection-list'>
          <li>
            <span>React: Główną biblioteką używaną w projekcie jest React. React pozwala na budowę dynamicznych interfejsów użytkownika (UI) oraz zarządzanie stanem aplikacji.</span>
          </li>
          <li>
            <span>React Router: Do nawigacji między różnymi widokami (stronami) aplikacji. Pozwala na wygodne zarządzanie trasami URL.</span>
          </li>
          <li>
            <span>Styled-Components: Biblioteka do stylizacji komponentów za pomocą składni CSS w kodzie JavaScript. Umożliwia tworzenie komponentów o zdefiniowanych stylach.</span>
          </li>
          <li>
            <span>React Spring: Biblioteka do tworzenia animacji w aplikacji. Jest wykorzystywana do płynnych efektów i przejść między widokami.</span>
          </li>
          <li>
            <span>React Icons: Zawiera ikony FontAwesome i inne zestawy ikon, które można wykorzystać w aplikacji.</span>
          </li>
          <li>
            <span>Slick Carousel: Do tworzenia karuzel (slajderów) wykorzystywanych w prezentacji projektów.</span>
          </li>
          <li>
            <span>react-scroll: Umożliwia płynne przewijanie strony do określonych sekcji po kliknięciu w nawigację.</span>
          </li>
          <li>
            <span>react-transition-group: Wykorzystywana do zarządzania animacjami przejść między komponentami.</span>
          </li>
          <li>
            <span>react-slick i react-swipeable: Wspomagają działanie karuzeli i obsługę przesunięć palcem na urządzeniach mobilnych.</span>
          </li>
          <li>
            <span>gh-pages: Wykorzystywana do publikacji aplikacji na platformie GitHub Pages.</span>
          </li>
          <li>
            <span>devicon: Zawiera ikony technologii, które można wykorzystać w prezentacji projektów.</span>
          </li>
          <li>
            <span>@fortawesome/fontawesome-svg-core: Do wykorzystania ikon Font Awesome.</span>
          </li>
        </ul>
      </div>

      <div className='PortfolioSection'>
        <h2 className='PortfolioSection-title'>
          <span>Struktura Projektu</span>
        </h2>
        <p className='PortfolioSection-description'>
          <span>
            Projekt "React Portfolio" składa się z następujących głównych komponentów i sekcji:
          </span>
        </p>
        <ul className='PortfolioSection-list'>
          <li>
            <span>App.js Główny komponent aplikacji, który zarządza trasami i renderuje odpowiednie strony w zależności od ścieżki URL. Komponent ten zawiera również pasek nawigacyjny (Navbar).</span>
          </li>
          <li>
            <span>Navbar: Pasek nawigacyjny zawierający odnośniki do różnych sekcji aplikacji, takich jak "Home," "Projects," "Contact," "About Me," itp.</span>
          </li>
          <li>
            <span>Home: Strona główna, na której znajdują się informacje o programiście oraz efekty wizualne, takie jak animacje tła. Wykorzystuje karuzele (slajdery) do wyświetlania zdjęć poglądowych projektów i umożliwia wstępne zapoznaie się z projektami oraz przejście bezpośrednio do bełnych artykułow.</span>
          </li>
          <li>
            <span>Projects: Strona prezentująca różne projekty posiada własne menu nawigacji po artykułach.</span>
          </li>
          <li>
            <span>Contact: Strona kontaktowa, na której użytkownicy mogą skontaktować się z programistą za pomocą formularza.</span>
          </li>
          <li>
            <span>About Me: Strona zawierająca informacje o programiście, jego umiejętnościach i doświadczeniu.</span>
          </li>
          <li>
            <span>Podstrony Projektów: Oddzielne strony dla konkretnych projektów, takie jak "Netapi," "Fronttech," "Documents," itp.</span>
          </li>
          <li>
            <span>Documents: Strona, na której będą umieszczone certyfikaty i dokumenty szkoleniowe programisty.</span>
          </li>
        </ul>
      </div>

      <div className='PortfolioSection'>
        <h2 className='PortfolioSection-title'>
          <span>Struktura Katalogów</span>
        </h2>
        <p className='PortfolioSection-description'>
          <span>
            Struktura katalogów w projekcie jest odpowiednio zorganizowana:
          </span>
        </p>
        <ul className='PortfolioSection-list'>
          <li>
            <span>components: Katalog zawiera komponenty używane w aplikacji, takie jak Navbar, PageWithMargin (słóży do wyrównania navbar z kontentemn strony), Slider, itp.</span>
          </li>
          <li>
            <span>CSS: Tutaj znajdują się pliki CSS dla poszczególnych sekcji aplikacji, wykorzystujące metodologię BEM.</span>
          </li>
          <li>
            <span>pages: Katalog zawiera pliki JavaScript dla różnych stron aplikacji, takie jak Home.js, Projects.js, Contact.js, itp.</span>
          </li>
          <li>
            <span>images: Przechowuje obrazy i ikony wykorzystywane w projekcie.</span>
          </li>
        </ul>
      </div>

      <div className='PortfolioSection'>
        <h2 className='PortfolioSection-title'>
          <span>Skrypty</span>
        </h2>
        <p className='PortfolioSection-description'>
          <span>
            Plik package.json zawiera różne skrypty ułatwiające zarządzanie projektem:
          </span>
        </p>
        <ul className='PortfolioSection-list'>
          <li>
            <span>start: Uruchamia aplikację w trybie deweloperskim.</span>
          </li>
          <li>
            <span>predeploy i deploy: Służą do wdrożenia aplikacji na platformie GitHub Pages.</span>
          </li>
          <li>
            <span>build: Tworzy zoptymalizowaną wersję produkcyjną aplikacji.</span>
          </li>
          <li>
            <span>test: Uruchamia testy jednostkowe.</span>
          </li>
          <li>
            <span>eject: Wypycha skonfigurowane narzędzia i konfiguracje, jeśli jest to potrzebne.</span>
          </li>
        </ul>
      </div>

      <div className='PortfolioSection'>
        <h2 className='PortfolioSection-title'>
          <span>Browser Support</span>
        </h2>
        <p className='PortfolioSection-description'>
          <span>
            W pliku browserslist określone są przeglądarki, które są obsługiwane przez aplikację w trybie produkcyjnym i deweloperskim.
          </span>
        </p>
      </div>

      <div className='PortfolioSection'>
        <h2 className='PortfolioSection-title'>
          <span>Adres Strony i Repozytorium</span>
        </h2>
        <p className='PortfolioSection-description'>
          <span>
            Strona internetowa projektu jest dostępna pod adresem: React Portfolio.
          </span>
        </p>
        <p className='PortfolioSection-description'>
          <span>
            Repozytorium projektu jest dostępne na platformie GitHub: Repozytorium GitHub.
          </span>
        </p>
      </div>

      <div className='PortfolioSection'>
        <h2 className='PortfolioSection-title'>
          <span>Responsywność</span>
        </h2>
        <p className='PortfolioSection-description'>
          <span>
            Projekt jest zaprojektowany z myślą o responsywności. Działa na różnych urządzeniach i dostosowuje się do różnych rozmiarów ekranów. Wykorzystuje techniki CSS, takie jak Media Queries, aby dostosować wygląd i układ elementów w zależności od szerokości ekranu.
          </span>
        </p>
      </div>

      <div className='PortfolioSection'>
        <h2 className='PortfolioSection-title'>
          <span>Przyszłe Rozwinięcie Projektu</span>
        </h2>
        <p className='PortfolioSection-description'>
          <span>
            W przyszłości planowane jest rozwinięcie sekcji "Documents," gdzie będą umieszczone certyfikaty i dokumenty szkoleniowe programisty. Dzięki temu użytkownicy będą mieli możliwość zapoznania się z jego osiągnięciami i kwalifikacjami.
          </span>
        </p>
        <p className='PortfolioSection-description'>
          <span>
            Projekt "React Portfolio" jest także dostępny jako otwarte źródło, co umożliwia innym programistom dostosowanie go do własnych potrzeb i celów. Aplikacja będzie również sukcesywnie rozwijana o nowe projekty i artykuły, aby zapewnić aktualność i atrakcyjność portfolio.
          </span>
        </p>
      </div>
    </div>
  </div>
    </>
  );
}
