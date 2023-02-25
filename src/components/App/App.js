import { type } from '@testing-library/user-event/dist/type';
import React from 'react';
import Api from '../../utils/Api';
import { SERVER_API } from '../../utils/config';
import Header from '../Header/Header';
import Main from '../Main/Main';


let tableHeaderSet = new Set();



function App() {

  const [standings, setStandings] = React.useState([]);

  const api = new Api ({
    baseUrl: SERVER_API,
  });

  React.useEffect(() => {
    Promise.all([
      api.getStandings()
    ])
    .then((st) => {
      localStorage.setItem('standings', JSON.stringify(st[0]));
      const lsData = JSON.parse(localStorage.getItem('standings'));
      const result = [...lsData].sort((a,b) => a.position - b.position)
      setStandings(result);
      lsData.forEach((i) => { //шапка таблицы из local storage
        Object.keys(i).forEach((k) => {
          tableHeaderSet.add(k);
        })
      })
    })
    .catch((err) => {
      console.log(err);
    })
  }, [])

  return (
    <div className="page">
      <div className="page__container">
        <Header />
        <Main
          standings={standings}
          thSet={tableHeaderSet}
        />
      </div>
    </div>
  );
}

export default App;
