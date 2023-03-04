import React from 'react';

import LeagueTable from '../LeagueTable/LeagueTable';
import Events from '../Events/Events';

function Main(props) {
  return (
    <main className="main">
        <LeagueTable
          onThClick={props.onThClick}
          /* activeColumns={props.activeColumns} */
          thSet={props.thSet}
          standings={props.standings}
        />
        <Events
          events={props.events}
        />
    </main>
  );
}

export default Main;
