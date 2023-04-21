import { BsFillPersonFill, BsPeopleFill, BsPersonFillAdd, BsBarChartFill } from 'react-icons/bs';
import soccer from '../images/soccer-logo-690.svg';
import sportEx from '../images/sportEx.png';
import rambler from '../images/logo_ru.png';
import sports from '../images/sports.png';
import other from '../images/lfc.png';
import uefa from '../images/uefa.png';
import chemp from '../images/chemp.png';

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
    route: '/stats/players'
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

export const newsPic = [
  'https://images.unsplash.com/photo-1654886357555-58f98333f119?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
  'https://images.unsplash.com/photo-1677752793570-acb0b3c54542?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
  'https://images.unsplash.com/photo-1636959961919-985cbee8d6d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
  'https://images.unsplash.com/photo-1593296402507-fe73d47e2d8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
  'https://images.unsplash.com/photo-1598556253518-16614526b8dd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80',
  'https://images.unsplash.com/photo-1518188049456-7a3a9e263ab2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
  'https://images.unsplash.com/photo-1643796903573-68834ffadcb6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
  'https://images.unsplash.com/photo-1604160701095-c45e92c644a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=390&q=80',
  'https://images.unsplash.com/photo-1654886474229-46687f2a1ad4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
  'https://images.unsplash.com/photo-1559930198-26e8d7f0a4f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
  'https://images.unsplash.com/photo-1478112544096-20cf77df3a88?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
  'https://images.unsplash.com/photo-1654886580603-7c9a6e4bdc25?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
  'https://images.pexels.com/photos/1884574/pexels-photo-1884574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://media.gettyimages.com/id/1257837862/photo/liverpool-fc-v-chelsea-fc-premier-league.jpg?s=2048x2048&w=gi&k=20&c=ESmD01XiusMhOei5N0G_j8d-NNBgajcvgoreAMnqMCc=',
  'https://media.gettyimages.com/id/1391292917/photo/liverpool-fc-v-sl-benfica-quarter-final-leg-two-uefa-champions-league.jpg?s=2048x2048&w=gi&k=20&c=1rwxu9krIam6WHRv8svv8N8fhnJdIMxUHbSFtwvyWtg=',
  'https://media.gettyimages.com/id/1440972485/photo/liverpool-fc-v-southampton-fc-premier-league.jpg?s=2048x2048&w=gi&k=20&c=wow7JoU5odNx9yEgb5-yrI2u9gu8Fed6qCedLp5TkCw=',
  'https://media.gettyimages.com/id/1438209109/photo/liverpool-fc-v-ssc-napoli-group-a-uefa-champions-league.jpg?s=2048x2048&w=gi&k=20&c=2WFm9ypUAeso3JQLtStbl05oWxGfpE1Z38Y0m4YRPXk=',
  'https://media.gettyimages.com/id/1433906472/photo/liverpool-fc-v-manchester-city-premier-league.jpg?s=2048x2048&w=gi&k=20&c=E807-TmSSatxZyt6HiYnQil-KSRmE0Yh9Dy3E8yMxsU=',
  'https://media.gettyimages.com/id/1227741500/photo/fans-celebrate-as-liverpool-fc-lift-the-premiership-trophy-at-anfield.jpg?s=2048x2048&w=gi&k=20&c=uLEsO35fTiBLgSt47chiiNbxnEc1POgK9rEYJdYE7JM=',
  'https://media.gettyimages.com/id/1211976153/photo/liverpool-fc-v-atletico-madrid-uefa-champions-league-round-of-16-second-leg.jpg?s=2048x2048&w=gi&k=20&c=GWAxrb1g7fhbP3Id2XhrRIJOxOs1TUagUa7o34MK3p4='
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

export const promoImg = 'https://images.unsplash.com/photo-1643796903573-68834ffadcb6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80';

export const tsOptions = [
  {
    name: 'bigChancesCreated',
    nameRu: 'Опасные моменты',
    type: 'attack',
    perMatch: true
  },
  {
    name: 'goalsScored',
    nameRu: 'Голы',
    type: 'attack',
    perMatch: true
  },
  {
    name: 'interceptions',
    nameRu: 'Перехваты',
    type: 'defence',
    perMatch: true
  },
  {
    name: 'goalsConceded',
    nameRu: 'Пропущено голов',
    type: 'defence',
    perMatch: true
  },
  {
    name: 'fouls',
    nameRu: 'Фолы',
    type: 'discipline',
    perMatch: true
  },
  {
    name: 'averageBallPossession',
    nameRu: 'Владение мячем %',
    type: 'team',
    perMatch: false
  },
  {
    name: 'bigChancesCreatedAgainst',
    nameRu: 'Допущено моментов',
    type: 'defence',
    perMatch: true
  },
  {
    name: 'cleanSheets',
    nameRu: 'Сухие матчи',
    type: 'defence',
    perMatch: false
  },
  {
    name: 'duelsWonPercentage',
    nameRu: 'Выигранные дуэли %',
    type: 'defence',
    perMatch: false
  },
  {
    name: 'shots',
    nameRu: 'Удары',
    type: 'attack',
    perMatch: true
  },
  {
    name: 'shotsAgainst',
    nameRu: 'Допущено ударов',
    type: 'defence',
    perMatch: true
  },
  {
    name: 'tackles',
    nameRu: 'Отборы',
    type: 'defence',
    perMatch: true
  },
  {
    name: 'yellowCards',
    nameRu: 'Желтые карточки',
    type: 'discipline',
    perMatch: true
  },
  {
    name: 'dribbleAttempts',
    nameRu: 'Попытки дриблинга',
    type: 'attack',
    perMatch: true
  },
  {
    name: 'accuratePassesPercentage',
    nameRu: 'Точность передач',
    type: 'team',
    perMatch: false
  },
  {
    name: 'goalsFromInsideTheBox',
    nameRu: 'Голы из штрафной',
    type: 'attack',
    perMatch: true
  },
  {
    name: 'goalsFromOutsideTheBox',
    nameRu: 'Голы из-за штрафной',
    type: 'attack',
    perMatch: false
  },
  {
    name: 'shotsOnTarget',
    nameRu: 'Удары в створ',
    type: 'attack',
    perMatch: true
  },
  {
    name: 'totalCrosses',
    nameRu: 'Кроссы',
    type: 'team',
    perMatch: true
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
