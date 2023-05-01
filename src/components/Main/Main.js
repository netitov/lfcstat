import React from 'react';
import LeagueTable from '../LeagueTable/LeagueTable';
import Events from '../Events/Events';
import Navigation from '../Navigation/Navigation';
import NewsList from '../NewsList/NewsList';
import Promo from '../Promo/Promo';
import Trophies from '../Trophies/Trophies';
import Videos from '../Videos/Videos';

function Main(props) {
  return (
    <main className="main">
      <Promo data={props.data} />
      <div className="main__container">
        {/* finished events */}
        <Events
          events={props.finishedEvents}
          tableTitle="Последние матчи"
          route="/fixtures"
          type="результаты"
          filterEvents={props.filterEvents}
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
          route="/fixtures"
          type="расписание"
          filterEvents={props.filterEvents}
        />

      </div>
      <Navigation />
      <NewsList
        news={props.news}
      />
      <Videos videos={props.videos}/>
      <Trophies />
    </main>
  );
}

export default Main;
