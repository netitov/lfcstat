import TableHeader from '../LeagueTable/TableHeader';
import PlayersTableRow from './PlayersTableRow';
import { playersTableData } from '../../utils/constants';

function PlayersTable(props) {

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
                  id={i.name}
                  title={i.nameRu}
                  onSortClick={props.sortTable}
                  sorted={props.sorted}
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
                player={i.name}
                appearances={i.appearances}
                goals={i.goals}
                assists={i.assists}
                goalsAssistsSum={i.goalsAssistsSum}
                bigChancesCreated={i.bigChancesCreated}
                keyPasses={i.keyPasses}
                tackles={i.tackles}
                interceptions={i.interceptions}
                rating={i.rating.toFixed(1)}
                sorted={props.sorted}
              />
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default PlayersTable;
