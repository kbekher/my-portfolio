import { Link } from 'react-router-dom';

import './Footer.scss';

export const Footer = () => (
  <footer className="Footer">
    <div className="Footer__links">
      <Link
        to="https://t.me/ninjagexly"
        target="_blank"
        title="Kristina's Telegram profile"
        className="Footer__link"
      >
        <i className="fa-brands fa-telegram" />
      </Link>

      <Link
        to="https://www.instagram.com/ninjagexly"
        target="_blank"
        title="Kristina's Instagram profile"
        className="Footer__link"
      >
        <i className="fa-brands fa-instagram instagram-icon" />
      </Link>
      <Link
        to="https://www.linkedin.com/in/kristina-bekher/"
        target="_blank"
        title="Kristina's LinkredIn profile"
        className="Footer__link"
      >
        <i className="fa-brands fa-linkedin" />
      </Link>
      <Link
        to="https://github.com/kbekher"
        target="_blank"
        title="Kristina's GitHub profile"
        className="Footer__link"
      >
        <i className="fa-brands fa-github" />
      </Link>
    </div>

    <p className="Footer__copyright">&copy; 2023 Kristina Bekher</p>
  </footer>
);