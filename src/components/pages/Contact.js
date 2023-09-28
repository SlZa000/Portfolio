import React from 'react';
import '../../App.css';
import '../css/ContactStyle.css';

export default function Contact() {
  return (
    <section id='contact' className='contact'>
      <h1 className='contact__title'>Kontakt</h1>
      <div className='contact-form'>
        <form className='contact-form__form'>
          <div className='form-group contact-form__form-group'>
            <div className='form-group-half contact-form__half'>
              <label htmlFor='name' className='contact-form__label'>
                Imię i nazwisko:
              </label>
              <input
                type='text'
                id='name'
                name='name'
                className='contact-form__input'
                required
              />
            </div>
            <div className='form-group-half contact-form__half'>
              <label htmlFor='email' className='contact-form__label'>
                Adres e-mail:
              </label>
              <input
                type='email'
                id='email'
                name='email'
                className='contact-form__input'
                required
              />
            </div>
          </div>
          <div className='form-group'>
            <label htmlFor='message' className='contact-form__label'>
              Wiadomość:
            </label>
            <textarea
              id='message'
              name='message'
              rows='4'
              className='contact-form__textarea'
              required
            ></textarea>
          </div>
          <button type='submit' className='contact-form__button'>
            Wyślij
          </button>
        </form>
      </div>
    </section>
  );
}
