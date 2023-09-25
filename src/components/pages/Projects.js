// Projects.js
import '../css/ProjectsStyle.css';
import React from 'react';


export default function Projects() {
  return (
    <div className='Projects'>
      <h1>Projects</h1>

      <div className='ArticleSection' id='article1'>
        <h2>Article 1</h2>
        <p>Opis artykułu 1.</p>
        <img src='zdjecie1.jpg' alt='Zdjęcie 1' />
      </div>

      <div className='ArticleSection' id='article2'>
        <h2>Article 2</h2>
        <p>Opis artykułu 2.</p>
        <img src='zdjecie2.jpg' alt='Zdjęcie 2' />
      </div>

      <div className='ArticleSection' id='article3'>
        <h2>Article 3</h2>
        <p>Opis artykułu 3.</p>
        <img src='zdjecie3.jpg' alt='Zdjęcie 3' />
      </div>

      <div className='ArticleSection' id='article4'>
        <h2>Article 4</h2>
        <p>Opis artykułu 4.</p>
        <img src='zdjecie4.jpg' alt='Zdjęcie 4' />
      </div>

      <div className='NavigationButtons'>
        <button onClick={() => scrollToSection('article1')}>Artykuł 1</button>
        <button onClick={() => scrollToSection('article2')}>Artykuł 2</button>
        <button onClick={() => scrollToSection('article3')}>Artykuł 3</button>
        <button onClick={() => scrollToSection('article4')}>Artykuł 4</button>
      </div>
    </div>
  );
}

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    window.scrollTo({
      top: section.offsetTop,
      behavior: 'smooth',
    });
  }
}
