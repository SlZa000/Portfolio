import React from 'react';
import '../../App.css';
import '../css/AboutMeStyle.css';

export default function AboutMe() {
  return (
    <section id='aboutme' className='aboutme'>
      <h1 className='aboutme__title'>O mnie</h1>
      <p className='aboutme__description'>
        <h2><strong>Sławomir Zając</strong></h2><br />
        E-mail: <a href="mailto:slawomirzajc@gmail.com">slawomirzajc@gmail.com</a> | Telefon: 575 180 010 | Miejscowość: Pcim
        <br /><br />
        <strong>Cel zawodowy:</strong> Jestem świeżo po zakończeniu praktyk na studiach i poszukuję stałej pracy jako Frontend Developer. Mam niewielkie doświadczenie komercyjne, które głównie dotyczyło prac związanych z frontendem, ale moje projekty studenckie, takie jak SM Trend, doskonale pokazują moje zdolności programistyczne.
        <br /><br />
        <strong>Umiejętności techniczne:</strong> HTML, CSS (Bootstrap), JavaScript (React, TypeScript), SQL, .NET, C#, Git, GitHub, Znajomość SEO, CMS: WordPress, PrestaShop, Obsługa pakietu Adobe (grafika komputerowa).
        <br /><br />
        <strong>Doświadczenie zawodowe:</strong><br />
        <em>Specjalista ds. Social Media</em>, Elektroplast, od stycznia 2024 – obecnie<br />
        - Prowadzenie kampanii marketingowych na Facebooku.<br />
        - Moderacja strony internetowej za pomocą PrestaShop, HTML, CSS.<br />
        - Tworzenie banerów i grafik na potrzeby kampanii marketingowych.<br /><br />
        <em>Sprzedawca</em>, Praca za granicą, 2021 – 2023<br />
        - Praca magazynowo logistyczna za granicą oraz sprzedawca w Polsce.<br /><br />
        <em>Informatyk</em>, ThebestPC Myślenice, 07.2021 – 10.2021<br />
        - Naprawa komputerów, konfiguracja sieci i wsparcie techniczne.<br /><br />
        <em>Programista</em>, Wellbud Myślenice, 10.2019 – 02.2020<br />
        - Modyfikacja stron internetowych na WordPressie.<br />
        - Tworzenie banerów, formularzy, wersji mobilnych.<br /><br />
        <strong>Wykształcenie:</strong> Inżynier Informatyki Stosowanej, Wyższa Szkoła Ekonomii i Informatyki w Krakowie, od 10.2020 – obecnie (Studia zaoczne).
        <br /><br />
        <strong>Projekty:</strong> Projekt inżynierski: SM Trend - aplikacja webowa z autorskim API .NET, lokalną bazą danych, uwierzytelnianiem tokenem JWT, front-end w React i TypeScript.
        <br /><br />
        <strong>Linki:</strong> <a href="https://github.com/Mirac00?tab=repositories" target="_blank">GitHub</a> | <a href="https://www.linkedin.com/in/s%C5%82awomir-zajac-69ba94259/" target="_blank">LinkedIn</a>
        <br /><br />
      </p>
    </section>
  );
}
