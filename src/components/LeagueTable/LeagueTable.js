import React from 'react';
import LeagueTableRow from './LeagueTableRow';
import LeagueTableHeader from './LeagueTableHeader';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';


function LeagueTable(props) {

  //hide colums from main page
  const location = useLocation().pathname;
  const linkClass = location === '/standings' ? ' standings__link_inactive' : '';
  const tableClass = location === '/standings' ? ' standings_whole' : '';

  return (
    <div className={`standings${tableClass}`}>
      <div className="standings__heading-container">
        <h2 className="standings__heading">Таблица АПЛ</h2>
        <Link to="/standings" className={`standings__link${linkClass}`}>Подробнее</Link>
      </div>
      <table className="standings__table table">
        <thead>
          <tr className="table__head-row">
            {props.standingsHeader.map((i) => {
              return (
                <LeagueTableHeader
                  title={i[1]}
                  name={i[0]}
                  key={i[0]}
                />
              )
            })}

          </tr>
        </thead>
        <tbody>
          {props.standings.map((i) => {
            return (
              <LeagueTableRow
                key={i._id}
                position={i.position}
                logo={i.logo}
                teamName={i.teamName}
                matches={i.matches}
                wins={i.wins}
                draws={i.draws}
                losses={i.losses}
                goalsSc={i.goalsSc}
                goalsCon={i.goalsCon}
                scoreDif={i.scoreDif}
                points={i.points}
              />
            )
          })}
        </tbody>
      </table>
    </div>
  );
}

export default LeagueTable;

