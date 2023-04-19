import React from 'react';
import Chart from '../Chart/Chart';
import { tsOptions, teamCharts } from '../../utils/constants';

function ChartsList(props) {



  return (
    <div className="chart-list">
      {teamCharts.map((i) => {
        return (
          <Chart
            labels={props.labels}
            tsOptions={tsOptions}
            type={i.type}
            typeRu={i.typeRu}
            initOption={i.initOpt}
            key={i.type}
            teamCharts={props.teamCharts}
          />
        )
      })}
    </div>
  )
}

export default ChartsList;
