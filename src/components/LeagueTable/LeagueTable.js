import React from 'react';
import LeagueTableRow from './LeagueTableRow';
import LeagueTableHeader from './LeagueTableHeader';


function LeagueTable(props) {


  return (
    <table className="table">
      <thead>
        <tr className="table__head-row">
          {Array.from(props.thSet).splice(1, 12).map((i) => {
            return (
              <LeagueTableHeader
                key={i}
                value={i}
                onThClick={props.onThClick}
                thSet={Array.from(props.thSet)}
                /* activeColumns={props.activeColumns} */
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

