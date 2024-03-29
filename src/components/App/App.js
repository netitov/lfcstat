import React, { useState, useEffect, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import dayjs from 'dayjs';
import Chart from 'chart.js/auto';
import { CategoryScale } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import Api from '../../utils/Api';
import { SERVER_API } from '../../utils/config';
import {
  standingsHeader, gamesToShow, standingsLimit, mainTeam, statsGameFilter,
} from '../../utils/constants';
import Header from '../Header/Header';
import Main from '../Main/Main';
import LeagueTable from '../LeagueTable/LeagueTable';
import ChartsList from '../ChartsList/ChartsList';
import Footer from '../Footer/Footer';
import PlayersTable from '../PlayersTable/PlayersTable';
import Fixtures from '../Fixtures/Fixtures';
import RadarChart from '../RadarChart/RadarChart';

Chart.register(CategoryScale);
Chart.register(ChartDataLabels);
Chart.defaults.font.family = 'Century Gothic, Arial, Helvetica, Sans-serif';

function App() {
  const [standings, setStandings] = useState([]);
  const [shortStandings, setShortStandings] = useState([]);
  const [nearEvents, setNearEvents] = useState([]);
  const [finishedEvents, setFinishedEvents] = useState([]);
  const [fullEvents, setFullEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [news, setNews] = useState([]);
  const [teamCharts, setTeamCharts] = useState([]);
  const [videos, setVideos] = useState([]);
  const [playerStats, setPlayerStats] = useState([]);
  const [sortedColumnPl, setSortedColumnPl] = useState('rating');
  const [sortedColumnLeague, setSortedColumnLeague] = useState('№');
  const [order, setOrder] = useState('dsc');
  const [activeBtnPl, setActiveBtnPl] = useState(statsGameFilter.find((i) => i.default).nameRu);
  const [sortedPlStats, setSortedPlStats] = useState([]);
  const [activeBtnEvents, setActiveBtnEvents] = useState('результаты');

  const playerStatsArr = [];
  const initAtOpt = 'goalsScored';

  const api = new Api({
    baseUrl: SERVER_API,
  });

  function findPosition(arr) {
    let possition;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].teamName === mainTeam) {
        // return arr[i].position;
        possition = arr[i].position;
      }
    }
    return possition;
  }

  // add missing keys: so that all players have the same keys
  function compareObjects(arr1, arr2) {
    arr1.forEach((i) => {
      const objKeys = Object.keys(i);
      const allKeys = Object.keys(arr2);
      const missingKeys = allKeys.filter((j) => !objKeys.includes(j));
      missingKeys.forEach((k) => {
        i[k] = 0;
      });
    });
  }

  // adapt array from server to mapping
  function transfromArray(initArr, newArr) {
    Object.entries(initArr).forEach((arr) => {
      arr[1].forEach((i) => {
        if (!newArr.find((el) => el.name === i.player.name)) {
          newArr.push({ name: i.player.name, appearances: i.statistics.appearances });
        }

        const indexOfItemInArray = newArr.findIndex((q) => q.name === i.player.name);
        if (indexOfItemInArray > -1) {
          newArr[indexOfItemInArray] = {
            ...newArr[indexOfItemInArray],
            [arr[0]]: i.statistics[arr[0]] || 0,
          };
        }
      });
    });
    compareObjects(newArr, initArr);
  }

  useEffect(() => {
    Promise.all([
      api.getStandings(),
      api.getEvents(),
      api.getNews(),
      api.getTeamStats(),
      api.getVideos(),
      api.getPlayerStats(),
    ])
      .then(([st, evts, nws, ts, vd, ps]) => {
      // whole standings data
        localStorage.setItem('standings', JSON.stringify(st));
        const sortedStandings = st.sort((a, b) => a.position - b.position);
        setStandings(sortedStandings);

        // short standings data
        const mainTeamPos = findPosition(sortedStandings);
        const shortStArr = [];
        const teamAmount = Math.floor(standingsLimit / 2);
        const incr = (mainTeamPos + teamAmount) < sortedStandings.length ? teamAmount
          : (sortedStandings.length - mainTeamPos);
        const decr = (mainTeamPos - teamAmount) > 1 ? teamAmount : (mainTeamPos - 1);

        sortedStandings.forEach((i) => {
          if (i.teamName === mainTeam) {
            shortStArr.push(i);
          }
          if (i.position > mainTeamPos && i.position <= (mainTeamPos
            + (incr + (teamAmount - decr)))) {
            shortStArr.push(i);
          }
          if (i.position < mainTeamPos && i.position
            >= (mainTeamPos - (decr + (teamAmount - incr)))) {
            shortStArr.push(i);
          }
        });
        setShortStandings(shortStArr);

        // events
        localStorage.setItem('events', JSON.stringify(evts));
        const sorteredEvents = evts.sort((a, b) => dayjs(a.startAt) - dayjs(b.startAt));
        setNearEvents(sorteredEvents.filter((i) => dayjs.utc(i.startAt)
          .format() >= dayjs.utc().format()).slice(0, gamesToShow));
        setFullEvents(sorteredEvents.slice(-50));

        // finished events
        const finishedGames = sorteredEvents.filter((i) => i.status === 'finished');
        setFinishedEvents(finishedGames.slice(-gamesToShow));
        setFilteredEvents(finishedGames.reverse());

        // news
        localStorage.setItem('news', JSON.stringify(nws));
        setNews(nws);

        // team stats for charts
        const sortedTs = ts.sort((a, b) => a.year.localeCompare(b.year));
        setTeamCharts(sortedTs);

        // videos
        setVideos(vd.slice(0, 4));

        // player stats:
        transfromArray(ps[0].data, playerStatsArr);
        setPlayerStats(playerStatsArr);
        setSortedPlStats(playerStatsArr);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const sortLeagueTable = useCallback((data) => {
    setStandings([...standings.sort((a, b) => b[data] - a[data])]);
    setSortedColumnLeague(data);
  }, [standings]);

  // sort players stats table
  const sortPlayersTable = useCallback((data, switched) => {
    const selectColumn = (a, b) => {
      if (((order === 'asc' || sortedColumnPl !== data) && !switched)
        || (order === 'dsc' && switched)) {
        setOrder('dsc');
        if (typeof (playerStats[0][data]) === 'string') {
          return a[data] > b[data] ? 1 : -1;
        }
        return b[data] - a[data];
      }

      if (order === 'dsc' || (order === 'asc' && switched)) {
        setOrder('asc');
        if (typeof (playerStats[0][data]) === 'string') {
          return b[data] > a[data] ? 1 : -1;
        }
        return a[data] - b[data];
      }
      return a[data] - b[data];
    };
    setSortedPlStats([...sortedPlStats.sort((a, b) => selectColumn(a, b))]);
    setSortedColumnPl(data);
  }, [sortedPlStats]);

  function switchPlayerStats(btn) {
    if (btn === 'за матч') {
      const newArr = [];

      playerStats.forEach((i) => {
        newArr.push({ ...i });
      });

      newArr.forEach((i) => {
        Object.keys(i).forEach((j) => {
          if (j !== 'name' && j !== 'appearances' && j !== 'rating' && j !== '№') {
            const newValue = Number((i[j] / i.appearances).toFixed(2));
            i[j] = newValue;
          }
        });
      });

      setSortedPlStats(newArr);
    } else {
      setSortedPlStats(playerStats);
    }
  }

  // switch players table type: overall/ pergame
  const handleSwitchPlayerStats = useCallback((btn) => {
    setActiveBtnPl(btn);
    switchPlayerStats(btn);
  }, [playerStats]);

  const switchEvents = useCallback((data) => {
    setActiveBtnEvents(data);
    if (data === 'результаты') {
      setFilteredEvents(fullEvents.filter((i) => i.status === 'finished').reverse());
    } else {
      setFilteredEvents(fullEvents.filter((i) => dayjs.utc(i.startAt)
        .format() >= dayjs.utc().format()));
    }
  }, [filteredEvents]);

  // sort players stats table if active btn is switched
  useEffect(() => {
    sortPlayersTable(sortedColumnPl, true);
  }, [activeBtnPl]);

  return (
    <div className="page">
      <div className="page__container">
        <Header
          filterEvents={switchEvents}
          active={activeBtnEvents}
        />
        <Routes>

          <Route
            path="/"
            element={(
              <Main
                standings={shortStandings}
                events={nearEvents}
                finishedEvents={finishedEvents}
                standingsHeader={standingsHeader.filter((i) => i.shortTable)}
                news={news}
                data={standings.find((i) => i.teamName === mainTeam)}
                videos={videos}
                filterEvents={switchEvents}
              />
            )}
          />

          <Route
            path="/standings"
            element={(
              <LeagueTable
                standingsHeader={standingsHeader}
                standings={standings}
                sortTable={sortLeagueTable}
                sorted={sortedColumnLeague}
              />
            )}
          />

          <Route
            path="/charts"
            element={(
              <ChartsList
                initOption={initAtOpt}
                teamCharts={teamCharts}
              />
            )}
          />

          <Route
            path="/players-stats"
            element={(
              <PlayersTable
                sortTable={sortPlayersTable}
                sorted={sortedColumnPl}
                handleSwitch={handleSwitchPlayerStats}
                activeBtn={activeBtnPl}
                dataArr={sortedPlStats}
              />
            )}
          />

          <Route
            path="/fixtures"
            element={(
              <Fixtures
                events={filteredEvents}
                handleSwitch={switchEvents}
                activeBtn={activeBtnEvents}
              />
            )}
          />

          <Route
            path="/compare"
            element={(
              <RadarChart
                playerStats={sortedPlStats}
                handleSwitch={handleSwitchPlayerStats}
              />
            )}
          />

          <Route
            path="/team-stats"
            element={(
              <LeagueTable
                standingsHeader={standingsHeader}
                standings={standings}
                sortTable={sortLeagueTable}
                sorted={sortedColumnLeague}
              />
            )}
          />

        </Routes>

        <Footer />

      </div>
    </div>
  );
}

export default App;
