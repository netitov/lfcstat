
function PlayersTableRow(props) {


  return (
    <tr className="table__row">
      <td className="table__data">{props.position}</td>
      <td className="table__data table__data_non-align">{props.player}</td>
      <td>{props.appearances}</td>
      <td>{props.goals}</td>
      <td>{props.assists}</td>
      <td>{props.goalsAssistsSum}</td>
      <td>{props.bigChancesCreated}</td>
      <td>{props.keyPasses}</td>
      <td>{props.tackles}</td>
      <td>{props.interceptions}</td>
    </tr>
  );
}

export default PlayersTableRow;
