import { BsFillPersonFill, BsPeopleFill, BsPersonFillAdd, BsBarChartFill } from 'react-icons/bs';
import soccer from '../images/soccer-logo-690.svg';
import sportEx from '../images/sportEx.png';
import rambler from '../images/logo_ru.png';
import sports from '../images/sports.png';
import other from '../images/lfc.png';
import uefa from '../images/uefa.png';
import chemp from '../images/chemp.png';

import plcup from '../images/plcup.png';
import clcup from '../images/clcup.png';
import facup from '../images/facup.png';
import uefacup from '../images/uefa_cup.png';
import leaguecup from '../images/leaguecup.png';
import ueafs from '../images/uefa_super_cup.png';
import fifa from '../images/fifa.png';

export const standingsHeader = [
  {
    name: 'position',
    nameRu: 'Номер',
    short: '№',
    shortTable: true
  },
  {
    name: 'teamName',
    nameRu: 'Команда',
    short: 'Команда',
    shortTable: true
  },
  {
    name: 'matches',
    nameRu: 'Матчи',
    short: 'М',
    shortTable: true
  },
  {
    name: 'wins',
    nameRu: 'Выигрыши',
    short: 'В',
    shortTable: false
  },
  {
    name: 'draws',
    nameRu: 'Ничьи',
    short: 'Н',
    shortTable: false
  },
  {
    name: 'losses',
    nameRu: 'Поражения',
    short: 'П',
    shortTable: false
  },
  {
    name: 'goalsSc',
    nameRu: 'Забито мячей',
    short: 'ЗМ',
    shortTable: false
  },
  {
    name: 'goalsCon',
    nameRu: 'Пропущено мячей',
    short: 'ПМ',
    shortTable: false
  },
  {
    name: 'scoreDif',
    nameRu: 'Разница',
    short: 'Р',
    shortTable: true
  },
  {
    name: 'points',
    nameRu: 'Очки',
    short: 'О',
    shortTable: true
  },
];

export const gamesToShow = 5;
export const standingsLimit = 10;
export const mainTeam = 'Liverpool';

export const shortStEntries = ['position', 'logo', 'teamName', 'matches', 'scoreDif', 'points'];

export const navBtns = [
  {
    icon: <BsFillPersonFill size={30}/>,
    title: 'Статистика игроков',
    route: '/players-stats'
  },
  {
    icon: <BsPeopleFill size={30}/>,
    title: 'Статистика команды',
    route: '/stats/team'
  },
  {
    icon: <BsPersonFillAdd size={30}/>,
    title: 'Сравнение игороков',
    route: '/compare'
  },
  {
    icon: <BsBarChartFill size={30}/>,
    title: 'Графики',
    route: '/charts'
  },
];

export const sources = [
  {
    source:'sport-express.ru',
    logo: sportEx
  },
  {
    source: 'sports.ru',
    logo: sports
  },
  {
    source: 'championat.com',
    logo: chemp
  },
  {
    source: 'livesport.ru',
    logo: other
  },
  {
    source: 'sport.rambler.ru',
    logo: rambler
  },
  {
    source: 'soccer.ru',
    logo: soccer
  },
  {
    source: 'uefa.com',
    logo: uefa
  },

];

export const tsOptions = [
  {
    name: 'bigChancesCreated',
    nameRu: 'Опасные моменты',
    type: 'attack',
    perMatch: true,
  },
  {
    name: 'goalsScored',
    nameRu: 'Голы',
    type: 'attack',
    perMatch: true,
  },
  {
    name: 'interceptions',
    nameRu: 'Перехваты',
    type: 'defence',
    perMatch: true,
  },
  {
    name: 'goalsConceded',
    nameRu: 'Пропущено голов',
    type: 'defence',
    perMatch: true,
  },
  {
    name: 'fouls',
    nameRu: 'Фолы',
    type: 'discipline',
    perMatch: true,
  },
  {
    name: 'averageBallPossession',
    nameRu: 'Владение мячем %',
    type: 'team',
    perMatch: false,
  },
  {
    name: 'bigChancesCreatedAgainst',
    nameRu: 'Допущено моментов',
    type: 'defence',
    perMatch: true,
  },
  {
    name: 'cleanSheets',
    nameRu: 'Сухие матчи',
    type: 'defence',
    perMatch: false,
  },
  {
    name: 'duelsWonPercentage',
    nameRu: 'Выигранные дуэли %',
    type: 'defence',
    perMatch: false,
  },
  {
    name: 'shots',
    nameRu: 'Удары',
    type: 'attack',
    perMatch: true,
  },
  {
    name: 'shotsAgainst',
    nameRu: 'Допущено ударов',
    type: 'defence',
    perMatch: true,
  },
  {
    name: 'tackles',
    nameRu: 'Отборы',
    type: 'defence',
    perMatch: true,
  },
  {
    name: 'yellowCards',
    nameRu: 'Желтые карточки',
    type: 'discipline',
    perMatch: true,
  },
  {
    name: 'dribbleAttempts',
    nameRu: 'Попытки дриблинга',
    type: 'attack',
    perMatch: true,
  },
  {
    name: 'accuratePassesPercentage',
    nameRu: 'Точность передач',
    type: 'team',
    perMatch: false,
  },
  {
    name: 'goalsFromInsideTheBox',
    nameRu: 'Голы из штрафной',
    type: 'attack',
    perMatch: true,
  },
  {
    name: 'goalsFromOutsideTheBox',
    nameRu: 'Голы из-за штрафной',
    type: 'attack',
    perMatch: false,
  },
  {
    name: 'shotsOnTarget',
    nameRu: 'Удары в створ',
    type: 'attack',
    perMatch: true,
  },
  {
    name: 'totalCrosses',
    nameRu: 'Кроссы',
    type: 'team',
    perMatch: true,
  },

];

export const teamCharts = [
  {
    type: 'attack',
    typeRu: 'Аттака',
    nameRu: 'Аттака',
    initOpt: 'goalsScored'
  },
  {
    type: 'defence',
    typeRu: 'Оборона',
    nameRu: 'Оборона',
    initOpt: 'goalsConceded'
  },
  {
    type: 'discipline',
    typeRu: 'Дисциплина',
    nameRu: 'Дисциплина',
    initOpt: 'fouls'
  },
  {
    type: 'team',
    typeRu: 'Взимодействие',
    nameRu: 'Взимодействие',
    initOpt: 'averageBallPossession'
  },
];

export const cups = [
  {
    name: 'Лига Чемпионов',
    amount: 6,
    logo: clcup,
    class: ' trophies__img_black'
  },
  {
    name: 'Чемпионат Англии',
    amount: 19,
    logo: plcup,
    class: ''
  },
  {
    name: 'Кубок Англии',
    amount: 8,
    logo: facup,
    class: ' trophies__img_black'
  },
  {
    name: 'Кубок Лиги',
    amount: 9,
    logo: leaguecup,
    class: ' trophies__img_small'
  },
  {
    name: 'Кубок УЕФА',
    amount: 3,
    logo: uefacup,
    class: ''
  },
  {
    name: 'Суперкубок УЕФА',
    amount: 4,
    logo: ueafs,
    class: ''
  },
  {
    name: 'Клубный ЧМ',
    amount: 1,
    logo: fifa,
    class: ''
  },
];



export const playersTableData = [
  {
    name: 'position',
    nameRu: '№',
    nameRadar: '№',
    short: '№',
    include: true,
    type: 'Другое',
    compare: false
  },
  {
    name: 'name',
    nameRu: 'Игрок',
    nameRadar: 'Игрок',
    short: 'Игрок',
    include: true,
    type: 'Другое',
    compare: true
  },
  {
    name: 'appearances',
    nameRu: 'Матчи',
    nameRadar: 'Матчи',
    short: 'Матчи',
    include: true,
    type: 'Общее',
    compare: false

  },
  {
    name: 'goals',
    nameRu: 'Голы',
    nameRadar: 'Голы',
    short: 'Голы',
    include: true,
    type: 'Атака',
    compare: true
  },
  {
    name: 'assists',
    nameRu: 'Ассисты',
    nameRadar: 'Ассисты',
    short: 'Асс',
    include: true,
    type: 'Атака',
    compare: true
  },
  {
    name: 'expectedGoals',
    nameRu: 'Ожидаемые голы',
    nameRadar: 'Ожид. голы',
    short: 'ОжГолы',
    include: false,
    type: 'Атака',
    compare: true
  },
  {
    name: 'expectedAssists',
    nameRu: 'Ожидаемые ассисты',
    nameRadar: 'Ожид. ассисты',
    short: 'ОжАссисты',
    include: false,
    type: 'Атака',
    compare: true
  },
  {
    name: 'goalsAssistsSum',
    nameRu: 'Голы + ассисты',
    nameRadar: 'Голы + ассисты',
    short: 'Г+А',
    include: true,
    type: 'Атака',
    compare: false
  },
  {
    name: 'bigChancesCreated',
    nameRu: 'Создано опаcных моментов',
    nameRadar: ['Созд.опаc.', 'моментов'],
    short: 'СОМ',
    include: true,
    type: 'Атака',
    compare: true
  },
  {
    name: 'keyPasses',
    nameRu: 'Ключевые передачи',
    nameRadar: ['Ключ.', 'передачи'],
    short: 'КлПер',
    include: true,
    type: 'Атака',
    compare: true
  },
  {
    name: 'tackles',
    nameRu: 'Отборы',
    nameRadar: 'Отборы',
    short: 'Отб',
    include: true,
    type: 'Оборона',
    compare: true
  },
  {
    name: 'interceptions',
    nameRu: 'Перехваты',
    nameRadar: 'Перехваты',
    short: 'Перехв',
    include: true,
    type: 'Оборона',
    compare: true
  },
  {
    name: 'penaltyGoals',
    nameRu: 'Голы с пенальти',
    nameRadar: 'Голы с пенальти',
    short: 'ГП',
    include: false,
    type: 'Атака',
    compare: false
  },
  {
    name: 'freeKickGoal',
    nameRu: 'Голы со штрафных',
    nameRadar: 'Голы со штрафных',
    short: 'ГШ',
    include: false,
    type: 'Атака',
    compare: false
  },
  {
    name: 'rating',
    nameRu: 'Рейтинг',
    nameRadar: 'Рейтинг',
    short: 'Рейт',
    include: true,
    type: 'Общее',
    compare: false
  },
  {
    name: 'scoringFrequency',
    nameRu: 'Частота голов',
    nameRadar: 'Частота голов',
    short: 'ЧМ',
    include: false,
    type: 'Атака',
    compare: false
  },
  {
    name: 'totalShots',
    nameRu: 'Удары',
    nameRadar: 'Удары',
    short: 'У',
    include: false,
    type: 'Атака',
    compare: true
  },
  {
    name: 'shotsOnTarget',
    nameRu: 'Удары в створ',
    nameRadar: 'Удары в створ',
    short: 'УС',
    include: false,
    type: 'Атака',
    compare: false
  },
  {
    name: 'bigChancesMissed',
    nameRu: 'Упущено опасных моментов',
    nameRadar: ['Упущ. опасных', 'моментов'],
    short: 'УОМ',
    include: false,
    type: 'Атака',
    compare: false
  },
  {
    name: 'accuratePasses',
    nameRu: 'Точные передачи',
    nameRadar: ['Точные', 'передачи'],
    short: 'П',
    include: false,
    type: 'Взаимодействие',
    compare: true
  },
  {
    name: 'accurateLongBalls',
    nameRu: 'Точные длинные передачи',
    nameRadar: ['Точные', 'длин.передачи'],
    short: 'ДП',
    include: false,
    type: 'Взаимодействие',
    compare: false
  },
  {
    name: 'successfulDribbles',
    nameRu: 'Успешный дриблинг',
    nameRadar: ['Успешный', 'дриблинг'],
    short: 'УД',
    include: false,
    type: 'Атака',
    compare: true
  },
  {
    name: 'penaltyWon',
    nameRu: 'Отражено пенальти',
    nameRadar: ['Отражено', 'пенальти'],
    short: 'ВП',
    include: false,
    type: 'Атака',
    compare: false
  },
  {
    name: 'clearances',
    nameRu: 'Чистые матчи',
    nameRadar: ['Чистые', 'матчи'],
    short: 'БезПр',
    include: false,
    type: 'Оборона',
    compare: false
  },
  {
    name: 'possessionLost',
    nameRu: 'Потери владения',
    nameRadar: ['Потери', 'владения'],
    short: 'ПотВл',
    include: false,
    type: 'Оборона',
    compare: false
  },
  {
    name: 'yellowCards',
    nameRu: 'Желтые карточки',
    nameRadar: ['Желтые', 'карточки'],
    short: 'ЖК',
    include: false,
    type: 'Дисциплина',
    compare: false
  },
  {
    name: 'redCards',
    nameRu: 'Красные карточки',
    nameRadar: ['Красные', 'карточки'],
    short: 'КК',
    include: false,
    type: 'Дисциплина',
    compare: false
  },
];

export const tournaments = [
  {
    name: 'Premier League',
    nameRu: 'Premier League',
    default: true
  },
  {
    name: 'UEFA Champions League',
    nameRu: 'UEFA Champions League',
    default: false
  }
];

export const statsGameFilter = [
  {
    name: 'overall',
    nameRu: 'общие данные',
    default: true
  },
  {
    name: 'per game',
    nameRu: 'за матч',
    default: false
  }
];

export const fixturesFilter = [
  {
    name: 'results',
    nameRu: 'результаты',
    default: true
  },
  {
    name: 'fixtures',
    nameRu: 'расписание',
    default: false
  }
];

export const headerMenu = [
  {
    name: 'LfcStats',
    route: '/',
  },
  {
    name: 'Статистика',
    route: '/players-stats',
  },
  {
    name: 'Графики',
    route: '/charts',
  },
  {
    name: 'Результаты',
    route: '/fixtures',
  },
  /* {
    name: 'Расписание',
    route: '/fixtures',
  } */
];
