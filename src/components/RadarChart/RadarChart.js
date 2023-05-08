import React, { useState, useEffect }from 'react';
import { Radar } from "react-chartjs-2";
import { playersTableData } from '../../utils/constants';

function RadarChart(props) {

  const initArr = switchToPerGame();
  const [option, setOption] = useState({
    first: 'Mohamed Salah',
    second: 'Diogo Jota'
  });

  const [arr, setArr] = useState([]);
  const [labels, setLabels] = useState([]);
  const [labelSize, setLabelSize] = useState(13);

  //bad = runs after any chages
  const players = initArr.length === 0 ? ['Diogo Jota', 'Mohamed Salah'] : initArr.map((i) => i.name);


  useEffect(() => {
    const data = filterTargetValues();
    const labels = data.length === 0 ? data : Object.keys(data[0]).filter((i) => i !== 'name');

    const labelsRu = labels.map((i) => {
      const element = playersTableData.find((j) => i === j.name);
      return element.nameRadar;
    });

    setArr(data);
    setLabels(labelsRu);
  }, [props.playerStats])

  useEffect(() => {
    if (window.outerWidth <= 580) {
      setLabelSize(10);
    }
  }, [])


  //filter initial array: to display selected labels
  function filterTargetValues() {
    let newArr = [];
    initArr.forEach((i) => {
      let newObj = {};
      for (let key in i) {
        const obj = playersTableData.find((i) => i.name === key);
        if (obj.compare) {
          newObj = { ...newObj, [key]: i[key] };
        }
      }
      newArr.push(sortObject(newObj, i));
    })
    return newArr;
  }

  function sortObject(obj, i) {
    let sortedObj = {};
    const objKeys = Object.keys(obj).sort();
      objKeys.forEach((k) => {
        sortedObj = { ...sortedObj, [k]: i[k] };
      })
      return sortedObj;
  }

  function selectOption(e) {
    setOption({...option, [e.target.name]: e.target.value });
  }

  //transfrom initial overall data to per game (value / appearances)
  function switchToPerGame() {
    let newArr = [];
    props.playerStats.forEach((i) => {
      newArr.push({...i});
    })
    newArr.forEach((i) => {
      for (let key in i) {
        if (key !== 'name' && key !== 'appearances' && key !== 'rating' && key !== '№') {
          let newValue = Number((i[key] / i.appearances).toFixed(2));
          i[key] = newValue;
        }
      }
    })
    return newArr;
  }

  const obj1 = arr.length === 0 ? arr : Object.values(arr.find((i) => i.name === option.first)).filter((i) => typeof(i) !== 'string');
  const obj2 = arr.length === 0 ? arr : Object.values(arr.find((i) => i.name === option.second)).filter((i) => typeof(i) !== 'string');
  const maxValues = obj1.map((i,index) => {
    return Math.max(i, obj2[index]);
  })

  const data = {
    labels: labels,
    datasets: [
      {
        label: option.first,
        data: obj1.map((i, index) => i / maxValues[index] * 100),
        borderColor: '#c8102e8a',
        backgroundColor: '#c8102e4d',
        pointRadius: 4,
        pointBackgroundColor: "#c8102e8a"
      },
      {
        label: option.second,
        data: obj2.map((i, index) => i / maxValues[index] * 100),
        borderColor: '#c6d0bc85',
        backgroundColor: '#c6d0bc66',
        pointRadius: 4,
        pointBackgroundColor: "#c6d0bc85"
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend:{
        display:false
     },
     datalabels: {
      display: false,
    }

    },
    scales: {
      r: {
        grid: {
          color: '#353535',
          circular: true
        },
        pointLabels: {
          font: {
            size: labelSize
          },
        },
        ticks: {
          display: false,
          stepSize: 20
        }
      }
    },
    elements: {
      line: {
        borderWidth: 1
      }
    },
    layout: {
      padding: 0
    },

  };


  return (
    <div className="radar">

      <h2>Статистика АПЛ 2022/2023. В среднем за матч.</h2>
      <div className="radar__container">

        <div className="radar__select-wrapper">
          <select name='first' className="select" defaultValue="Mohamed Salah" onChange={selectOption}>
            {players.sort().map((i) => {
              return (
                <option value={i} key={i}>{i}</option>
              )
            })}
          </select>
        </div>

        <div className="radar__select-wrapper radar__select-wrapper_second">
          <select name='second' className="select" defaultValue='Diogo Jota' onChange={selectOption}>
            {players.sort().map((i) => {
              return (
                <option value={i} key={i}>{i}</option>
              )
            })}
          </select>
        </div>

      </div>

      <Radar data={data} options={options}/>
    </div>
  )
}

export default RadarChart;
