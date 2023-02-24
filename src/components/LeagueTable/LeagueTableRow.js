import React from 'react';

function LeagueTableRow(props) {

  return (
    <tr className="table__row">
      <td>{props.position}</td>
      <td>{props.teamName}</td>
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
