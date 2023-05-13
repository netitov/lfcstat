import React from 'react';

function PlayersTableRow(props) {
  function setSortedColumn(data) {
    if (data === props.sorted) return ' table__data_active';
    return '';
  }

  return (
    <tr className="table__row">
      <td className="table__data">{props.position}</td>
      <td className="table__data table__data_non-align">{props.player}</td>
      <td className={setSortedColumn('appearances')}>{props.appearances}</td>
      <td className={setSortedColumn('goals')}>{props.goals}</td>
      <td className={setSortedColumn('assists')}>{props.assists}</td>
      <td className={setSortedColumn('goalsAssistsSum')}>{props.goalsAssistsSum}</td>
      <td className={setSortedColumn('bigChancesCreated')}>{props.bigChancesCreated}</td>
      <td className={setSortedColumn('keyPasses')}>{props.keyPasses}</td>
      <td className={setSortedColumn('tackles')}>{props.tackles}</td>
      <td className={setSortedColumn('interceptions')}>{props.interceptions}</td>
      <td className={setSortedColumn('rating')}>{props.rating}</td>
    </tr>
  );
}

export default PlayersTableRow;
