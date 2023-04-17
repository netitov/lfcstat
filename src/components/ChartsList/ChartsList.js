import React from 'react';
import Chart from '../Chart/Chart';

function ChartsList(props) {
  return (
    <div className="chart-list">
      <Chart
        data={props.data}
      />
    </div>
  )
}

export default ChartsList;
