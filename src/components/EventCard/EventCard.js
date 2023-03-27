import React from 'react';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import { mainTeam } from '../../utils/constants';
dayjs.extend(utc);
dayjs.extend(timezone);

function EventCard(props) {

  const timeZone = dayjs.tz.guess();//user timezone
  const gameTime = dayjs.utc(props.startAt).tz(timeZone).format('HH:mm');//game time in user timezone
  const gameDate = dayjs.utc(props.startAt).tz(timeZone).format('DD.MM');//game date in user timezone
  const resultClass = (props.status !== 'finished') ? ' _inactive' :
    (props.awayScore === props.homeScore) ? ' _draw' :
    (props.awayScore > props.homeScore && props.awayTeamName === mainTeam) ? ' _win' :
    (props.awayScore < props.homeScore && props.homeTeamName === mainTeam) ? ' _win' : ' _lose'
  ;
  const dateClass = (props.status === 'finished') ? ' _inactive' : '';
  const finishDateClass = (props.status !== 'finished') ? ' _inactive' : '';


  return (
    <div className="event-card">
      <div className="event-card__team-container event-card__team-container_home">
        <p className="event-card__team event-card__team_home">{props.homeTeamName}</p>
        <img src={props.homeTeamLogo} alt="team" className="event-card__logo"></img>
      </div>
      <div className={`event-card__date-container${dateClass}`}>
        <p className="event-card__time">{gameTime}</p>
        <p className="event-card__date">{gameDate}</p>
      </div>
      <div className={`event-card__result-сontainer${resultClass}`}>
        <p className="">{props.homeScore}</p>
        <span>-</span>
        <p className="">{props.awayScore}</p>

      </div>
      <div className="event-card__team-container event-card__team-container_away">
        <img src={props.awayTeamLogo} alt="team" className="event-card__logo"></img>
        <p className="event-card__team">{props.awayTeamName}</p>
      </div>

      <p className="event-card__challenge">{props.challenge}</p>
      <p className={`event-card__finish-date${finishDateClass}`}>{gameDate}</p>
    </div>
  );
}

export default EventCard;

