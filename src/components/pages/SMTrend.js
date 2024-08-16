import React from 'react';
import '../css/SMTrendStyle.css';

export default function SMTrend() {
  return (
    <>
      <div className='SMTrend'>
        <div className='SMTrendSection'>
          <h1 className='SMTrendSection-title'>
            <span>Opis Aplikacji</span>
          </h1>
          <p className='SMTrendSection-description'>
            <span>
              SM Trend to aplikacja, która wspiera użytkowników w tworzeniu treści internetowych, oferując zaawansowane filtry, które pozwalają na szybkie i łatwe znalezienie najpopularniejszych treści w różnych kategoriach. Dzięki tej aplikacji, proces tworzenia treści staje się bardziej efektywny i przynosi lepsze rezultaty.
            </span>
          </p>
        </div>

        <div className='SMTrendSection'>
          <h2 className='SMTrendSection-title'>
            <span>System Logowania i Rejestracji</span>
          </h2>
          <p className='SMTrendSection-description'>
            <span>
              Użytkownicy mogą z łatwością zarejestrować się lub zalogować do aplikacji, co umożliwia dostęp do pełnego zakresu funkcji. Proces uwierzytelniania jest zabezpieczony przy użyciu tokenów JWT, co gwarantuje bezpieczeństwo danych.
            </span>
          </p>
          <div className='SMTrendSection-code'>
            <pre>
              <code>
{`// Przykładowy kod implementacji uwierzytelniania JWT
const authenticateUser = async (username, password) => {
  try {
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });
    const data = await response.json();
    if (data.token) {
      localStorage.setItem('token', data.token);
      // Użytkownik zalogowany
    } else {
      // Obsługa błędów logowania
    }
  } catch (error) {
    console.error('Błąd podczas logowania:', error);
  }
};`}
              </code>
            </pre>
          </div>
        </div>

        <div className='SMTrendSection'>
          <h2 className='SMTrendSection-title'>
            <span>Postowanie Wpisów</span>
          </h2>
          <p className='SMTrendSection-description'>
            <span>
              SM Trend umożliwia tworzenie różnorodnych wpisów, takich jak dźwięki, obrazy, filmy, słowa kluczowe itp. Użytkownicy mogą dzielić się swoimi pomysłami i treściami z innymi, co sprzyja budowaniu społeczności i zwiększa zasięg ich twórczości.
            </span>
          </p>
        </div>

        <div className='SMTrendSection'>
          <h2 className='SMTrendSection-title'>
            <span>Zaawansowane Filtry</span>
          </h2>
          <p className='SMTrendSection-description'>
            <span>
              Aplikacja oferuje zaawansowane filtry, które pozwalają użytkownikom szybko odfiltrować treści według popularności, kategorii, lub innych kryteriów. Dzięki temu osoby tworzące materiały mogą znaleźć interesujące ich treści do swojej pracy.
            </span>
          </p>
        </div>

        <div className='SMTrendSection'>
          <h2 className='SMTrendSection-title'>
            <span>Ujednolicenie Procesu Tworzenia Treści</span>
          </h2>
          <p className='SMTrendSection-description'>
            <span>
              SM Trend skupia się na ułatwieniu procesu komplementowania treści, ale także na ich targetowaniu, co ma na celu nie tylko przyspieszenie procesu tworzenia, ale również zwiększenie jakości tworzonych materiałów.
            </span>
          </p>
        </div>

        <div className='SMTrendSection'>
          <h2 className='SMTrendSection-title'>
            <span>Galeria Zdjęć</span>
          </h2>
          <div className='SMTrendSection-image'>
            <img src='path_to_image_1.jpg' alt='Zrzut ekranu aplikacji SM Trend, pokazujący główny interfejs użytkownika.' />
            <img src='path_to_image_2.jpg' alt='Widok filtra treści w aplikacji SM Trend.' />
          </div>
        </div>
      </div>
    </>
  );
}
