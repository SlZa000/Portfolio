import React, { useState } from 'react';
import '../../App.css';
import '../css/HomeStyle.css';
import { Link } from 'react-router-dom';
import AboutMe from './aboutme';
import { animated, useSpring } from 'react-spring';

export default function Home() {
  const [isExpanded1, setIsExpanded1] = useState(false);
  const [isExpanded2, setIsExpanded2] = useState(false);
  const [isExpanded3, setIsExpanded3] = useState(false);
  const [isExpanded4, setIsExpanded4] = useState(false);
  const [isExpanded5, setIsExpanded5] = useState(false);
  const [isExpanded6, setIsExpanded6] = useState(false);

  const animation1 = useSpring({
    height: isExpanded1 ? '100px' : '0px',
    opacity: isExpanded1 ? 1 : 0,
    overflow: 'hidden',
  });

  const animation2 = useSpring({
    height: isExpanded2 ? '100px' : '0px',
    opacity: isExpanded2 ? 1 : 0,
    overflow: 'hidden',
  });

  const animation3 = useSpring({
    height: isExpanded3 ? '100px' : '0px',
    opacity: isExpanded3 ? 1 : 0,
    overflow: 'hidden',
  });

  const animation4 = useSpring({
    height: isExpanded4 ? '100px' : '0px',
    opacity: isExpanded4 ? 1 : 0,
    overflow: 'hidden',
  });

  const animation5 = useSpring({
    height: isExpanded5 ? '100px' : '0px',
    opacity: isExpanded5 ? 1 : 0,
    overflow: 'hidden',
  });

  const animation6 = useSpring({
    height: isExpanded6 ? '100px' : '0px',
    opacity: isExpanded6 ? 1 : 0,
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

  const handleToggle5 = () => {
    setIsExpanded5(!isExpanded5);
  };

  const handleToggle6 = () => {
    setIsExpanded6(!isExpanded6);
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
<img src="" alt="Upsss" />
<p>Opis widoczny</p>
<animated.div style={animation1} className={`description ${isExpanded1 ? 'expanded' : ''}`}>
{isExpanded1 && <p>What is Lorem Ipsum?</p>}
</animated.div>
<button className="toggle-button" onClick={handleToggle1}>
Rozwiń/Zwiń opis
</button>
<Link to="/netapi">
<button className="see-more-button">Przejdź do netapi</button>
</Link>
</div>

<div className="article">
<h3>Projekt2</h3>
<img src="" alt="Upsss" />
<p>Opis widoczny</p>
<animated.div style={animation2} className={`description ${isExpanded2 ? 'expanded' : ''}`}>
{isExpanded2 && <p>Opis rozwinięty</p>}
</animated.div>
<button className="toggle-button" onClick={handleToggle2}>
Rozwiń/Zwiń opis
</button>
<Link to="/netapi">
<button className="see-more-button">Przejdź do netapi</button>
</Link>
</div>

<div className="article">
<h3>Projekt3</h3>
<img src="" alt="Upsss" />
<p>Opis widoczny</p>
<animated.div style={animation3} className={`description ${isExpanded3 ? 'expanded' : ''}`}>
{isExpanded3 && <p>Opis rozwinięty</p>}
</animated.div>
<button className="toggle-button" onClick={handleToggle3}>
Rozwiń/Zwiń opis
</button>
<Link to="/netapi">
<button className="see-more-button">Przejdź do netapi</button>
</Link>
</div>

<div className="article">
<h3>Projekt4</h3>
<img src="" alt="Upsss" />
<p>Opis widoczny</p>
<animated.div style={animation4} className={`description ${isExpanded4 ? 'expanded' : ''}`}>
{isExpanded4 && <p>Opis rozwinięty</p>}
</animated.div>
<button className="toggle-button" onClick={handleToggle4}>
Rozwiń/Zwiń opis
</button>
<Link to="/netapi">
<button className="see-more-button">Przejdź do netapi</button>
</Link>
</div>

</div>
</div>
<AboutMe />
</div>
);
}
