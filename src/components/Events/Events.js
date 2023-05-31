/* eslint no-underscore-dangle: 0 */
import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import EventCard from '../EventCard/EventCard';

function Events(props) {
  const handleLinkClick = useCallback(() => {
    props.filterEvents(props.type);
  }, [props.events]);

  return (
    <div className={`events${props.events.length === 0 ? ' events_inactive' : ''}`}>
      <div className="events__container">
        <h2 className="events__heading">{props.tableTitle}</h2>
        <Link className="events__link" to={props.route} onClick={handleLinkClick}>Подробнее</Link>
      </div>

      {props.events.map((i) => (
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
      ))}
    </div>
  );
}

export default Events;
