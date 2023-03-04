import React from 'react';
import EventCard from '../EventCard/EventCard';

function Events(props) {


  return (
    <div className="events">
      {props.events.map((i) => {
        return (
          <EventCard
            homeTeamName={i.homeTeamName}
            homeTeamLogo={i.homeTeamLogo}
            startAt={i.startAt}
            awayTeamName={i.awayTeamName}
            awayTeamLogo={i.awayTeamLogo}
            key={i._id}
          />
        )
      })}
    </div>
  );
}

export default Events;

