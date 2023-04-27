import React from 'react';

function TableHeader(props) {

  const cellClass = props.sorted === props.id ? ' table__header-cell_active' : '';

  function handleSorting(e) {
    props.onSortClick(e.target.dataset.id);
  }

  return (
    <th onClick={handleSorting} title={props.title} data-id={props.id} colSpan={props.name === 'Команда' ? 2 : 1}
      className={`table__header-cell${cellClass}`}>{props.name}
    </th>
  );
}

export default TableHeader;
