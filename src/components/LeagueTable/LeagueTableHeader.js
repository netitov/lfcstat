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

 /*  const headerTitle = (props.value === 'position') ? '№' :
    (props.value === 'teamName') ? 'Команда' :
    (props.value === 'matches') ? 'И' :
    (props.value === 'wins') ? 'В' :
    (props.value === 'draws') ? 'Н' :
    (props.value === 'losses') ? 'П' :
    (props.value === 'goalsSc') ? 'ЗМ' :
    (props.value === 'goalsCon') ? 'ПМ' :
    (props.value === 'scoreDif') ? 'РМ' :
    (props.value === 'points') ? 'О' :
    'other'; */

  /* <tr className="table__head-row">
      <th onClick={handleSorting} data-title="position" className={cellClass}>№</th>
      <th onClick={handleSorting} data-title="teamName" colSpan="2" className="table__head-cell_wide">Команда</th>
      <th onClick={handleSorting} data-title="matches" className={cellClass}>И</th>
      <th onClick={handleSorting} data-title="wins" className={cellClass}>В</th>
      <th onClick={handleSorting} data-title="draws" className={cellClass}>Н</th>
      <th onClick={handleSorting} data-title="losses" className={cellClass}>П</th>
      <th onClick={handleSorting} data-title="goalsSc" className={cellClass}>ЗМ</th>
      <th onClick={handleSorting} data-title="goalsCon" className={cellClass}>ПМ</th>
      <th onClick={handleSorting} data-title="scoreDif" className={cellClass}>РМ</th>
      <th onClick={handleSorting} data-title="points" className={cellClass}>О</th>
    </tr> */

  return (
    <th onClick={handleSorting} data-title={props.title}
      colSpan={props.name === 'Команда' ? 2 : 1}>{props.name}
    </th>
  );
}

export default LeagueTableHeader;
