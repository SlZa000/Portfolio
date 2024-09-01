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
          Cześć! Nazywam się Sławomir Zając. Jestem na ostatnim roku Informatyki Stosowanej i niedawno ukończyłem praktyki. Obecnie jestem gotowy na stałą współpracę przy poważnych projektach. Moją pasją jest frontend, ale mam też doświadczenie w backendzie, co pozwala mi tworzyć spójne i funkcjonalne aplikacje.

Na mojej stronie znajdziesz moje CV oraz szczegóły projektów, nad którymi pracowałem. Zachęcam do zapoznania się z moim portfolio i odkrycia, jak mogę pomóc w realizacji Twoich projektów!

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
