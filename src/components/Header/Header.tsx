import { NavLink } from 'react-router-dom';
import { Logo } from '../Logo';
import { Nav } from '../Nav';

import './Header.scss';

export const Header = () => {
  return (
    <header className="Header">
      <div className="Header__content">
        <div className="Header__logo">
           <Logo />
        </div>
       
        <div className="Header__nav">
          <Nav />
        </div>

        <NavLink
          to="/menu"
          className="Header__menu-icon"
        >
          {' '}
        </NavLink>
      </div>
    </header>
  );
};