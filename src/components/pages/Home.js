import React, { useState } from 'react';
import '../../App.css';
import '../css/HomeStyle.css';
import { Link } from 'react-router-dom';
import AboutMe from './aboutme';

export default function Home() {
  const [isExpanded1, setIsExpanded1] = useState(false);
  const [isExpanded2, setIsExpanded2] = useState(false);

  const handleToggle1 = () => {
    setIsExpanded1(!isExpanded1);
  };

  const handleToggle2 = () => {
    setIsExpanded2(!isExpanded2);
  };

  return (
    <div>
    <div className="home">
      <div className="About-me-short">
        <h1>Tu coś co przyciągnie wzrok</h1>
      </div>
      <div className="container">
        <h2>Moje Projekty</h2>
        <div className="article">
          <h3>Projekt1</h3>
          <img src="" alt="Upsss"></img>
          <p>Opis widoczny</p>
          {isExpanded1 && <p>What is Lorem Ipsum?</p>}
          <button className="toggle-button" onClick={handleToggle1}>Rozwiń/Zwiń opis</button>
          <Link to="/netapi"><button className="see-more-button">Przejdź do netapi</button></Link>
        </div>
        <div className="article">
          <h3>Projekt2</h3>
          <img src="" alt="Upsss"></img>
          <p>Opis widoczny</p>
          {isExpanded2 && <p>Opis rozwinięty</p>}
          <button className="toggle-button" onClick={handleToggle2}>Rozwiń/Zwiń opis</button>
          <Link to="/netapi"><button className="see-more-button">Przejdź do netapi</button></Link>
        </div>
        <div className="article">
          <h3>Projekt2</h3>
          <img src="" alt="Upsss"></img>
          <p>Opis widoczny</p>
          {isExpanded2 && <p>Opis rozwinięty</p>}
          <button className="toggle-button" onClick={handleToggle2}>Rozwiń/Zwiń opis</button>
          <Link to="/netapi"><button className="see-more-button">Przejdź do netapi</button></Link>
        </div>
        <div className="article">
          <h3>Projekt2</h3>
          <img src="" alt="Upsss"></img>
          <p>Opis widoczny</p>
          {isExpanded2 && <p>Opis rozwinięty</p>}
          <button className="toggle-button" onClick={handleToggle2}>Rozwiń/Zwiń opis</button>
          <Link to="/netapi"><button className="see-more-button">Przejdź do netapi</button></Link>
        </div>
        <div className="article">
          <h3>Projekt2</h3>
          <img src="" alt="Upsss"></img>
          <p>Opis widoczny</p>
          {isExpanded2 && <p>Opis rozwinięty</p>}
          <button className="toggle-button" onClick={handleToggle2}>Rozwiń/Zwiń opis</button>
          <Link to="/netapi"><button className="see-more-button">Przejdź do netapi</button></Link>
        </div>
        <div className="article">
          <h3>Projekt2</h3>
          <img src="" alt="Upsss"></img>
          <p>Opis widoczny</p>
          {isExpanded2 && <p>Opis rozwinięty</p>}
          <button className="toggle-button" onClick={handleToggle2}>Rozwiń/Zwiń opis</button>
          <Link to="/netapi"><button className="see-more-button">Przejdź do netapi</button></Link>
        </div>
      </div>
      </div>
      <AboutMe />
    </div>
  );
}
