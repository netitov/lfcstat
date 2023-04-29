import PlayersTableHeader from './PlayersTableHeader';
import PlayersTableRow from './PlayersTableRow';
import { playersTableData, statsGameFilter } from '../../utils/constants';
import Switcher from '../Switcher/Switcher';

function PlayersTable(props) {

  return (
    <div className="table-container">
      <Switcher
        handleSwitch={props.handleSwitch}
        btns={statsGameFilter}
        activeBtn={props.activeBtn}
      />
      <table className="table players-table">
        <thead>
          <tr className="table__head-row players-table__head-row">
            {playersTableData.filter((i) => i.include).map((i) => {
              return (
                <PlayersTableHeader
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
          {props.dataArr.map((i) => {
            return (
              <PlayersTableRow
                key={i.name}
                position={props.dataArr.indexOf(i) + 1}
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
