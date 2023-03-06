import React from 'react';

import LeagueTable from '../LeagueTable/LeagueTable';
import Events from '../Events/Events';

function Main(props) {
  return (
    <main className="main">
        <LeagueTable
          onThClick={props.onThClick}
          /* activeColumns={props.activeColumns} */
          standings={props.standings}
          stHeaderShort={props.stHeaderShort}
        />
        <Events
          events={props.events}
        />
    </main>
  );
}

export default Main;
