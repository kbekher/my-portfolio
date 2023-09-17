import React from 'react';
import { useLocation } from 'react-router-dom';
import { HashLink as Link} from 'react-router-hash-link';
import cn from 'classnames';

import './Nav.scss';

type Props = {
  name: string;
  path: string;
};

export const NavButton: React.FC<Props> = ({name, path}) => {
  const { pathname } = useLocation()

  return (
    <Link
      to={(pathname !== '/menu') ? path : `/${path}`}
      className={cn('NavButton', {
        'NavButton--contacts': name === 'Contact me',
      })}
    >
      {name}
    </Link>
  );
};
