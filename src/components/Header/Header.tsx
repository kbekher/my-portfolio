import { NavLink } from 'react-router-dom';
import { Logo } from '../Logo';
import { Nav } from '../Nav';

import './Header.scss';

export const Header = () => {
  // const { pathname } = useLocation();

  // const navigate = useNavigate();

  // const handleMenuClick = () => {
  //   if (pathname === '/menu') {
  //     navigate(-1);
  //   }
  // };

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