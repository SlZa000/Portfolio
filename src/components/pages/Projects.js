import React from 'react';
import '../css/ProjectsStyle.css';
import { Link } from 'react-router-dom';
import N111Image from '../../images/N111.png';
import p222Image from '../../images/p222.png';
import s111Image from '../../images/s111.png';
import GitHubButton from '../GitHubButton';


export default function Projects() {
  return (
    <div className='Projects'>
      <h1 className='Projects-title'>Projekty</h1>

      <div className='ArticleSection' id='article3'>
        <h2 className='ArticleSection-title'><span>SM Trend</span></h2>
        <div className='ArticleSection-content'>
          
          <p className='ArticleSection-description'>
            <span>"SM Trend" to kompleksowa prezentacja aplikacji, zawierająca szczegółowy opis funkcji, takich jak system logowania i rejestracji z wykorzystaniem JWT, możliwość tworzenia różnorodnych wpisów, zaawansowane filtry treści oraz narzędzia wspomagające proces tworzenia i targetowania treści. Dodane zostały także zdjęcia, ilustrujące interfejs użytkownika oraz filtry treści w aplikacji. W sekcji kodu zamieszczono przykład implementacji uwierzytelniania przy użyciu tokenu JWT.</span>
          </p>
          <img src={s111Image} alt='Zdjęcie 3' className='ArticleSection-image' />
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
      <div style={{ marginRight: '20px' }}>
        <h3 style={{ marginBottom: '0', color: 'white' }}>FrontEnd</h3>
        <GitHubButton link="https://github.com/Mirac00/SM-Trend-Frontend.git" />
      </div>
      <div>
        <h3 style={{ marginBottom: '0', color: 'white' }}>BackEnd</h3>
        <GitHubButton link="https://github.com/Mirac00/SM-Trend-Backend.git" />
      </div>
    </div>
        <Link to='/SMTrend'>
          <button className='see-more-button'>Przejdź do pełnego opisu SM Trend</button>
        </Link>
      </div>

      <div className='ArticleSection' id='article2'>
        <h2 className='ArticleSection-title'><span>Dokumentacja Projektu "React Portfolio"</span></h2>
        <div className='ArticleSection-content'>
          
          <p className='ArticleSection-description-width'>
            <span>
              Opis Projektu<br/>
              React Portfolio to aplikacja internetowa typu Single Page Application (SPA) stworzona w oparciu o bibliotekę React. Głównym celem aplikacji jest umożliwienie programiście zaprezentowania swojego portfolio oraz ułatwienie kontaktu z potencjalnymi klientami lub pracodawcami. Projekt wykorzystuje różnorodne technologie i biblioteki do stworzenia dynamicznego interfejsu użytkownika (UI) oraz efektownych animacji.
              <br/>Zastosowanie Metodologii BEM<br/>W projekcie zastosowano metodologię BEM (Block, Element, Modifier) do nazewnictwa klas CSS w celu utrzymania spójności w kodzie oraz ułatwienia zarządzania stylami. Przykładowe klasyfikacje BEM można znaleźć w plikach CSS odpowiednich komponentów.
              <br/>Adres Strony i Repozytorium<br/>Strona internetowa projektu jest dostępna pod adresem: React Portfolio.<br/>Repozytorium projektu jest dostępne na platformie GitHub: Repozytorium GitHub<br/>Responsywność<br/>Projekt jest zaprojektowany z myślą o responsywności. Działa na różnych urządzeniach i dostosowuje się do różnych rozmiarów ekranów. Wykorzystuje techniki CSS, takie jak Media Queries, aby dostosować wygląd i układ elementów w zależności od szerokości ekranu.<br/>Przyszłe Rozwinięcie Projektu<br/>W przyszłości planowane jest rozwinięcie sekcji "Documents," gdzie będą umieszczone certyfikaty i dokumenty szkoleniowe programisty. Dzięki temu użytkownicy będą mieli możliwość zapoznania się z jego osiągnięciami i kwalifikacjami.
            </span>
          </p>
          
        </div>
        <img src={p222Image} alt='Zdjęcie 2' className='ArticleSection-image-width' />
        <GitHubButton link="hhttps://github.com/Mirac00/ReactPortfolio2023.git" />
        <Link to='/Fronttech'>
          <button className='see-more-button'>Przejdź do pełnego opisu REACT Portfolio</button>
        </Link>
      </div>

      <div className='ArticleSection' id='article1'>
        <h2 className='ArticleSection-title'><span>Dokumentacja Aplikacji Notes.API</span></h2>
        <div className='ArticleSection-content'>
          <p className='ArticleSection-description'>
            <span>
              Wstęp<br/>
              Aplikacja Notes.API to projekt oparty na platformie .NET Core, który oferuje API RESTful do zarządzania notatkami i wydarzeniami. Jest to przykładowa aplikacja, która może być używana jako punkt wyjścia do tworzenia bardziej zaawansowanych systemów lub narzędzi zarządzania informacjami. W tej dokumentacji omówimy wszystkie kluczowe elementy tej aplikacji, jej strukturę i możliwe przypadki użycia.
              <br/>Przykłady Użycia Komercyjnego:
              <ul>
                <li>System Zarządzania Zadaniami</li>
                <li>System Kalendarza Firmowego</li>
                <li>System Magazynowy</li>
                <li>Aplikacja CRM</li>
              </ul>
              Podsumowanie: Aplikacja Notes.API to przykładowy projekt API RESTful do zarządzania notatkami i wydarzeniami. Może być używana jako punkt wyjścia do tworzenia różnych systemów zarządzania informacjami lub innych aplikacji, które wymagają zarządzania danymi. Może być dostosowana i rozbudowana w zależności od potrzeb komercyjnych.
            </span>
          </p>
          <img src={N111Image} alt='Zdjęcie 1' className='ArticleSection-image' />
        </div>
        <GitHubButton link="hhttps://github.com/Mirac00/Notes.API.git" />
        <Link to='/Netapi'>
          <button className='see-more-button'>Przejdź do pełnego opisu Notes.Api</button>
        </Link>
      </div>

      <div className='NavigationButtons'>
        <button onClick={() => scrollToSection('article3')}>SM Trend</button>
        <button onClick={() => scrollToSection('article2')}>REACT Portfolio</button>
        <button onClick={() => scrollToSection('article1')}>.NET Notes.Api</button>
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
