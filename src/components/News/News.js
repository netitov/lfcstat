import { newsPic, sources } from '../../utils/constants';


function News(props) {

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

  const source = sources.find(el => props.url.includes(el));

  return (
    <a href={props.url} target="_blank" rel="noopener noreferrer" className="news">
      <img src={newsPic[getRandomInt(0, newsPic.length)]} alt="news"></img>
      <div className="news__overlay">
        <h3>{props.name}</h3>
        <p>{source}</p>
      </div>
    </a>
  )
}

export default News;
