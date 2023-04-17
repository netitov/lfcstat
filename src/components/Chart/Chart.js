import React from 'react';
import { Bar } from "react-chartjs-2";

function Chart(props) {

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        display: false
      },
      title: {
        display: true,
        text: 'Аттака',
      },
      datalabels: {
        anchor: 'end',
        align: 'end',
        labels: {
          value: {
            color: '#e074748f'
          }
        }
      }
    },
    scales: {
      x: {
        grid: {
          display: false,
          drawTicks: false
        }
      },
      y: {
        grid: {
          display: true,
          color: "#5050501f",
          drawTicks: false
        },
        ticks: {
          display: false,
        },
      }
    }

  };

  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

  const data = {
    labels,
    datasets: [
      {
        label: "My First dataset",
        backgroundColor: '#ff17004d',
        data: [5, 10, 5, 2, 20, 30, 45],
        borderRadius: 7,
        borderColor: '#fff'

      },

    ],
  };

  return (
    <div className="chart">
      <Bar
        data={data}
        options={options}
      />
    </div>
  )
}

export default Chart
