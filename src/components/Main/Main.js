import React from 'react';
import LeagueTable from '../LeagueTable/LeagueTable';
import Events from '../Events/Events';
import Navigation from '../Navigation/Navigation';
import NewsList from '../NewsList/NewsList';
import Promo from '../Promo/Promo';

function Main(props) {
  return (
    <main className="main">
      <Promo data={props.data} />
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
      <NewsList
        news={props.news}
      />
    </main>
  );
}

export default Main;
