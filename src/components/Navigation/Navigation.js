import React from 'react';
import NavCard from '../NavCard/NavCard';
import { navBtns } from '../../utils/constants';

function Navigation() {
  return (
    <nav className="navigation">
      <ul>
        {navBtns.map((i) => (
          <NavCard title={i.title} key={i.title} route={i.route}>
            {i.icon}
          </NavCard>
        ))}
      </ul>

    </nav>
  );
}

export default Navigation;
