import React from 'react';

import LeagueTable from '../LeagueTable/LeagueTable';
import Events from '../Events/Events';

function Main(props) {
  return (
    <main className="main">
      {/* finished events */}
      <Events
        events={props.finishedEvents}
        tableTitle="Последние матчи"
      />
      <LeagueTable
        onThClick={props.onThClick}
        standings={props.standings}
        standingsHeader={props.standingsHeader}
      />
      {/* future events */}
      <Events
        events={props.events}
        tableTitle="Расписание"
      />
    </main>
  );
}

export default Main;
