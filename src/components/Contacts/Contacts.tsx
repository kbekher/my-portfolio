import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

import './Contacts.scss';

const SERVICE_ID = 'service_0lkajj1';
const TEMPLATE_ID = 'template_lgbkrpn';
const PUBLIC_KEY = 'J1VAP8MMyBRlLDJNs';

export const Contacts = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSent, setIsSent] = useState(false);
  const [formErrorMessage, setFormErrorMessage] = useState('');

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [body, setBody] = useState('');

  const [isNameError, setIsNameError] = useState(false);
  const [isEmailError, setIsEmailError] = useState(false);
  const [isBodyError, setIsBodyError] = useState(false);

  // #region handlers
  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
    setIsNameError(false);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    setIsEmailError(false);
  };

  const handleBodyChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setBody(event.target.value);
    setIsBodyError(false);
  };
  // #endregion

  const reset = () => {
    setName('');
    setEmail('');
    setBody('');
    setIsNameError(false);
    setIsEmailError(false);
    setIsBodyError(false);
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setFormErrorMessage('');

    const modifiedName = name.trim();
    const modifiedEmail = email.trim();
    const modifiedBody = body.trim();

    setIsNameError(!modifiedName);
    setIsEmailError(!modifiedEmail);
    setIsBodyError(!modifiedBody);

    if (!modifiedName || !modifiedEmail || !modifiedBody) {
      return;
    }

    if (form.current) {
      emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
        .then(() => {
          setIsSent(true);
          reset();
        }, () => {
          setFormErrorMessage('Oops, seems like we could not send your message. Please, try again!');
        });
    }
  };

  return (
    <div className="Contacts" id="contacts">
      <div className="container">
        <div className="Contacts__content">
          <div className="Contacts__text-section">
            <h2 className="Contacts__title">
              Let's <span className="highlight">Connect!</span>
            </h2>
            <p className="Contacts__paragraph">
            Feel free to get in touch with me! Whether you have a project in mind,
            want to collaborate, or just want to say hello, I'd love to hear from you. 
            Let's connect and bring your ideas to life! ✨
            </p>

            <ul className="Contacts__details">
              <li className="Contacts__detail">
                <i className="fa-solid fa-mobile-screen-button fa-border Contacts__icon" />
                <div>
                  <div>+380 93 363 6320</div>
                  <div>+49 151 1109 7642</div>
                </div>
              </li>
              <li className="Contacts__detail">
                <i className="fa-regular fa-envelope fa-border Contacts__icon" />
                <span>bekherkr@gmail.com</span>
              </li>
            </ul>
          </div>

          <div className="Contacts__form-section">
            <form
              ref={form}
              className="Contacts__form"
              onSubmit={handleSubmit}
            >
              <h4 className="Contacts__form-title">Send me a message</h4>

              <input
                type="text"
                name="name"
                className="Contacts__form-input"
                value={name}
                onChange={handleNameChange}
                placeholder="Name"
                autoComplete="off"
              />
              {isNameError && (
                <span>
                  <i className="fas fa-exclamation-triangle has-text-danger error-icon" />
                </span>
              )}

              <input
                type="email"
                name="email"
                className="Contacts__form-input"
                value={email}
                onChange={handleEmailChange}
                placeholder="Email"
                autoComplete="off"
              />
              {isEmailError && (
                <span>
                  <i className="fas fa-exclamation-triangle has-text-danger error-icon" />
                </span>
              )}

              <textarea
                name="message"
                className="Contacts__form-input Contacts__form-input--textarea"
                value={body}
                onChange={handleBodyChange}
                placeholder="Subject"
              ></textarea>

              {isBodyError && (
                <span>
                  <i className="fas fa-exclamation-triangle has-text-danger error-icon" />
                </span>
              )}

              <button type="submit" className="Contacts__form-button">
                Contact me
              </button>
            </form>

            {isSent && (
              <p className="Contacts__form-message">
                {formErrorMessage ? formErrorMessage : 'Thanks for your message! 🥰'}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};