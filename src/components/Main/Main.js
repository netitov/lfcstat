import React from 'react';

import LeagueTable from '../LeagueTable/LeagueTable';
import Events from '../Events/Events';

function Main(props) {
  return (
    <main className="main">
      <LeagueTable
        onThClick={props.onThClick}
        standings={props.standings}
        standingsHeader={props.standingsHeader}
      />
      <Events
        events={props.events}
      />
    </main>
  );
}

export default Main;
