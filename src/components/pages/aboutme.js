import React from 'react';
import '../../App.css';
import '../css/AboutMeStyle.css';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin } from 'react-icons/fa';
import img1 from '../../images/1port.png';
import img2 from '../../images/2port.png';

export default function AboutMe() {
  return (
    <section id='aboutme' className='aboutme'>
      <h1 className='aboutme__title'>O mnie</h1>
      <div className='aboutme__card'>
        <img src={img1}></img>
        <img src={img2}></img>
        <div className='aboutme__links'>
          <strong>Linki:</strong>
          <p><FaGithub className='icon' /> <a href="https://github.com/Mirac00?tab=repositories" target="_blank" rel="noopener noreferrer">GitHub</a></p>
          <p><FaLinkedin className='icon' /> <a href="https://www.linkedin.com/in/s%C5%82awomir-zajac-69ba94259/" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
        </div>
      </div>
    </section>
  );
}
