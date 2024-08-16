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
          Jestem świeżo po zakończeniu praktyk na studiach i poszukuję stałej pracy jako Frontend Developer.
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
