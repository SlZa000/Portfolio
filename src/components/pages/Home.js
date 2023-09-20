import React, { useState } from 'react';
import '../../App.css';
import '../css/HomeStyle.css';
import { Link } from 'react-router-dom';

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
    <div className="home">
      <div className="About-me-short">
        <h1>O Mnie</h1>
      </div>
      <div className="container">
        <h2>Moje Projekty</h2>
        <div className="article">
          <h3>Projekt1</h3>
          <img src="" alt="Upsss"></img>
          <p>Opis widoczny</p>
          {isExpanded1 && <p>Opis rozwinięty</p>}
          <button className="toggle-button" onClick={handleToggle1}>Rozwiń/Zwiń opis</button>
          <Link to="/marketing"><button className="see-more-button">Przejdź do Marketing</button></Link>
        </div>
        <div className="article">
          <h3>Projekt2</h3>
          <img src="" alt="Upsss"></img>
          <p>Opis widoczny</p>
          {isExpanded2 && <p>Opis rozwinięty</p>}
          <button className="toggle-button" onClick={handleToggle2}>Rozwiń/Zwiń opis</button>
          <Link to="/marketing"><button className="see-more-button">Przejdź do Marketing</button></Link>
        </div>
      </div>
    </div>
  );
}
