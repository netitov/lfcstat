import React from 'react';
import LeagueTableRow from './LeagueTableRow';
import LeagueTableHeader from './LeagueTableHeader';


function LeagueTable(props) {

  return (
    <div className="standings">
      <div className="standings__headingContainer">
        <h2 className="standings__heading">Таблица АПЛ</h2>
        <a href="#" className="standings__link">Подробнее</a>
      </div>
      <table className="standings__table table">
        <thead>
          <LeagueTableHeader />
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

