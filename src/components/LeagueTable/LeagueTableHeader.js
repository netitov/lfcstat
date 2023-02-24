import React from 'react';
import sortingLogo from '../../images/icons8-сортировка-по-возрастанию-48.png';

function LeagueTableHeader(props) {

  /* const isLiked = props.activeColumns.some(i => i === props.value); */
  /* const sortLogoClass = isLiked ? 'table__sort-logo table__sort-logo_active' : 'table__sort-logo'; */

  function handleSorting(e) {
    if (e.target.dataset.title !== 'date') {
      props.onThClick(e.target);
    }
  }

  const headerTitle = (props.value === 'position') ? '№' :
    (props.value === 'teamName') ? 'Команда' :
    (props.value === 'matches') ? 'И' :
    (props.value === 'wins') ? 'В' :
    (props.value === 'draws') ? 'Н' :
    (props.value === 'losses') ? 'П' :
    (props.value === 'goalsSc') ? 'ЗМ' :
    (props.value === 'goalsCon') ? 'ПМ' :
    (props.value === 'scoreDif') ? 'РМ' :
    (props.value === 'points') ? 'О' :
    'Другое';

  return (
      <th onClick={handleSorting} data-title={props.value}>
        {headerTitle}
        {/* <img className={sortLogoClass} src={sortingLogo} alt="sorting"></img> */}
      </th>
  );
}

export default LeagueTableHeader;
