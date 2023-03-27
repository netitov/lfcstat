import React from 'react';
import { Route, Routes } from 'react-router-dom';
import dayjs from 'dayjs';
import Api from '../../utils/Api';
import { SERVER_API } from '../../utils/config';
import { standingsHeader, standingsHeaderShort, gamesToShow, standingsLimit, mainTeam } from '../../utils/constants';
import Header from '../Header/Header';
import Main from '../Main/Main';
import LeagueTable from '../LeagueTable/LeagueTable';

function App() {

  const [standings, setStandings] = React.useState([]);
  const [shortStandings, setShortStandings] = React.useState([]);
  const [nearEvents, setNearEvents] = React.useState([]);

  const api = new Api ({
    baseUrl: SERVER_API,
  });

  function findPosition(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].teamName === mainTeam) {
        return arr[i].position;
      }
    }
  }

  React.useEffect(() => {
    Promise.all([
      api.getStandings(),
      api.getEvents()
    ])
    .then(([st, evts]) => {
      //whole standings data
      localStorage.setItem('standings', JSON.stringify(st));
      const sortedStandings = st.sort((a,b) => a.position - b.position);
      setStandings(sortedStandings);

      //short standings data
      const mainTeamPos = findPosition(sortedStandings);
      let shortStArr = [];
      const teamAmount = Math.floor(standingsLimit / 2);
      const incr = (mainTeamPos + teamAmount) < sortedStandings.length ? teamAmount : (sortedStandings.length - mainTeamPos);
      const decr = (mainTeamPos - teamAmount) > 1 ? teamAmount : (mainTeamPos - 1);

      sortedStandings.forEach((i) => {
        if (i.teamName === mainTeam) {
          shortStArr.push(i);
        }
        if (i.position > mainTeamPos && i.position <= (mainTeamPos + (incr + (teamAmount - decr)))) {
          shortStArr.push(i);
        }
        if (i.position < mainTeamPos && i.position >= (mainTeamPos - (decr + (teamAmount - incr)))) {
          shortStArr.push(i);
        }
      })
      setShortStandings(shortStArr);

      //events
      localStorage.setItem('events', JSON.stringify(evts));
      const sorteredEvents = evts.sort((a,b) => dayjs(a.startAt) - dayjs(b.startAt));
      setNearEvents(sorteredEvents.filter((i) => dayjs.utc(i.startAt).format() >= dayjs.utc().format()).slice(0, gamesToShow));
    })
    .catch((err) => {
      console.log(err);
    })
  }, [])

  return (
    <div className="page">
      <div className="page__container">
        <Header />
        <Routes>

          <Route
            path="/"
            element={
              <Main
                standings={shortStandings}
                events={nearEvents}
                standingsHeader={standingsHeaderShort}
              />
            }
          />

          <Route
            path="/standings"
            element={
              <LeagueTable
                standings={standings}
                standingsHeader={standingsHeader}
              />
            }
          />

        </Routes>

      </div>
    </div>
  );
}

export default App;
