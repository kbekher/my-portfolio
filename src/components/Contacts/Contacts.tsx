import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

import './Contacts.scss';

const SERVICE_ID = 'service_0lkajj1';
const TEMPLATE_ID = 'template_lgbkrpn';
const PUBLIC_KEY = 'J1VAP8MMyBRlLDJNs';

interface FormData {
  name: string;
  email: string;
  text: string;
}

export const Contacts = () => {
  const form = useRef<HTMLFormElement >(null);
  const [isSent, setIsSent] = useState(false);
  const [formErrorMessage, setFormErrorMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    text: '',
  });

  const [isNameError, setIsNameError] = useState<boolean>(false);
  const [isEmailError, setIsEmailError] = useState<boolean>(false);
  const [isBodyError, setIsBodyError] = useState<boolean>(false);


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setIsNameError(false);
    setIsEmailError(false);
    setIsBodyError(false);
    setIsSent(false);
  };

  const areAllFieldsFilled = () => {
    return formData.name.trim() !== '' && formData.email.trim() !== '' && formData.text.trim() !== '';
  };

  const isEmailValid = () => {
    // Return true if the email is valid, otherwise return false
    const emailRegex = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    return emailRegex.test(formData.email);
  };

  const setFieldsErrors = () => {
    setIsNameError(!formData.name.trim());
    setIsEmailError(!isEmailValid());
    setIsBodyError(!formData.text.trim());
  };

  const handleEnterKey = (e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (areAllFieldsFilled() && isEmailValid()) {
        handleSubmit(e);
      } else {
        setFieldsErrors();
      }
    }
  };

  const reset = () => {
    setFormData({
      name: '',
      email: '',
      text: '',
    });
    setIsNameError(false);
    setIsEmailError(false);
    setIsBodyError(false);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setFormErrorMessage('');
    setIsSent(false);

    if (!areAllFieldsFilled() && !isEmailValid()) {
      setFieldsErrors();
      return;
    }

    if (form.current) {
      setIsSubmitting(true);
      emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
        .then(() => {
          setIsSent(true);
          setIsSubmitting(false);
          reset();
          const firstInput = form.current?.elements[0] as HTMLInputElement | undefined;
          if (firstInput) {
            firstInput.focus();
          }
        })
        .catch(() => {
          setFormErrorMessage('Oops, seems like we could not send your message. Please, try again!');
        })
        .finally(() => setIsSubmitting(false));
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
                <span>krbekher@gmail.com</span>
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
                value={formData.name}
                onChange={handleInputChange}
                onKeyDown={(e) => handleEnterKey(e)}
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
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                value={formData.email}
                onChange={handleInputChange}
                onKeyDown={(e) => handleEnterKey(e)}
                placeholder="Email"
                autoComplete="off"
              />
              {isEmailError && (
                <span>
                  <i className="fas fa-exclamation-triangle has-text-danger error-icon" />
                </span>
              )}

              <textarea
                name="text"
                className="Contacts__form-input Contacts__form-input--textarea"
                value={formData.text}
                onChange={handleInputChange}
                onKeyDown={(e) => handleEnterKey(e)}
                placeholder="Subject"
              ></textarea>

              {isBodyError && (
                <span>
                  <i className="fas fa-exclamation-triangle has-text-danger error-icon" />
                </span>
              )}

              <button
                type="submit"
                className="Contacts__form-button"
                disabled={isSubmitting}
              >
                Contact me
              </button>
            </form>

            {isSent ? (
              <p className="Contacts__form-message">
                {formErrorMessage ? formErrorMessage : 'Thanks for your message! 🥰'}
              </p>
            ) : <p className="Contacts__form-message"> {' '} </p>}
          </div>
        </div>
      </div>
    </div>
  );
};