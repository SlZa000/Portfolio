import React from 'react';
import '../../App.css';
import '../css/InterviewStyle.css';

export default function Interview({ profileImage, scrollToAboutMe }) {
  return (
    <div className="interview-container">
      <div className="profile-image-container">
        <img
          src={profileImage}
          alt="Profil"
          className="profile-image"
        />
      </div>
      <div className="interview-text-container">
        <p className="interview-text">
          <h1>Sławomir Zając</h1><h2>Fullstack Developer</h2><br/>
          Cześć! Nazywam się [Twoje Imię]. Jestem na ostatnim roku Informatyki Stosowanej i niedawno ukończyłem praktyki, podczas których zdobyłem cenne doświadczenie w pracy nad rzeczywistymi projektami. Pasjonuje mnie tworzenie innowacyjnych rozwiązań, które mogą realnie wpływać na świat.

Na mojej stronie znajdziesz nie tylko moje CV, ale także szczegółowe opisy projektów, nad którymi pracowałem. Każdy z nich pokazuje moje podejście do programowania, kreatywność oraz umiejętność rozwiązywania problemów. Zachęcam Cię do zapoznania się z moim portfolio i odkrycia, jak mogę pomóc w Twoich projektach.

Chcesz dowiedzieć się więcej? Kliknij poniżej, aby zobaczyć moje CV i pełne portfolio!
          <br/>
          <button 
            onClick={scrollToAboutMe} 
            className="interview-button"
          >
            Dowiedz się o mnie więcej
          </button>
        </p>
      </div>
    </div>
  );
}
