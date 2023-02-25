import React from 'react';
import LeagueTableRow from './LeagueTableRow';
import LeagueTableHeader from './LeagueTableHeader';


function LeagueTable(props) {

  return (
    <table className="table">
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
  );
}

export default LeagueTable;

