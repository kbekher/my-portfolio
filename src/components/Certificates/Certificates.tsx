import { useState } from 'react';
import { Link } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { certificateList } from './certificateList';
import { Direction } from '../../types/Direction';
import { SliderButton } from '../SliderButton';

import './Certificates.scss';

export const Certificates = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { testimonial, link } = certificateList[currentIndex];
  const images: Array<string> = [];

  for (let i = 0; i < certificateList.length; i++) {
    images.push(certificateList[i].name);
  }

  const getNextIndex = (currentIndex: number) => {
    const nextIndex = (currentIndex + 1) % images.length;
    return nextIndex;
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const previousSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + images.length - 1) % images.length);
  };

  return (
    <div className="Certificates">
      <div className="container">
        <div className="Certificates__content">
          <div className="Certificates__text-section">
            <h2 className="Certificates__title">Certificates</h2>
            <p className="Certificates__testimonial">
              {testimonial}
            </p>
            <div className="Certificates__actions">
              <div className="Certificates__arrows">
                <SliderButton
                  direction={Direction.PREV}
                  handleClick={previousSlide}
                  disabled={currentIndex === 0}
                />
                <SliderButton
                  direction={Direction.NEXT}
                  handleClick={nextSlide}
                  disabled={currentIndex === images.length - 1}
                />
              </div>

              <Link
                to={link}
                className="Certificates__contact-button"
                target="_blank"
              >
                View Certificate
              </Link>
            </div>

            <div className="Certificates__img-container">
              <img
                src={require(`./img/${images[currentIndex]}.webp`)}
                alt="certificate"
                className="Certificates__img"
              />
            </div>
          </div>

          <div className="Certificates__img-section">
            <TransitionGroup>
              <CSSTransition
                key={currentIndex}
                timeout={500}
                classNames="frontSlide"
              >
                <img
                  src={require(`./img/${images[currentIndex]}.webp`)}
                  alt="certificate"
                  className="Certificates__img frontSlide"
                />
              </CSSTransition>
              <CSSTransition
                key={getNextIndex(currentIndex)}
                timeout={500}
                classNames="backSlide"
              >
                <img
                  src={require(`./img/${images[getNextIndex(currentIndex)]}.webp`)}
                  alt="certificate"
                  className="Certificates__img backSlide"
                />
              </CSSTransition>
            </TransitionGroup>
          </div>
        </div>
      </div>
    </div>
  );
};