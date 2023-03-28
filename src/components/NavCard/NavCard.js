import React from 'react';
import { Link } from 'react-router-dom';


function NavCard(props) {
  return (
    <li className="card">
      <Link to={`/stats${props.route}`}>
        {props.children}
        <h3 className="card__title">{props.title}</h3>
      </Link>
    </li>

  )
}

export default NavCard;
