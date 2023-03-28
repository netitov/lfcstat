import { BsFillPersonFill, BsPeopleFill, BsPersonFillAdd, BsBarChartFill } from 'react-icons/bs';

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
    route: '/players'
  },
  {
    icon: <BsPeopleFill size={30}/>,
    title: 'Статистика команды',
    route: '/team'
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
