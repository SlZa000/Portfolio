import React from 'react';
import '../css/NetapiStyle.css';

export default function Netapi() {
  return (
    <>
      <div className='Netapi'>
        <h1 className='Netapi-title'>Dokumentacja Aplikacji Notes.API</h1>
      
      <h2 className='Netapi-section-title'>Wstęp</h2>
      <p className='Netapi-text'>
        Aplikacja Notes.API to projekt oparty na platformie .NET Core, który oferuje API RESTful do zarządzania notatkami i wydarzeniami. Jest to przykładowa aplikacja, która może być używana jako punkt wyjścia do tworzenia bardziej zaawansowanych systemów lub narzędzi zarządzania informacjami. W tej dokumentacji omówimy wszystkie kluczowe elementy tej aplikacji, jej strukturę i możliwe przypadki użycia.
      </p>

      <h2 className='Netapi-section-title'>Struktura Projektu</h2>
      <p className='Netapi-text'>
        Projekt GitHub Actions Notes.API: Projekt aplikacji API Notes.
      </p>

      <h2 className='Netapi-section-title'>Połączenie z Bazą Danych</h2>
      <p className='Netapi-text'>
        SQL Server Database (ConnectionStrings: NotesDbConnectionString): Projekt jest połączony z bazą danych SQL Server, gdzie przechowywane są informacje o notatkach, wydarzeniach i użytkownikach.
      </p>

      <h2 className='Netapi-section-title'>Zależności</h2>
      <p className='Netapi-text'>
        Analyzers: Analizatory kodu.
        <br />
        Frameworks: Frameworki platformy .NET Core.
        <br />
        Pakiety NuGet:
        <ul className='Netapi-list'>
          <li>Microsoft.EntityFrameworkCore.SqlServer (7.0.4): Biblioteka do obsługi bazy danych SQL Server w Entity Framework Core.</li>
          <li>Microsoft.EntityFrameworkCore.Tools (7.0.5): Narzędzia do Entity Framework Core.</li>
          <li>Microsoft.VisualStudio.Web.CodeGeneration.Design (6.0.13): Narzędzia do generowania kodu ASP.NET Core.</li>
          <li>Swashbuckle.AspNetCore (6.2.3): Biblioteka do generowania dokumentacji interfejsu API (Swagger).</li>
        </ul>
      </p>

      <h2 className='Netapi-section-title'>Właściwości</h2>
      <p className='Netapi-text'>
        launchSettings.json: Konfiguracja ustawień startowych aplikacji.
      </p>

      <h2 className='Netapi-section-title'>Kontrolery</h2>
      <p className='Netapi-text'>
        AuthController.cs
        <br />
        Kontroler obsługujący autoryzację użytkowników. Może być rozbudowany o mechanizmy autentykacji, takie jak JWT.
        <br />
        Event111sController.cs
        <br />
        Kontroler do zarządzania wydarzeniami (Event111). Pozwala na pobieranie, dodawanie, aktualizowanie i usuwanie wydarzeń.
        <br />
        NotesController.cs
        <br />
        Kontroler do zarządzania notatkami (Note). Udostępnia funkcje do pobierania, dodawania, aktualizowania i usuwania notatek.
        <br />
        WeatherForecastController.cs
        <br />
        Kontroler obsługujący prognozy pogody, używany jako przykład danych do testowania aplikacji.
      </p>

      <h2 className='Netapi-section-title'>Warstwa Danych</h2>
      <p className='Netapi-text'>
        TableDbContext.cs
        <br />
        Klasa TableDbContext reprezentuje kontekst bazy danych. Zawiera DbSety dla notatek, wydarzeń i użytkowników.
      </p>

      <h2 className='Netapi-section-title'>DTO (Data Transfer Objects)</h2>
      <p className='Netapi-text'>
        UserDto.cs
        <br />
        Klasa UserDto jest używana do przesyłania danych dotyczących użytkowników między klientem a serwerem. Zawiera pola, takie jak UserName i Password, które można wykorzystać do uwierzytelniania użytkowników.
      </p>

      <h2 className='Netapi-section-title'>Migracje</h2>
      <p className='Netapi-text'>
        20230523203617_InitialCreate.cs
        <br />
        Migracja inicjująca bazę danych. Tworzy tabele dla notatek i wydarzeń.
        <br />
        TableDbContextModelSnapshot.cs
        <br />
        Plik zawierający migawkę modelu bazy danych.
      </p>

      <h2 className='Netapi-section-title'>Modele i Encje</h2>
      <p className='Netapi-text'>
        Event111.cs
        <br />
        Klasa Event111 reprezentuje encję wydarzenia. Zawiera pola takie jak Title, Description, StartDate, EndDate i IsVisible.
        <br />
        Note.cs
        <br />
        Klasa Note reprezentuje encję notatki. Zawiera pola takie jak Title, Description i IsVisible.
        <br />
        User.cs
        <br />
        Klasa User reprezentuje encję użytkownika. Zawiera pola Username, PasswordHash i PasswordSalt.
      </p>

      <h2 className='Netapi-section-title'>Konfiguracja</h2>
      <p className='Netapi-text'>
        appsettings.json
        <br />
        Plik konfiguracyjny zawierający ustawienia aplikacji, takie jak poziomy logowania i łańcuchy połączeń do bazy danych.
        <br />
        Program.cs
        <br />
        Główny plik programu, który konfiguruje i uruchamia aplikację. Skonfigurowane są tu usługi, takie jak Swagger do dokumentacji API.
      </p>

      <h2 className='Netapi-section-title'>Scenariusze Użycia</h2>
      <p className='Netapi-text'>
        Notatki i Wydarzenia
        <br />
        Głównym celem aplikacji jest zarządzanie notatkami i wydarzeniami. Może być używana jako narzędzie do organizacji zadań lub kalendarz.
        <br />
        Autoryzacja Użytkowników
        <br />
        Kontroler AuthController może być rozbudowany o mechanizmy autentykacji, takie jak JWT, co pozwala na bezpieczne uwierzytelnianie użytkowników.
        <br />
        Przykłady Użycia Komercyjnego:
        <br />
        Pomimo że jest to przykładowa aplikacja, może zostać wykorzystana jako punkt wyjścia do bardziej zaawansowanych projektów. Oto kilka przykładów komercyjnego wykorzystania:
        <ul className='Netapi-list'>
          <li>System Zarządzania Zadaniami: Rozbudowa aplikacji Notes.API o dodatkowe funkcje zarządzania zadaniami i projektami, co pozwala na stworzenie kompleksowego systemu zarządzania zadaniami dla firm.</li>
          <li>System Kalendarza Firmowego: Rozbudowa aplikacji o funkcje zarządzania kalendarzem firmowym, harmonogramem spotkań i rezerwacjami zasobów.</li>
          <li>System Magazynowy: Rozbudowa aplikacji o funkcje zarządzania magazynem, śledzenia zapasów, obsługi zamówień i dostaw, co pozwoli na utworzenie systemu magazynowego dla firm handlowych.</li>
          <li>Aplikacja CRM: Rozbudowa aplikacji o funkcje zarządzania relacjami z klientami, śledzenia kontaktów i zarządzania sprzedażą, co pozwoli na utworzenie narzędzia do zarządzania relacjami z klientami.</li>
        </ul>
      </p>

      <h2 className='Netapi-section-title'>Podsumowanie</h2>
      <p className='Netapi-text'>
        Aplikacja Notes.API to przykładowy projekt API RESTful do zarządzania notatkami i wydarzeniami. Może być używana jako punkt wyjścia do tworzenia różnych systemów zarządzania informacjami lub innych aplikacji, które wymagają zarządzania danymi. Może być dostosowana i rozbudowana w zależności od potrzeb komercyjnych.
      </p>
      </div>
    </>
  );
}
