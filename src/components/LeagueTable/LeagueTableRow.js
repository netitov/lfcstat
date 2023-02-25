import React from 'react';

function LeagueTableRow(props) {

  const rowClass = props.teamName === 'Liverpool' ? 'table__row table__row_main' : 'table__row';
  const positionClass = props.position < 5 ? 'table__data table__data_ucl' :
    props.position === 5 ? 'table__data table__data_el' :
    props.position > 17 ? 'table__data table__data_rlg' :
    'table__data';

  return (
    <tr className={rowClass}>
      <td className={positionClass}>{props.position}</td>
      <td>
        <img src={props.logo} alt="team" className="table__logo"></img>
      </td>
      <td className="table__data table__data_non-align">{props.teamName}</td>
      <td>{props.matches}</td>
      <td>{props.wins}</td>
      <td>{props.draws}</td>
      <td>{props.losses}</td>
      <td>{props.goalsSc}</td>
      <td>{props.goalsCon}</td>
      <td>{props.scoreDif}</td>
      <td>{props.points}</td>
    </tr>
  );
}

export default LeagueTableRow;
