import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import dayjs from 'dayjs';
import Api from '../../utils/Api';
import { SERVER_API } from '../../utils/config';
import { standingsHeader, standingsHeaderShort, gamesToShow, standingsLimit, mainTeam } from '../../utils/constants';
import Header from '../Header/Header';
import Main from '../Main/Main';
import LeagueTable from '../LeagueTable/LeagueTable';
import ChartsList from '../ChartsList/ChartsList';
import Chart from "chart.js/auto";
import { CategoryScale } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import Footer from '../Footer/Footer';
import PlayersTable from '../PlayersTable/PlayersTable';

Chart.register(CategoryScale);
Chart.register(ChartDataLabels);
Chart.defaults.font.family = 'Century Gothic, Arial, Helvetica, Sans-serif';

function App() {

  const [standings, setStandings] = useState([]);
  const [shortStandings, setShortStandings] = useState([]);
  const [nearEvents, setNearEvents] = useState([]);
  const [finishedEvents, setFinishedEvents] = useState([]);
  const [news, setNews] = useState([]);
  const [teamCharts, setTeamCharts] = useState([]);
  const [videos, setVideos] = useState([]);
  const [playerStats, setPlayerStats] = useState([]);
  const [sorted, setSorted] = useState('rating');
  const [order, setOrder] = useState('asc');


  let playerStatsArr = [];
  const initAtOpt = 'goalsScored';

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

  useEffect(() => {
    Promise.all([
      api.getStandings(),
      api.getEvents(),
      api.getNews(),
      api.getTeamStats(),
      api.getVideos(),
      api.getPlayerStats()
    ])
    .then(([st, evts, nws, ts, vd, ps]) => {
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

      //finished events
      const finishedGames = sorteredEvents.filter((i) => i.status === 'finished');
      setFinishedEvents(finishedGames.slice(-gamesToShow));

      //news
      localStorage.setItem('news', JSON.stringify(nws));
      setNews(nws);

      //team stats for charts
      const sortedTs = ts.sort((a, b) => a.year.localeCompare(b.year));
      setTeamCharts(sortedTs);

      //videos
      setVideos(vd.slice(0, 4));

      //player stats: adapt array for mapping
      transfromArray(ps[0].data, playerStatsArr);
      setPlayerStats(playerStatsArr);
    })
    .catch((err) => {
      console.log(err);
    })
  }, [])

  function transfromArray(initArr, newArr) {
    Object.entries(initArr).forEach((arr) => {
      arr[1].forEach((i) => {
        if (!newArr.find((el) => el.name === i.player.name)) {
          newArr.push({ name: i.player.name, appearances: i.statistics.appearances });
        }

        const indexOfItemInArray = newArr.findIndex(q => q.name === i.player.name);
        if (indexOfItemInArray > -1) {
          newArr[indexOfItemInArray] = {...newArr[indexOfItemInArray], [arr[0]]: i.statistics[arr[0]] || 0};
        }

      })
    })
    //add missing keys
    compareObjects(newArr, initArr);
  }

  function compareObjects(arr1, arr2) {
    arr1.forEach((i) => {
      const objKeys = Object.keys(i);
      const allKeys = Object.keys(arr2);
      const missingKeys = allKeys.filter((i) => !objKeys.includes(i));
      missingKeys.forEach((k) => {
        i[k] = 0;
      })
    })
  }

  function sortTable(data) {

    const selectColumn = (a,b) => {

      if (order === 'asc' || sorted !== data) {
        setOrder('dsc');
        if (typeof(playerStats[0][data]) === 'string') {
          return a[data] > b[data] ? 1 : -1;
        } else {
          return b[data] - a[data];
        }
      }

      if (order === 'dsc' || sorted === data) {
        setOrder('asc');
        if (typeof(playerStats[0][data]) === 'string') {
          return b[data] > a[data] ? 1 : -1;
        } else {
          return a[data] - b[data];
        }
      }
    }


    setPlayerStats([...playerStats.sort((a, b) => selectColumn(a,b))]);
    setSorted(data);
  }

  function test() {
    //console.log(teamCharts)
  }

  return (
    <div className="page" onClick={test}>
      <div className="page__container">
        <Header />
        <Routes>

          <Route
            path="/"
            element={
              <Main
                standings={shortStandings}
                events={nearEvents}
                finishedEvents={finishedEvents}
                standingsHeader={standingsHeaderShort}
                news={news}
                data={standings.find((i) => i.teamName === mainTeam)}
                videos={videos}
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

          <Route
            path="/charts"
            element={
              <ChartsList
                initOption={initAtOpt}
                teamCharts={teamCharts}
              />
            }
          />

          <Route
            path="/players-stats"
            element={
              <PlayersTable
                data={playerStats}
                sortTable={sortTable}
                sorted={sorted}
              />
            }
          />

        </Routes>

        <Footer />

      </div>
    </div>
  );
}

export default App;
