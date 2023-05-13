import React, { useState, useCallback } from 'react';
import { Line } from 'react-chartjs-2';
import Select from '../Select/Select';

function Chart(props) {
  const [option, setOption] = useState(props.initOption);
  const { perMatch } = props.tsOptions.find((i) => i.name === option);
  const statsValues = props.teamCharts.map((i) => (perMatch ? (i[option] / i.matches).toFixed(2)
    : i[option].toFixed(2)));

  const selectOption = useCallback((data) => {
    setOption(data);
  }, []);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        display: false,
      },
      title: {
        display: false,
        text: 'Аттака',
        padding: {
          bottom: 25,
        },
        font: {
          size: 14,
        },

      },
      datalabels: {
        anchor: 'end',
        align: 'end',
        labels: {
          value: {
            color: '#e074748f',
          },
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
          drawTicks: false,
        },
      },
      y: {
        grid: {
          display: true,
          color: '#5050501f',
          drawTicks: false,
        },
        ticks: {
          display: false,
        },
      },
    },
    layout: {
      padding: {
        left: 10,
        rigt: 10,
        top: 25,
        bottom: 10,
      },
    },
    redraw: false,

  };

  const data = {
    labels: props.labels,
    datasets: [
      {
        label: option,
        data: statsValues,
        borderRadius: 7,
        borderColor: '#c8102e52',
        backgroundColor: ({ chart: { ctx } }) => {
          const bg = ctx.createLinearGradient(0, 0, 0, 400);
          bg.addColorStop(0, '#c8102e52');
          bg.addColorStop(0.5, '#c8102e00');
          return bg;
        },
        lineTension: 0.3,
        fill: true,
      },

    ],
  };

  return (
    <div className="chart">
      <div className="chart__container">
        <h3>{props.typeRu}</h3>
        <Select
          tsOptions={props.tsOptions}
          type={props.type}
          selectOption={selectOption}
          initOption={props.initOption}
        />
      </div>
      <p className={perMatch ? 'chart__info' : 'chart__info chart__info_inactive'}>в среднем за матч</p>
      <Line
        data={data}
        options={options}
      />

    </div>
  );
}

export default Chart;
