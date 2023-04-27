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
  ['№', 'Номер'],
  ['Команда', 'Команда'],
  ['М', 'Матчи'],
  ['В', 'Выигрыши'],
  ['Н', 'Ничьи'],
  ['П', 'Поражения'],
  ['ЗМ', 'Забито мячей'],
  ['ПМ', 'Пропущено мячей'],
  ['РМ', 'Разница'],
  ['О', 'Очки']
];

export const standingsHeaderShort = [
  ['№', 'Номер'],
  ['Команда', 'Команда'],
  ['М', 'Матчи'],
  ['РМ', 'Разница'],
  ['О', 'Очки']
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
    route: '/stats/compare'
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
    initOpt: 'goalsScored'
  },
  {
    type: 'defence',
    typeRu: 'Оборона',
    initOpt: 'goalsConceded'
  },
  {
    type: 'discipline',
    typeRu: 'Дисциплина',
    initOpt: 'fouls'
  },
  {
    type: 'team',
    typeRu: 'Взимодействие',
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
    short: '№',
    include: true,
    type: 'Другое'
  },
  {
    name: 'name',
    nameRu: 'Игрок',
    short: 'Игрок',
    include: true,
    type: 'Другое'
  },
  {
    name: 'appearances',
    nameRu: 'Матчи',
    short: 'Матчи',
    include: true,
    type: 'Общее'
  },
  {
    name: 'goals',
    nameRu: 'Забито мячей',
    short: 'Голы',
    include: true,
    type: 'Атака'
  },
  {
    name: 'assists',
    nameRu: 'Ассисты',
    short: 'Асс',
    include: true,
    type: 'Атака'
  },
  {
    name: 'expectedGoals',
    nameRu: 'Ожидамые голы',
    short: 'ОжГолы',
    include: false,
    type: 'Атака'
  },

  {
    name: 'expectedAssists',
    nameRu: 'Ожидаемые ассисты',
    short: 'ОжАссисты',
    include: false,
    type: 'Атака'
  },
  {
    name: 'goalsAssistsSum',
    nameRu: 'Голы + ассисты',
    short: 'Г+А',
    include: true,
    type: 'Атака'
  },
  {
    name: 'bigChancesCreated',
    nameRu: 'Создано опасных моментов',
    short: 'СОМ',
    include: true,
    type: 'Атака'
  },
  {
    name: 'keyPasses',
    nameRu: 'Ключевые передачи',
    short: 'КлПер',
    include: true,
    type: 'Атака'
  },
  {
    name: 'tackles',
    nameRu: 'Отборы',
    short: 'Отб',
    include: true,
    type: 'Оборона'
  },
  {
    name: 'interceptions',
    nameRu: 'Перехваты',
    short: 'Перехв',
    include: true,
    type: 'Оборона'
  },
  {
    name: 'penaltyGoals',
    nameRu: 'Голы с пенальти',
    short: 'ГП',
    include: false,
    type: 'Атака'
  },
  {
    name: 'freeKickGoal',
    nameRu: 'Голы со штрафных',
    short: 'ГШ',
    include: false,
    type: 'Атака'
  },
  {
    name: 'rating',
    nameRu: 'Рейтинг',
    short: 'Рейт',
    include: true,
    type: 'Общее'
  },
  {
    name: 'scoringFrequency',
    nameRu: 'Частота голов',
    short: 'ЧМ',
    include: false,
    type: 'Атака'
  },
  {
    name: 'totalShots',
    nameRu: 'Всего ударов',
    short: 'У',
    include: false,
    type: 'Атака'
  },
  {
    name: 'shotsOnTarget',
    nameRu: 'Удары в створ',
    short: 'УС',
    include: false,
    type: 'Атака'
  },
  {
    name: 'bigChancesMissed',
    nameRu: 'Упущено опасных моментов',
    short: 'УОМ',
    include: false,
    type: 'Атака'
  },
  {
    name: 'accuratePasses',
    nameRu: 'Точные передачи',
    short: 'П',
    include: false,
    type: 'Взаимодействие'
  },
  {
    name: 'accurateLongBalls',
    nameRu: 'Точные длинные передачи',
    short: 'ДП',
    include: false,
    type: 'Взаимодействие'
  },
  {
    name: 'successfulDribbles',
    nameRu: 'Успешный дриблинг',
    short: 'УД',
    include: false,
    type: 'Атака'
  },
  {
    name: 'penaltyWon',
    nameRu: 'Взято пенальти',
    short: 'ВП',
    include: false,
    type: 'Атака'
  },
  {
    name: 'clearances',
    nameRu: 'Чистые матчи',
    short: 'БезПр',
    include: false,
    type: 'Оборона'
  },
  {
    name: 'Потери владения',
    nameRu: 'Рейтинг',
    short: 'ПотВл',
    include: false,
    type: 'Оборона'
  },
  {
    name: 'yellowCards',
    nameRu: 'Желтые карточки',
    short: 'ЖК',
    include: false,
    type: 'Дисциплина'
  },
  {
    name: 'redCards',
    nameRu: 'Красные карточки',
    short: 'КК',
    include: false,
    type: 'Дисциплина'
  },
];
