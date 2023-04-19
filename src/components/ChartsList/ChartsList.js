import React, { useState } from 'react';
import Chart from '../Chart/Chart';
import Switcher from '../Switcher/Switcher';
import { tsOptions, teamCharts } from '../../utils/constants';

function ChartsList(props) {

  const [activeBtn, setActiveBtn] = useState('Premier League');
  const filteredStats = props.teamCharts.filter((i) => i.tournament === activeBtn);

  function handleSwitch(data) {
    setActiveBtn(data);
  }

  return (
    <div className="chart-list">
      <Switcher
        handleSwitch={handleSwitch}
      />
      <div className="chart-list__container">
        {teamCharts.map((i) => {
          return (
            <Chart
              labels={filteredStats.map((i) => i.year)}
              tsOptions={tsOptions}
              type={i.type}
              typeRu={i.typeRu}
              initOption={i.initOpt}
              key={i.type}
              teamCharts={filteredStats}
            />
          )
        })}
      </div>
    </div>
  )
}

export default ChartsList;
