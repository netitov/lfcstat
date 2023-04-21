import { newsPic, sources } from '../../utils/constants';


function News(props) {

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

  const source = sources.find(i => props.url.includes(i.source));

  return (
    <a href={props.url} target="_blank" rel="noopener noreferrer" className="news">
      <img src={source.logo} alt="news" className="news__img"></img>
      <div className="news__overlay">
        <h3>{props.name}</h3>
      </div>
    </a>
  )
}

export default News;
