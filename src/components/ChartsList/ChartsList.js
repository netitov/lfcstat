import React, { useState } from 'react';
import Chart from '../Chart/Chart';
import Switcher from '../Switcher/Switcher';
import { tsOptions, teamCharts, tournaments } from '../../utils/constants';

function ChartsList(props) {

  const [activeBtn, setActiveBtn] = useState(tournaments.find((i) => i.default).nameRu);
  const filteredStats = props.teamCharts.filter((i) => i.tournament === activeBtn);

  function handleSwitch(data) {
    setActiveBtn(data);
  }

  return (
    <div className="chart-list">
      <Switcher
        handleSwitch={handleSwitch}
        btns={tournaments}
        activeBtn={activeBtn}
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
