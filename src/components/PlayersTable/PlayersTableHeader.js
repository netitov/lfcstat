
function PlayersTableHeader(props) {

  const cellClass = props.sorted === props.id ? ' players-table__header-cell_active' : '';

  function handleSorting(e) {
    props.onSortClick(e.target.dataset.id);
  }

  return (
    <th onClick={handleSorting} title={props.title} data-id={props.id}
      className={`table__header-cell players-table__header-cell${cellClass}`}>{props.name}
    </th>
  );
}

export default PlayersTableHeader;
