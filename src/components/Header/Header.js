import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { headerMenu } from '../../utils/constants';
import Burger from '../Burger/Burger';

function Header(props) {

  const [activeMenu, setActiveMenu] = useState(false);
  const { pathname } = useLocation();

    function handleLinkClick(e) {
    props.filterEvents(e.target.textContent.toLowerCase());
    if(activeMenu) {
      setActiveMenu(false);
    }
  }

  function openMenu() {
    setActiveMenu(!activeMenu);
  }

  //style active menu li and logo
  function handleLiClass(route) {
    const activeClass = pathname === route ? ' nav__li_active' : '';
    const logoClass = route === '/' ? ' nav__li_brand' : '';
    return activeClass + logoClass;
  }

  return (
    <header className="header">
      <nav className="nav header__nav">
        <Link className={`nav__brand nav__li${pathname === '/' ? ' nav__li_active' : ''}`} to='/'>LfcStats</Link>
        <ul className={`nav__ul${activeMenu ? ' nav__ul_active' : ''}`}>
          {headerMenu.map((i) => {
            return (
              <li className={`nav__li${handleLiClass(i.route)}`} key={i.name} onClick={handleLinkClick}>
                <Link to={i.route}>{i.name}</Link>
              </li>
            )
          })}
        </ul>
      </nav>
      <Burger
        openMenu={openMenu}
        active={activeMenu}
      />
    </header>
  );
}

export default Header;
