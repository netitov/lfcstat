import TableHeader from '../LeagueTable/TableHeader';
import PlayersTableRow from './PlayersTableRow';
import { playersTableData } from '../../utils/constants';

function PlayersTable(props) {

  //console.log(props.data)

  return (
    <div className="">
      <table className="table players-table">
        <thead>
          <tr className="table__head-row players-table__head-row">
            {playersTableData.filter((i) => i.include).map((i) => {
              return (
                <TableHeader
                  name={i.short}
                  key={i.name}
                />
              )
            })}

          </tr>
        </thead>
        <tbody>
          {props.data.map((i) => {
            return (
              <PlayersTableRow
                key={i.name}
                position={props.data.indexOf(i) + 1}
                player={i.name || 0}
                appearances={i.appearances || 0}
                goals={i.goals || 0}
                assists={i.assists || 0}
                goalsAssistsSum={i.goalsAssistsSum || 0}
                bigChancesCreated={i.bigChancesCreated || 0}
                keyPasses={i.keyPasses || 0}
                tackles={i.tackles || 0}
                interceptions={i.interceptions || 0}
              />
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default PlayersTable;
