import React from 'react';

import LeagueTable from '../LeagueTable/LeagueTable';

function Main(props) {
  return (
    <main className="main">
      <div className="main__container">
        <h1 className="main__heading"></h1>
        <p className="main__description"></p>
        <LeagueTable
          onThClick={props.onThClick}
          /* activeColumns={props.activeColumns} */
          thSet={props.thSet}
          standings={props.standings}
        />
        </div>
    </main>
  );
}

export default Main;
