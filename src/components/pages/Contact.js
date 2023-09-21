import React from 'react';
import '../../App.css';
import '../css/ContactStyle.css';

export default function Contact() {
  return (
    <section id='contact' className='contact'>
      <h1>Kontakt</h1>
      <div className="contact-form">
        <form>
        <div className="form-group">
            <div className="form-group-half">
              <label htmlFor="name">Imię i nazwisko:</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group-half">
              <label htmlFor="email">Adres e-mail:</label>
              <input type="email" id="email" name="email" required />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="message">Wiadomość:</label>
            <textarea id="message" name="message" rows="4" required></textarea>
          </div>
          <button type="submit">Wyślij</button>
        </form>
      </div>
    </section>
  );
}
