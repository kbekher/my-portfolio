import { HashLink as Link } from 'react-router-hash-link';

import './About.scss';

export const About = () => (
  <div className="About">
    <div className="About__content">
      <div className="About__text-section">
        <h1 className="About__title">Kristina Bekher</h1>

        <h2 className="About__subtitle">
          Building <br />websites <span className="highlight">experience</span>
        </h2>

        <p className="About__paragraph">
          A professional &amp; imaginative front-end developer from Ukraine. Currently based in Germany
          and open to exciting job opportunities! 
        </p>

        <Link to='#contacts' className="About__button">
          Contact Me
        </Link>
      </div>

      <div className="About__img-section">
        <picture>
          {/* <source
            media="(max-width: 760px)"
            srcSet={require("./img/photo-mobile.webp")}
          /> */}
          <img
            src={require("./img/photo.webp")}
            className="About__img"
            alt="Kristina Bekher"
          />
        </picture>
      </div>
    </div>
  </div>
);