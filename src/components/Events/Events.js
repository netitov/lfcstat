import React from 'react';
import { Link } from 'react-router-dom';
import EventCard from '../EventCard/EventCard';

function Events(props) {


  return (
    <div className="events">
      <div className="events__container">
        <h2 className="events__heading">{props.tableTitle}</h2>
        <a className="events__link" href="#">Подробнее</a>
      </div>

      {props.events.map((i) => {
        return (
          <EventCard
            homeTeamName={i.homeTeamName}
            homeTeamLogo={i.homeTeamLogo}
            startAt={i.startAt}
            awayTeamName={i.awayTeamName}
            awayTeamLogo={i.awayTeamLogo}
            challenge={i.challenge}
            homeScore={i.homeScore}
            awayScore={i.awayScore}
            key={i._id}
            status={i.status}
          />
        )
      })}
    </div>
  );
}

export default Events;

