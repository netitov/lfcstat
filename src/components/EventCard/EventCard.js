import React from 'react';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
dayjs.extend(utc);
dayjs.extend(timezone);

function EventCard(props) {

  const timeZone = dayjs.tz.guess();//user timezone
  const gameTime = dayjs.utc(props.startAt).tz(timeZone).format('HH:mm');//game time in user timezone
  const gameDate = dayjs.utc(props.startAt).tz(timeZone).format('DD.MM');//game date in user timezone

  return (
    <div className="eventCard">
      <div className="eventCard__teamContainer eventCard__teamContainer_home">
        <p className="eventCard__team eventCard__team_home">{props.homeTeamName}</p>
        <img src={props.homeTeamLogo} alt="team" className="eventCard__logo"></img>
      </div>
      <div className="eventCard__dateContainer">
        <p className="eventCard__time">{gameTime}</p>
        <p className="eventCard__date">{gameDate}</p>
      </div>
      <div className="eventCard__teamContainer eventCard__teamContainer_away">
        <img src={props.awayTeamLogo} alt="team" className="eventCard__logo"></img>
        <p className="eventCard__team">{props.awayTeamName}</p>
      </div>
      <p className="eventCard__challenge">{props.challenge}</p>
    </div>
  );
}

export default EventCard;

