import React from 'react';
import '../../App.css';
import '../css/AboutMeStyle.css';

export default function AboutMe() {
  return (
    <section id='aboutme' className='aboutme'>
      <h1 className='aboutme__title'>O mnie</h1>
      <p className='aboutme__description'>
        <span>PL</span>
        Mam dwadzieścia trzy lata, jestem studentem na Wyższej Szkole Ekonomii i Informatki w Krakowie. Rozwijam się w technologiach front-end Javascript React scss oraz back-end C# .NET i SQL. Brałem udział w rozwijaniu stron e-commerce. Tutaj można znaleść wiele moich projektów takich jak .Net Api z Bazą danych SQL czy cały czas rozwijające się portfolio React.
        <span>ANG</span>
        I am twenty-three years old, I am a student at the University of Economics and Information Technology in Krakow. I develop in front-end technologies Javascript React scss and back-end C# .NET and SQL. I participated in the development of e-commerce websites. Here you can find many of my projects such as .Net Api with SQL Database or the constantly developing React portfolio.
      </p>
    </section>
  );
}
