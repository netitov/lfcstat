import React from 'react';
import LeagueTable from '../LeagueTable/LeagueTable';
import Events from '../Events/Events';
import Navigation from '../Navigation/Navigation';

function Main(props) {
  return (
    <main className="main">
      <div className="main__container">
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
      </div>
      <Navigation />
    </main>
  );
}

export default Main;
