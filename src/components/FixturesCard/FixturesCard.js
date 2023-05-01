import React from 'react'
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import { mainTeam } from '../../utils/constants';
import PremierLeague from '../../images/pngegg1.png';
import Ucl from '../../images/ucl2.png';
import Calendar from '../../images/calendar.png';
import FaCupLogo from '../../images/FaCupLogo.png';
import EflLogo from '../../images/EflLogo.png';
import Ball from '../../images/ball.png';

dayjs.extend(utc);
dayjs.extend(timezone);

function FixturesCard(props) {
  const timeZone = dayjs.tz.guess();//user timezone
  const gameTime = dayjs.utc(props.startAt).tz(timeZone).format('HH:mm');//game time in user timezone
  const gameDate = dayjs.utc(props.startAt).tz(timeZone).format('DD.MM.YY');//game date in user timezone
  const resultClass = (props.status !== 'finished') ? ' _inactive' :
    (props.awayScore === props.homeScore) ? ' _draw' :
    (props.awayScore > props.homeScore && props.awayTeamName === mainTeam) ? ' _win' :
    (props.awayScore < props.homeScore && props.homeTeamName === mainTeam) ? ' _win' : ' _lose'
  ;
  const dateClass = (props.status === 'finished') ? ' _inactive' : '';
  const leagueLogo = (props.challenge === 'Premier League') ? PremierLeague :
    (props.challenge === 'UEFA Champions League') ? Ucl :
    (props.challenge === 'FA Cup') ? FaCupLogo :
    (props.challenge === 'EFL Cup') ? EflLogo : Ball
  ;

  return (
    <li className="fixtures-card">

      <div className="fixtures-card__date-container">
        <img src={Calendar} className="fixtures-card__calendar-logo" alt="calendar"></img>
        <p className={`fixtures-card__finish-date`}>{gameDate}</p>
      </div>

      <div className="fixtures-card__container">
        <div className="fixtures-card__team-container fixtures-card__team-container_home">
          <p className="fixtures-card__team fixtures-card__team_home">{props.homeTeamName}</p>
          <img src={props.homeTeamLogo} alt="team" className="fixtures-card__logo"></img>
        </div>
        <div className={`fixtures-card__time-container${dateClass}`}>
          <p className="fixtures-card__time">{gameTime}</p>
          {/* <p className="fixtures-card__date">{gameDate}</p> */}
        </div>
        <div className={`fixtures-card__result-сontainer${resultClass}`}>
          <p className="">{props.homeScore}</p>
          <span>-</span>
          <p className="">{props.awayScore}</p>

        </div>
        <div className="fixtures-card__team-container fixtures-card__team-container_away">
          <img src={props.awayTeamLogo} alt="team" className="fixtures-card__logo"></img>
          <p className="fixtures-card__team">{props.awayTeamName}</p>
        </div>
      </div>

      <div className="fixtures-card__challenge-container">
        <img src={leagueLogo} className="fixtures-card__challenge-logo" alt={props.challenge}></img>
        <p className="fixtures-card__challenge">{props.challenge}</p>
      </div>

    </li>
  )
}

export default FixturesCard;
