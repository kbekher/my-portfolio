import { Link } from 'react-router-dom';

import './Logo.scss';

export const Logo = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Link to="/" className="Logo" onClick={scrollToTop} />
  );
};