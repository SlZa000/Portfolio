import React, { useState, useRef, useEffect } from 'react';
import '../../App.css';
import '../css/HomeStyle.css';
import { Link } from 'react-router-dom';
import AboutMe from './aboutme';
import { animated, useSpring } from 'react-spring';
import MovingComponent from 'react-moving-text';
import Slider from '../slider';
import image1 from '../../images/img-1.jpg';
import image2 from '../../images/img-2.jpg';
import image3 from '../../images/img-3.jpg';
import image4 from '../../images/img-4.jpg';
import image5 from '../../images/img-5.jpg';
import image6 from '../../images/img-6.jpg';

export default function Home() {
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

  const imagesProject2 = [image1, image2, image3];
  const imagesProject3 = [image4, image5, image6];

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
              Entity Framework <i className='fas fa-project-diagram'></i> i wiele więcej...
            </h2>
          </MovingComponent>
        </div>
        <div className='container'>
          <div className='article'>
        <h1>Projekt .NET API & MSSql Database Notes.Api</h1>
        <Slider images={imagesProject2} />
        <p>Aplikacja Notes.API to projekt oparty na platformie .NET Core, który oferuje </p>
        <div ref={contentRef1} className={`description ${isExpanded1 ? 'expanded' : ''}`}>
          {isExpanded1 && <p>API RESTful do zarządzania notatkami i wydarzeniami. Jest to przykładowa aplikacja, która może być używana jako punkt wyjścia do tworzenia bardziej zaawansowanych systemów lub narzędzi zarządzania informacjami. W tej dokumentacji omówimy wszystkie kluczowe elementy tej aplikacji, jej strukturę i możliwe przypadki użycia.
</p>}
        </div>
        <button className='toggle-button' onClick={handleToggle1}>
          Rozwiń/Zwiń opis
        </button>
        <Link to='/Netapi'>
          <button className='see-more-button'>Przejdź do pełnego opisu Notes.Api</button>
        </Link>
      </div>

      <div className='article'>
        <h1>Dokumentacja Projektu "React Portfolio"</h1>
        <Slider images={imagesProject2} />
        <p>React Portfolio to aplikacja internetowa typu Single Page Application (SPA) stworzona w oparciu o bibliotekę React. </p>
        <div ref={contentRef2} className={`description ${isExpanded2 ? 'expanded' : ''}`}>
          {isExpanded2 && <p>Głównym celem aplikacji jest umożliwienie programiście zaprezentowania swojego portfolio oraz ułatwienie kontaktu z potencjalnymi klientami lub pracodawcami. Projekt wykorzystuje różnorodne technologie i biblioteki do stworzenia dynamicznego interfejsu użytkownika (UI) oraz efektownych animacji.
</p>}
        </div>
        <button className='toggle-button' onClick={handleToggle2}>
          Rozwiń/Zwiń opis
        </button>
        <Link to='/Fronttech'>
          <button className='see-more-button'>Przejdź do pełnego opisu REACT Portfolio</button>
        </Link>
      </div>

      <div className='article'>
        <h1>Projekt .NET API & MSSql Database Notes.Api</h1>
        <Slider images={imagesProject3} />
        <p>Opis widoczny</p>
        <div ref={contentRef3} className={`description ${isExpanded3 ? 'expanded' : ''}`}>
          {isExpanded3 && <p>Opis rozwinięty</p>}
        </div>
        <button className='toggle-button' onClick={handleToggle3}>
          Rozwiń/Zwiń opis
        </button>
        <Link to='/Netapi'>
          <button className='see-more-button'>Przejdź do Netapi</button>
        </Link>
      </div>

      <div className='article'>
        <h1>Projekt .NET API & MSSql Database Notes.Api</h1>
        <Slider images={imagesProject2} />
        <p>Opis widoczny</p>
        <div ref={contentRef4} className={`description ${isExpanded4 ? 'expanded' : ''}`}>
          {isExpanded4 && <p>Opis rozwinięty</p>}
        </div>
        <button className='toggle-button' onClick={handleToggle4}>
          Rozwiń/Zwiń opis
        </button>
        <Link to='/Netapi'>
          <button className='see-more-button'>Przejdź do Netapi</button>
        </Link>
      </div>

        </div>
      </div>
      <AboutMe />
    </div>
  );
}
