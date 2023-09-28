import React from 'react';
import '../css/ProjectsStyle.css';
import { Link } from 'react-router-dom';

export default function Projects() {
  return (
    <div className='Projects'>
      <h1 className='Projects-title'>Projekty</h1>

      <div className='ArticleSection' id='article1'>
        <h2 className='ArticleSection-title'><span>Dokumentacja Aplikacji Notes.API</span></h2>
        <p className='ArticleSection-description'><span>Wstęp<br/>
Aplikacja Notes.API to projekt oparty na platformie .NET Core, który oferuje API RESTful do zarządzania notatkami i wydarzeniami. Jest to przykładowa aplikacja, która może być używana jako punkt wyjścia do tworzenia bardziej zaawansowanych systemów lub narzędzi zarządzania informacjami. W tej dokumentacji omówimy wszystkie kluczowe elementy tej aplikacji, jej strukturę i możliwe przypadki użycia.
<br/>Przykłady Użycia Komercyjnego
Pomimo że jest to przykładowa aplikacja, może zostać wykorzystana jako punkt wyjścia do bardziej zaawansowanych projektów. Oto kilka przykładów komercyjnego wykorzystania:

System Zarządzania Zadaniami: Rozbudowa aplikacji Notes.API o dodatkowe funkcje zarządzania zadaniami i projektami, co pozwoli na stworzenie kompleksowego systemu zarządzania zadaniami dla firm.

System Kalendarza Firmowego: Rozbudowa aplikacji o funkcje zarządzania kalendarzem firmowym, harmonogramem spotkań i rezerwacjami zasobów.

System Magazynowy: Rozbudowa aplikacji o funkcje zarządzania magazynem, śledzenia zapasów, obsługi zamówień i dostaw, co pozwoli na utworzenie systemu magazynowego dla firm handlowych.

Aplikacja CRM: Rozbudowa aplikacji o funkcje zarządzania relacjami z klientami, śledzenia kontaktów i zarządzania sprzedażą, co pozwoli na utworzenie narzędzia do zarządzania relacjami z klientami.

Podsumowanie
Aplikacja Notes.API to przykładowy projekt API RESTful do zarządzania notatkami i wydarzeniami. Może być używana jako punkt wyjścia do tworzenia różnych systemów zarządzania informacjami lub innych aplikacji, które wymagają zarządzania danymi. Może być dostosowana i rozbudowana w zależności od potrzeb komercyjnych.</span></p>
<Link to='/Netapi'>
          <button className='see-more-button'>Przejdź do pełnego opisu Notes.Api</button>
        </Link>
        <img src='zdjecie1.jpg' alt='Zdjęcie 1' className='ArticleSection-image' />
      </div>

      <div className='ArticleSection' id='article2'>
        <h2 className='ArticleSection-title'><span>Dokumentacja Projektu "React Portfolio"
</span></h2>
        <p className='ArticleSection-description'><span>Opis Projektu<br/>
React Portfolio to aplikacja internetowa typu Single Page Application (SPA) stworzona w oparciu o bibliotekę React. Głównym celem aplikacji jest umożliwienie programiście zaprezentowania swojego portfolio oraz ułatwienie kontaktu z potencjalnymi klientami lub pracodawcami. Projekt wykorzystuje różnorodne technologie i biblioteki do stworzenia dynamicznego interfejsu użytkownika (UI) oraz efektownych animacji.
<br/>Zastosowanie Metodologii BEM<br/>W projekcie zastosowano metodologię BEM (Block, Element, Modifier) do nazewnictwa klas CSS w celu utrzymania spójności w kodzie oraz ułatwienia zarządzania stylami. Przykładowe klasyfikacje BEM można znaleźć w plikach CSS odpowiednich komponentów.
<br/>Adres Strony i Repozytorium<br/>Strona internetowa projektu jest dostępna pod adresem: React Portfolio.<br/>Repozytorium projektu jest dostępne na platformie GitHub: Repozytorium GitHub<br/>Responsywność<br/>Projekt jest zaprojektowany z myślą o responsywności. Działa na różnych urządzeniach i dostosowuje się do różnych rozmiarów ekranów. Wykorzystuje techniki CSS, takie jak Media Queries, aby dostosować wygląd i układ elementów w zależności od szerokości ekranu.<br/>Przyszłe Rozwinięcie Projektu<br/>W przyszłości planowane jest rozwinięcie sekcji "Documents," gdzie będą umieszczone certyfikaty i dokumenty szkoleniowe programisty. Dzięki temu użytkownicy będą mieli możliwość zapoznania się z jego osiągnięciami i kwalifikacjami.<br/>Projekt "React Portfolio" jest także dostępny jako otwarte źródło, co umożliwia innym programistom dostosowanie go do własnych potrzeb i celów. Aplikacja będzie również sukcesywnie rozwijana o nowe projekty i artykuły, aby zapewnić aktualność i atrakcyjność portfolio.</span></p>
        
        <Link to='/Fronttech'>
          <button className='see-more-button'>Przejdź do pełnego opisu REACT Portfolio</button>
        </Link>
        <img src='zdjecie2.jpg' alt='Zdjęcie 2' className='ArticleSection-image' />
      </div>

      <div className='ArticleSection' id='article3'>
        <h2 className='ArticleSection-title'><span>Article 3</span></h2>
        <p className='ArticleSection-description'><span>Opis artykułu 3.</span></p>
        <img src='zdjecie3.jpg' alt='Zdjęcie 3' className='ArticleSection-image' />
      </div>

      <div className='ArticleSection' id='article4'>
        <h2 className='ArticleSection-title'><span>Article 4</span></h2>
        <p className='ArticleSection-description'><span>Opis artykułu 4.</span></p>
        <img src='zdjecie4.jpg' alt='Zdjęcie 4' className='ArticleSection-image' />
      </div>

      <div className='NavigationButtons'>
        <button onClick={() => scrollToSection('article1')}>.NET Notes.Api</button>
        <button onClick={() => scrollToSection('article2')}>REACT Portfolio</button>
        <button onClick={() => scrollToSection('article3')}>Artykuł 3</button>
        <button onClick={() => scrollToSection('article4')}>Artykuł 4</button>
      </div>
    </div>
  );
}

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    window.scrollTo({
      top: section.offsetTop,
      behavior: 'smooth',
    });
  }
}
