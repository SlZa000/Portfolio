import React from 'react';
import '../css/SMTrendStyle.css';
import img1 from '../../images/s111.png';
import img2 from '../../images/s222.png';
import img3 from '../../images/222.png';
import img4 from '../../images/s333.png';

export default function SMTrend() {
  return (
    <>
      <div className='SMTrend'>
        <div className='SMTrendSection'>
          <h1 className='SMTrendSection-title'>
            <span>SM Trend</span>
          </h1>
          <p className='SMTrendSection-description'>
            <span>
              SM Trend to nowoczesna aplikacja zaprojektowana, aby wspierać użytkowników w tworzeniu treści online. Oferuje zaawansowane filtry, które umożliwiają szybkie i łatwe odnajdywanie najpopularniejszych treści w różnych kategoriach. Dzięki temu proces tworzenia treści staje się bardziej efektywny i ukierunkowany na wyniki.
            </span>
          </p>
          <div className='SMTrendSection-image'>
            <img src={img2} alt='Zrzut ekranu głównego interfejsu SM Trend.' />
          </div>
        </div>

        <div className='SMTrendSection'>
          <h2 className='SMTrendSection-title'>
            <span>System Autoryzacji Użytkowników</span>
          </h2>
          <p className='SMTrendSection-description'>
            <span>
              Użytkownicy mogą łatwo zarejestrować się lub zalogować do aplikacji, uzyskując dostęp do pełnej gamy funkcji. Proces uwierzytelniania jest zabezpieczony przy użyciu tokenów JWT, co zapewnia bezpieczeństwo danych i prywatność.
            </span>
          </p>
          <div className='SMTrendSection-code'>
            <pre>
              <code>
{`// Fragment implementacji uwierzytelniania JWT
public interface IJwtUtils
{
    string GenerateToken(User user);
}

public class JwtUtils : IJwtUtils
{
    public string GenerateToken(User user)
    {
        var key = Encoding.ASCII.GetBytes(_appSettings.Secret);
        var tokenDescriptor = new SecurityTokenDescriptor
        {
            Subject = new ClaimsIdentity(new[] { new Claim("id", user.Id.ToString()) }),
            Expires = DateTime.UtcNow.AddHours(1),
            SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
        };

        var token = tokenHandler.CreateToken(tokenDescriptor);
        return tokenHandler.WriteToken(token);
    }
}`}
              </code>
            </pre>
          </div>
          <div className='SMTrendSection-image'>
          <img src={img1} alt='Zrzut ekranu głównego interfejsu SM Trend.' />
          </div>
        </div>

        <div className='SMTrendSection'>
          <h2 className='SMTrendSection-title'>
            <span>Tworzenie Treścii</span>
          </h2>
          <p className='SMTrendSection-description'>
            <span>
              SM Trend umożliwia tworzenie różnego rodzaju postów, takich jak audio, zdjęcia, filmy i słowa kluczowe. Użytkownicy mogą dzielić się swoimi pomysłami i treściami z innymi, wspierając tym samym budowanie społeczności oraz zwiększając zasięg swojej kreatywności.
            </span>
          </p>
          <div className='SMTrendSection-image'>
          <img src={img4} alt='Zrzut ekranu widoku filtrowania treści w SM Trend.' />
          </div>
        </div>

        <div className='SMTrendSection'>
          <h2 className='SMTrendSection-title'>
            <span>Zaawansowane Filtry</span>
          </h2>
          <p className='SMTrendSection-description'>
            <span>
              Aplikacja oferuje zaawansowane filtry, które pozwalają użytkownikom szybko filtrować treści według popularności, kategorii lub innych kryteriów. Ta funkcja pomaga twórcom treści znaleźć najbardziej odpowiednie materiały do swojej pracy.
            </span>
          </p>
        </div>

        <div className='SMTrendSection'>
          <h2 className='SMTrendSection-title'>
            <span>Usprawnianie Procesu Tworzenia Treści</span>
          </h2>
          <p className='SMTrendSection-description'>
            <span>
              SM Trend koncentruje się na uproszczeniu procesu kuratorowania treści, jednocześnie skutecznie je ukierunkowując. To nie tylko przyspiesza tworzenie treści, ale także podnosi jakość tworzonych materiałów.
            </span>
          </p>
        </div>

        <div className='SMTrendSection'>
          <h2 className='SMTrendSection-title'>
            <span>Galeria Zdjęć</span>
          </h2>
          <div className='SMTrendSection-image'>
            <img src={img4} alt='Zrzut ekranu widoku filtrowania treści w SM Trend.' />
            <img src={img3} alt='Zrzut ekranu galerii zdjęć w SM Trend.' />
          </div>
        </div>
      </div>
    </>
  );
}
