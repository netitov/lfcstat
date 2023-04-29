import { useState, useEffect } from 'react';
import TableHeader from '../LeagueTable/TableHeader';
import PlayersTableRow from './PlayersTableRow';
import { playersTableData, statsGameFilter } from '../../utils/constants';
import Switcher from '../Switcher/Switcher';

function PlayersTable(props) {

  /* const [activeBtn, setActiveBtn] = useState(statsGameFilter.find((i) => i.default).nameRu);
  const [dataArr, setDataArr] = useState([]);

  useEffect(() => {
    setDataArr(props.data);
  }, [props.data])

  function handleSwitch(btn) {
    setActiveBtn(btn);
    testino(btn);
  }

  function testino(btn) {
    if(btn === 'за матч') {

      let newArr = [];

      props.data.forEach((i) => {
        newArr.push({...i})
      })

      newArr.forEach((i) => {
        for (let key in i) {
          if (key !== 'name' && key !== 'appearances' && key !== 'rating' && key !== '№') {
            let newValue = Number((i[key] / i.appearances).toFixed(2));
            i[key] = newValue
          }
        }
      })
      setDataArr(newArr);
    } else {
      setDataArr(props.data);
    }

  } */

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
