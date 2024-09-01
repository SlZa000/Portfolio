import React, { useState, useEffect } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import '../../App.css';
import '../css/ContactStyle.css';

function ContactForm() {
  const [state, handleSubmit] = useForm("mwpeqwpb");
  const [feedbackMessage, setFeedbackMessage] = useState(null);
  const [feedbackColor, setFeedbackColor] = useState('');

  useEffect(() => {
    if (state.succeeded) {
      setFeedbackMessage('Wiadomość wysłana');
      setFeedbackColor('green');
    } else if (state.errors && state.errors.length > 0) {
      setFeedbackMessage('Wystąpił błąd');
      setFeedbackColor('red');
    }
  }, [state]);

  return (
    <section id='contact' className='contact'>
      <div className='contact-form'>
      <h1 className='contact__title'>Kontakt</h1>
      <p>Adres e-mail: slawomirzajc@gmail.com <br/> Tel : 575 180 010</p>
        <form onSubmit={handleSubmit} className='contact-form__form'>
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
              <ValidationError 
                prefix="Email" 
                field="email"
                errors={state.errors}
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
            <ValidationError 
              prefix="Message" 
              field="message"
              errors={state.errors}
            />
          </div>
          {feedbackMessage && (
          <p style={{ color: feedbackColor, marginTop: '20px' }}>{feedbackMessage}</p>
        )}
          <button type='submit' className='contact-form__button' disabled={state.submitting}>
            Wyślij
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactForm;
