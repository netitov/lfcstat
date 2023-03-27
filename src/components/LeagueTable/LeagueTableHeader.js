import React from 'react';
//import sortingLogo from '../../images/icons8-сортировка-по-возрастанию-48.png';


function LeagueTableHeader(props) {

  /* const isLiked = props.activeColumns.some(i => i === props.value); */
  /* const sortLogoClass = isLiked ? 'table__sort-logo table__sort-logo_active' : 'table__sort-logo'; */

  function handleSorting(e) {
    if (e.target.dataset.title !== 'date') {
      props.onThClick(e.target);
    }
  }

  return (
    <th onClick={handleSorting} data-title={props.title}
      colSpan={props.name === 'Команда' ? 2 : 1}>{props.name}
    </th>
  );
}

export default LeagueTableHeader;
