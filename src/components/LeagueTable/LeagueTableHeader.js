
function LeagueTableHeader(props) {


  return (
    <th title={props.title} data-id={props.id} colSpan={props.name === 'Команда' ? 2 : 1}
      className={`table__header-cell `}>{props.name}
    </th>
  );
}

export default LeagueTableHeader;
