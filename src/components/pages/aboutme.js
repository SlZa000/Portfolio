import React from 'react';
import '../../App.css';
import '../css/AboutMeStyle.css';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin } from 'react-icons/fa';

export default function AboutMe() {
  return (
    <section id='aboutme' className='aboutme'>
      <h1 className='aboutme__title'>O mnie</h1>
      <div className='aboutme__card'>
        <h2 className='aboutme__name'>Sławomir Zając</h2>
        <div className='aboutme__contact'>
          <p><FaEnvelope className='icon' /> <a href="mailto:slawomirzajc@gmail.com">slawomirzajc@gmail.com</a></p>
          <p><FaPhone className='icon' /> 575 180 010</p>
          <p><FaMapMarkerAlt className='icon' /> Pcim</p>
        </div>
        <p className='aboutme__objective'>
          <strong>Cel zawodowy:</strong> Jestem świeżo po zakończeniu praktyk na studiach i poszukuję stałej pracy jako Frontend Developer. Mam niewielkie doświadczenie komercyjne, które głównie dotyczyło prac związanych z frontendem, ale moje projekty studenckie, takie jak SM Trend, doskonale pokazują moje zdolności programistyczne.
        </p>
        <p className='aboutme__skills'>
          <strong>Umiejętności techniczne:</strong> HTML, CSS (Bootstrap), JavaScript (React, TypeScript), SQL, .NET, C#, Git, GitHub, Znajomość SEO, CMS: WordPress, PrestaShop, Obsługa pakietu Adobe (grafika komputerowa).
        </p>
        <div className='aboutme__experience'>
          <strong>Doświadczenie zawodowe:</strong>
          <div>
            <em>Specjalista ds. Social Media</em>, Elektroplast, od stycznia 2024 – obecnie
            <ul>
              <li>Prowadzenie kampanii marketingowych na Facebooku.</li>
              <li>Moderacja strony internetowej za pomocą PrestaShop, HTML, CSS.</li>
              <li>Tworzenie banerów i grafik na potrzeby kampanii marketingowych.</li>
            </ul>
          </div>
          <div>
            <em>Sprzedawca</em>, Praca za granicą, 2021 – 2023
            <ul>
              <li>Praca magazynowo logistyczna za granicą oraz sprzedawca w Polsce.</li>
            </ul>
          </div>
          <div>
            <em>Informatyk</em>, ThebestPC Myślenice, 07.2021 – 10.2021
            <ul>
              <li>Naprawa komputerów, konfiguracja sieci i wsparcie techniczne.</li>
            </ul>
          </div>
          <div>
            <em>Programista</em>, Wellbud Myślenice, 10.2019 – 02.2020
            <ul>
              <li>Modyfikacja stron internetowych na WordPressie.</li>
              <li>Tworzenie banerów, formularzy, wersji mobilnych.</li>
            </ul>
          </div>
        </div>
        <p className='aboutme__education'>
          <strong>Wykształcenie:</strong> Inżynier Informatyki Stosowanej, Wyższa Szkoła Ekonomii i Informatyki w Krakowie, od 10.2020 – obecnie (Studia zaoczne).
        </p>
        <p className='aboutme__projects'>
          <strong>Projekty:</strong> Projekt inżynierski: SM Trend - aplikacja webowa z autorskim API .NET, lokalną bazą danych, uwierzytelnianiem tokenem JWT, front-end w React i TypeScript.
        </p>
        <div className='aboutme__links'>
          <strong>Linki:</strong>
          <p><FaGithub className='icon' /> <a href="https://github.com/Mirac00?tab=repositories" target="_blank" rel="noopener noreferrer">GitHub</a></p>
          <p><FaLinkedin className='icon' /> <a href="https://www.linkedin.com/in/s%C5%82awomir-zajac-69ba94259/" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
        </div>
      </div>
    </section>
  );
}
