import React, { useEffect, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import image from '../../images/pngaaa.com-754807.png';

function Promo(props) {
  const [chartsData, setChartsData] = useState({
    wins: 0,
    draws: 0,
    losses: 0,
    matches: 0,
    position: 0,
    goalsSc: 0,
  });

  useEffect(() => {
    setChartsData(props.data === undefined ? 0 : props.data);
  });

  const data = {
    labels: ['Победы', 'Ничьи', 'Поражения'],
    datasets: [
      {
        data: [chartsData.wins, chartsData.draws, chartsData.losses],
        backgroundColor: [
          '#febf4c',
          '#c6d0bc',
          '#333333',
        ],
        borderColor: [
          '#272727',
        ],
        borderWidth: 4,
      },
    ],
  };

  const options = {
    cutout: 70,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          usePointStyle: true,
          boxWidth: 7,
          font: {
            size: 14,
          },
        },
      },
      datalabels: {
        font: {
          size: 14,
        },
      },
    },
  };

  return (
    <div className="promo">
      <h1>Статистика и результаты ФК &laquo;Ливерпуль&raquo;</h1>
      <div className="promo__container">
        <img className="promo__img" src={image} alt="Liverpool" />
      </div>

      <div className="promo__cards-wrapper">
        <div className="promo__cards-container">

          <div className="promo__card">
            <Doughnut
              data={data}
              options={options}
            />
            <div className="promo__chart-title">
              <h3>{chartsData.matches}</h3>
              <span>матчей</span>
            </div>

          </div>

          <div className="promo__small-container">
            <div className="promo__card promo__card_small">
              <p>Текущее место</p>
              <h3>{chartsData.position}</h3>
            </div>
            <div className="promo__card promo__card_small promo__card_grey">
              <p>Забито мячей</p>
              <h3>{chartsData.goalsSc}</h3>
            </div>
            <div className="promo__card promo__card_small promo__card_black">
              <p>% побед</p>
              <h3>{(Number(Math.round(chartsData.wins / chartsData.matches) * 100)) || 0}</h3>
            </div>
          </div>
          <p className="promo__note">*Английская Премьер-лига. Сезон 2022/2023</p>
        </div>

      </div>

    </div>
  );
}

export default Promo;
