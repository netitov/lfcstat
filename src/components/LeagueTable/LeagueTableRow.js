import React from 'react';
import { useLocation } from 'react-router-dom';
import { mainTeam } from '../../utils/constants';

function LeagueTableRow(props) {

  //accent position data
  const positionClass = props.position < 5 ? 'table__data table__data_ucl' :
    props.position === 5 ? 'table__data table__data_el' :
    props.position > 17 ? 'table__data table__data_rlg' :
    'table__data'
  ;

  //hide colums from main page
  const location = useLocation().pathname;
  const activityClass = location === '/' ? ' table__data_inactive' : '';

  return (
    <tr className='table__row'
      style={props.teamName === mainTeam ? {background: "#535353"} : {background: "auto"}}
    >
      <td className={positionClass}>{props.position}</td>
      <td>
        <img src={props.logo} alt="team" className="table__logo"></img>
      </td>
      <td className="table__data table__data_non-align">{props.teamName}</td>
      <td>{props.matches}</td>
      <td className={activityClass}>{props.wins}</td>
      <td className={activityClass}>{props.draws}</td>
      <td className={activityClass}>{props.losses}</td>
      <td className={activityClass}>{props.goalsSc}</td>
      <td className={activityClass}>{props.goalsCon}</td>
      <td>{props.scoreDif}</td>
      <td>{props.points}</td>
    </tr>
  );
}

export default LeagueTableRow;
