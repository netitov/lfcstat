import React from 'react'
import { promoImg } from '../../utils/constants';

function Promo() {
  return (
    <div className="promo">
      <div className="promo__cards">
        <div className="promo__card">
          <p>Матчей</p>
          <h3>30</h3>
        </div>
        <div className="promo__card">
          <p>Побед</p>
          <h3>14</h3>
        </div>
        <div className="promo__card">
          <p>Забито мячей</p>
          <h3>53</h3>
        </div>
        <div className="promo__card">
          <p>Текущее место</p>
          <h3>8</h3>
        </div>
      </div>
      <img className="promo__img" src={promoImg} />
      <div className="promo__overlay"></div>

    </div>
  )
}

export default Promo
