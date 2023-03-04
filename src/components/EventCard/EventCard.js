import React from 'react';
import dayjs from 'dayjs';

function EventCard(props) {

  return (
    <div className="eventCard">
      <div className="eventCard__teamContainer">
        <p className="eventCard__team">{props.homeTeamName}</p>
        <img src={props.homeTeamLogo} alt="team" className="eventCard__logo"></img>
      </div>
      <div className="eventCard__dateContainer">
        <p className="eventCard__time">{dayjs(props.startAt).format('hh:mm')}</p>
        <p className="eventCard__date">{dayjs(props.startAt).format('DD.MM')}</p>
      </div>
      <div className="eventCard__teamContainer">
        <p className="eventCard__team">{props.awayTeamName}</p>
        <img src={props.awayTeamLogo} alt="team" className="eventCard__logo"></img>
      </div>
      <p className="eventCard__challenge">{props.challenge}</p>
    </div>
  );
}

export default EventCard;

