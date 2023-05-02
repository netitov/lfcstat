import { useState } from 'react';

function Burger(props) {

  //const [active, setActive] = useState(false);

  /* function onBtnClick() {
    setActive(!active);
    props.openMenu(!active);
  } */

  return (
    <button className={`burger${props.active ? ' burger_active' : ''}`} id="burger" onClick={props.openMenu}>
      <span className="burger-line"></span>
      <span className="burger-line"></span>
      <span className="burger-line"></span>
    </button>
  )
}

export default Burger;
