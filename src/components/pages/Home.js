import React, { useState, useRef, useEffect } from 'react';
import '../../App.css';
import '../css/HomeStyle.css';
import { Link } from 'react-router-dom';
import AboutMe from './aboutme';
import Interview from './interview';
import { animated, useSpring } from 'react-spring';
import MovingComponent from 'react-moving-text';
import Slider from '../slider';
import image1 from '../../images/N111.png';
import image2 from '../../images/N222.png';
import image3 from '../../images/N333.png';
import image4 from '../../images/img1.png';
import image5 from '../../images/111.png';
import image6 from '../../images/222.png';
import image7 from '../../images/dataimg.png';
import image8 from '../../images/netsec.png';
import image9 from '../../images/p111.png';
import image10 from '../../images/p222.png';
import image11 from '../../images/p333.png';
import profileImage from '../../images/profilowe.png'; // Dodaj tutaj ścieżkę do swojego zdjęcia profilowego
import { useTranslation } from 'react-i18next';
import GitHubButton from '../GitHubButton';

export default function Home() {
  const { t } = useTranslation();
  const [isExpanded1, setIsExpanded1] = useState(false);
  const [isExpanded2, setIsExpanded2] = useState(false);
  const [isExpanded3, setIsExpanded3] = useState(false);
  const [isExpanded4, setIsExpanded4] = useState(false);

  const contentRef1 = useRef(null);
  const contentRef2 = useRef(null);
  const contentRef3 = useRef(null);
  const contentRef4 = useRef(null);

  useEffect(() => {
    if (isExpanded1) {
      contentRef1.current.style.maxHeight = `${contentRef1.current.scrollHeight}px`;
    } else {
      contentRef1.current.style.maxHeight = '0px';
    }
    if (isExpanded2) {
      contentRef2.current.style.maxHeight = `${contentRef2.current.scrollHeight}px`;
    } else {
      contentRef2.current.style.maxHeight = '0px';
    }
    if (isExpanded3) {
      contentRef3.current.style.maxHeight = `${contentRef3.current.scrollHeight}px`;
    } else {
      contentRef3.current.style.maxHeight = '0px';
    }
    if (isExpanded4) {
      contentRef4.current.style.maxHeight = `${contentRef4.current.scrollHeight}px`;
    } else {
      contentRef4.current.style.maxHeight = '0px';
    }
  }, [isExpanded1, isExpanded2, isExpanded3, isExpanded4]);

  const handleToggle1 = () => {
    setIsExpanded1(!isExpanded1);
  };

  const handleToggle2 = () => {
    setIsExpanded2(!isExpanded2);
  };

  const handleToggle3 = () => {
    setIsExpanded3(!isExpanded3);
  };

  const handleToggle4 = () => {
    setIsExpanded4(!isExpanded4);
  };

  const scrollToAboutMe = () => {
    const aboutMeSection = document.getElementById('aboutme');
    if (aboutMeSection) {
      aboutMeSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const imagesProject1 = [image9, image10, image11];
  const imagesProject2 = [image1, image2, image3];
  const imagesProject3 = [image6, image5, image4];
  const imagesProject4 = [image7, image8];

  return (
    <div>
      <div className='home'>
        <div className='AboutMeShort'>
          <MovingComponent
            type='slideInFromBottom'
            duration='1000ms'
            delay='1s'
            direction='normal'
            timing='ease'
            iteration={1}
            fillMode='none'
          >
            <h2>
              C#
              .NET
              MSSQL
              <i className='fas fa-database'></i>
              Javascript
              <i className='fab fa-js'></i>
              React
              <i className='fab fa-react'></i>
              CSS
              <i className='fab fa-css3-alt'></i>
              SCSS
              <i className='fab fa-sass'></i>
              Entity Framework <i className='fas fa-project-diagram'></i> {t('i wiele więcej...')}
            </h2>
          </MovingComponent>

        </div>
        <div className='Interview'>
        <Interview 
            profileImage={profileImage}
            scrollToAboutMe={scrollToAboutMe}
          />
        </div>
        <div className='container'>
          <div className='article'>
            <h1>{t('Projekt Fullstack SMTrend')}</h1>
            <Slider images={imagesProject3} />
            <p>{t('"SM Trend" to kompleksowa prezentacja aplikacji,')}</p>
            <div ref={contentRef4} className={`description ${isExpanded4 ? 'expanded' : ''}`}>
              {isExpanded4 && <p>{t('zawierająca szczegółowy opis funkcji, takich jak system logowania i rejestracji z wykorzystaniem JWT, możliwość tworzenia różnorodnych wpisów, zaawansowane filtry treści oraz narzędzia wspomagające proces tworzenia i targetowania treści. Dodane zostały także zdjęcia, ilustrujące interfejs użytkownika oraz filtry treści w aplikacji. W sekcji kodu zamieszczono przykład implementacji uwierzytelniania przy użyciu tokenu JWT.')}</p>}
            </div>
            <button className='toggle-button' onClick={handleToggle4}>
              {t('Rozwiń/Zwiń opis')}
            </button>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div style={{ marginRight: '20px' }}>
                <h3 style={{ marginBottom: '0' }}>FrontEnd</h3>
                <GitHubButton link="https://github.com/Mirac00/SM-Trend-Frontend.git" />
              </div>
              <div>
                <h3 style={{ marginBottom: '0' }}>BackEnd</h3>
                <GitHubButton link="https://github.com/Mirac00/SM-Trend-Backend.git" />
              </div>
            </div>
            <Link to='/SMTrend'>
              <button className='see-more-button'>{t('Przejdź do SNTrend')}</button>
            </Link>
          </div>

          <div className='article'>
            <h1>{t('Projekt .NET API & MSSql Database Notes.Api')}</h1>
            <Slider images={imagesProject2} />
            <p>{t('Aplikacja Notes.API to projekt oparty na platformie .NET Core, który oferuje')}</p>
            <div ref={contentRef1} className={`description ${isExpanded1 ? 'expanded' : ''}`}>
              {isExpanded1 && <p>{t('API RESTful do zarządzania notatkami i wydarzeniami. Jest to przykładowa aplikacja, która może być używana jako punkt wyjścia do tworzenia bardziej zaawansowanych systemów lub narzędzi zarządzania informacjami. W tej dokumentacji omówimy wszystkie kluczowe elementy tej aplikacji, jej strukturę i możliwe przypadki użycia.')}</p>}
            </div>
            <button className='toggle-button' onClick={handleToggle1}>
              {t('Rozwiń/Zwiń opis')}
            </button>
            <GitHubButton link="https://github.com/Mirac00/ReactPortfolio2023.git" />
            <Link to='/Netapi'>
              <button className='see-more-button'>{t('Przejdź do pełnego opisu Notes.Api')}</button>
            </Link>
          </div>

          <div className='article'>
            <h1>{t('Dokumentacja Projektu "React Portfolio"')}</h1>
            <Slider images={imagesProject1} />
            <p>{t('React Portfolio to aplikacja internetowa typu Single Page Application (SPA) stworzona w oparciu o bibliotekę React.')}</p>
            <div ref={contentRef2} className={`description ${isExpanded2 ? 'expanded' : ''}`}>
              {isExpanded2 && <p>{t('Głównym celem aplikacji jest umożliwienie programiście zaprezentowania swojego portfolio oraz ułatwienie kontaktu z potencjalnymi klientami lub pracodawcami. Projekt wykorzystuje różnorodne technologie i biblioteki do stworzenia dynamicznego interfejsu użytkownika (UI) oraz efektownych animacji.')}</p>}
            </div>
            <button className='toggle-button' onClick={handleToggle2}>
              {t('Rozwiń/Zwiń opis')}
            </button>
            <GitHubButton link="https://github.com/Mirac00/Notes.API.git" />
            <Link to='/Fronttech'>
              <button className='see-more-button'>{t('Przejdź do pełnego opisu REACT Portfolio')}</button>
            </Link>
          </div>

          <div className='article'>
            <h1>{t('Certyfikaty')}</h1>
            <Slider images={imagesProject4} />
            <p>{t('Certyfikaty zdobyte podczas studiów.')}</p>
            <div ref={contentRef3} className={`description ${isExpanded3 ? 'expanded' : ''}`}>
              {isExpanded3 && <p>{t('Certyfikat 98-364: MTA Database Fundamentals i Certiport Network Security. Te certyfikaty potwierdzają moje umiejętności w zakresie baz danych i bezpieczeństwa sieciowego. Moje wykształcenie i doświadczenie są kluczowe dla mojej kariery jako programisty. Planuję kontynuować naukę i rozwijać swoje umiejętności, aby sprostać wyzwaniom przyszłości w dziedzinie technologii.')}</p>}
            </div>
            <button className='toggle-button' onClick={handleToggle3}>
              {t('Rozwiń/Zwiń opis')}
            </button>
            <GitHubButton link="https://github.com/your-username/your-repo" />
            <Link to='/Documents'>
              <button className='see-more-button'>{t('Certyfikaty')}</button>
            </Link>
          </div>
        </div>
      </div>
      <AboutMe />
    </div>
  );
}
