import React from 'react';
import dayjs from 'dayjs';
import Api from '../../utils/Api';
import { SERVER_API } from '../../utils/config';
import Header from '../Header/Header';
import Main from '../Main/Main';

let tableHeaderSet = new Set();

function App() {

  const [standings, setStandings] = React.useState([]);
  const [events, setEvents] = React.useState([]);
  const [nearEvents, setNearEvents] = React.useState([]);

  const api = new Api ({
    baseUrl: SERVER_API,
  });

  React.useEffect(() => {
    Promise.all([
      api.getStandings(),
      api.getEvents()
    ])
    .then(([st, evts]) => {
      localStorage.setItem('standings', JSON.stringify(st));
      const lsData = JSON.parse(localStorage.getItem('standings'));
      const result = [...lsData].sort((a,b) => a.position - b.position);
      setStandings(result);
      lsData.forEach((i) => { //шапка таблицы из local storage
        Object.keys(i).forEach((k) => {
          tableHeaderSet.add(k);
        })
      });
      localStorage.setItem('events', JSON.stringify(evts));
      const eventsData = JSON.parse(localStorage.getItem('events'));
      const sorteredEvents = [...eventsData].sort((a,b) => new Date(a.startAt) - new Date(b.startAt));
      setNearEvents(sorteredEvents.filter((i) => i.startAt > dayjs().format()).slice(0, 1));
      //setNearEvents(eventsData);
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
          events={nearEvents}
        />

      </div>
    </div>
  );
}

export default App;
