import React, { useState } from 'react';
import '../../App.css';
import '../css/HomeStyle.css';
import { Link } from 'react-router-dom';
import AboutMe from './aboutme';
import { animated, useSpring } from 'react-spring';
import MovingComponent from 'react-moving-text'; // Importujemy komponent MovingComponent
import Slider from '../slider'; // Zaimportuj komponent Slider
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

  const animation1 = useSpring({
    height: isExpanded1 ? '50px' : '0px',
    opacity: isExpanded1 ? 1 : 0,
    overflow: 'hidden',
  });

  const animation2 = useSpring({
    height: isExpanded2 ? '50px' : '0px',
    opacity: isExpanded2 ? 1 : 0,
    overflow: 'hidden',
  });

  const animation3 = useSpring({
    height: isExpanded3 ? '50px' : '0px',
    opacity: isExpanded3 ? 1 : 0,
    overflow: 'hidden',
  });

  const animation4 = useSpring({
    height: isExpanded4 ? '50px' : '0px',
    opacity: isExpanded4 ? 1 : 0,
    overflow: 'hidden',
  });

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

  // Przykładowe obrazy dla sliderów
  const imagesProject2 = [image1, image2, image3];
  const imagesProject3 = [image4, image5, image6];

  return (
    <div>
      <div className="home">
        <div className="About-me-short">
          {/* Używamy komponentu MovingComponent do animacji tekstu */}
          <MovingComponent
              type="slideInFromBottom"
              duration="1000ms"
              delay="1s"
              direction="normal"
              timing="ease"
              iteration={1}
              fillMode="none"
            >
            <h2>
              C# 
              .NET 
              MSSQL<i class="fas fa-database"></i>
              Javascript<i class="fab fa-js"></i>
              React<i class="fab fa-react"></i>
              CSS<i class="fab fa-css3-alt"></i>
              SCSS<i class="fab fa-sass"></i>
              Entity Framework <i class="fas fa-project-diagram"></i> i wiele więcej...
            </h2>
          </MovingComponent>
        </div>
        <div className="container">
          <h2>Projekty</h2>
          <div className="article">
            <h1>Projekt .NET API & MSSql Database Notes.Api</h1>
            <Slider images={imagesProject2} />
            <p>Opis widoczny</p>
            <animated.div style={animation1} className={`description ${isExpanded1 ? 'expanded' : ''}`}>
              {isExpanded1 && <p>What is Lorem Ipsum?</p>}
            </animated.div>
            <button className="toggle-button" onClick={handleToggle1}>
              Rozwiń/Zwiń opis
            </button>
            <Link to="/Netapi">
              <button className="see-more-button">Przejdź do Netapi</button>
            </Link>
          </div>

          {/* Projekt 2 */}
          <div className="article">
          <h1>Projekt .NET API & MSSql Database Notes.Api</h1>
            <Slider images={imagesProject2} /> {/* Użyj komponentu Slider zamiast <img> */}
            <p>Opis widoczny</p>
            <animated.div style={animation2} className={`description ${isExpanded2 ? 'expanded' : ''}`}>
              {isExpanded2 && <p>Opis rozwinięty</p>}
            </animated.div>
            <button className="toggle-button" onClick={handleToggle2}>
              Rozwiń/Zwiń opis
            </button>
            <Link to="/Netapi">
              <button className="see-more-button">Przejdź do Netapi</button>
            </Link>
          </div>

          {/* Projekt 3 */}
          <div className="article">
          <h1>Projekt .NET API & MSSql Database Notes.Api</h1>
            <Slider images={imagesProject3} /> {/* Użyj komponentu Slider zamiast <img> */}
            <p>Opis widoczny</p>
            <animated.div style={animation3} className={`description ${isExpanded3 ? 'expanded' : ''}`}>
              {isExpanded3 && <p>Opis rozwinięty</p>}
            </animated.div>
            <button className="toggle-button" onClick={handleToggle3}>
              Rozwiń/Zwiń opis
            </button>
            <Link to="/Netapi">
              <button className="see-more-button">Przejdź do Netapi</button>
            </Link>
          </div>
          
          {/* Projekt 4 */}
          <div className="article">
          <h1>Projekt .NET API & MSSql Database Notes.Api</h1>
            <Slider images={imagesProject2} />
            <p>Opis widoczny</p>
            <animated.div style={animation4} className={`description ${isExpanded4 ? 'expanded' : ''}`}>
              {isExpanded4 && <p>Opis rozwinięty</p>}
            </animated.div>
            <button className="toggle-button" onClick={handleToggle4}>
              Rozwiń/Zwiń opis
            </button>
            <Link to="/Netapi">
              <button className="see-more-button">Przejdź do Netapi</button>
            </Link>
          </div>
          
        </div>
      </div>
      <AboutMe />
    </div>
  );
}
