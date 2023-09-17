import { Link } from 'react-router-dom';
import { Nav } from '../Nav';
import { Logo } from '../Logo';

import './Menu.scss';

export const Menu = () => {
  return (
    <div className="Menu" id="Menu">
      <div className="container">
        <div className="Menu__content">
          <div className="Menu__top">
            <Logo />

            <Link to="/" className="Menu__close-icon"/>
          </div>

          <Nav />
        </div>
      </div>
    </div>
  );
};
