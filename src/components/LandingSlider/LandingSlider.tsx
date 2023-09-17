import { useState } from 'react';
import { Link } from 'react-router-dom';
import { landings } from './landings';
import { SliderButton } from '../SliderButton';
import { Direction } from '../../types/Direction';

import './LandingSlider.scss';

const sliderSettings = {
  containerWidth: 1040,
  cardWidth: 500,
  cardGap: 16,
  cardsPerPage: 3,
};

export const LandingSlider = () => {
  const {
    cardWidth,
    cardGap,
    cardsPerPage,
  } = sliderSettings;

  // let { cardsPerPage } = sliderSettings;

  // if (window.innerWidth < 600) {
  //   cardsPerPage = 1;
  // } else if (window.innerWidth < 884) {
  //   cardsPerPage = 2;
  // }

  const [lastVisibleCard, setLastVisibleCard] = useState(cardsPerPage);
  const totalCards = landings.length;

  const scroll = -(lastVisibleCard - cardsPerPage) * (cardWidth + cardGap);
  const styles = {
    transform: `translateX(${scroll}px)`,
    transition: 'transform 500ms',
  };

  const handleCardsChange = (direction: Direction) => {
    let newCard;

    if (direction === Direction.NEXT) {
      newCard = lastVisibleCard + cardsPerPage;

      if (newCard > totalCards) {
        newCard = totalCards;
      }
    } else {
      newCard = lastVisibleCard - cardsPerPage;

      if (newCard < cardsPerPage) {
        newCard = cardsPerPage;
      }
    }

    setLastVisibleCard(newCard);
  };

  return (
    <div className="LandingSlider">
      <div className="LandingSlider__text-section">
        <h2 className="LandingSlider__title">Landings</h2>
        <p className="LandingSlider__paragpraph">
          Transforming vision into reality: crafting responsive, engaging and
          accessible web experiences with the power of HTML, CSS , JavaScript and more.
        </p>
      </div>

      <div className="LandingSlider__buttons">
        <SliderButton
          direction={Direction.PREV}
          handleClick={handleCardsChange}
          disabled={lastVisibleCard === cardsPerPage}
        />
        <SliderButton
          direction={Direction.NEXT}
          handleClick={handleCardsChange}
          disabled={lastVisibleCard === totalCards}
        />
      </div>

      <div className="LandingSlider__items-container">
        <div className="LandingSlider__items">
          {landings.map(item => (
            <div className="LandingSlider__item"
              key={item.id}
              style={styles}
            >
              <h4 className="LandingSlider__item-title">{item.title}</h4>
              <Link
                to={item.url}
                target="_blank"
                className="LandingSlider__item-link"
              >
                <img
                  src={require(`./img/${item.imgPath}.webp`)}
                  alt={item.title}
                  className="LandingSlider__item-img"
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};