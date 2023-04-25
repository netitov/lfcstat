import React from 'react';
import { ImYoutube } from 'react-icons/im';

function Videos(props) {
  return (
    <div className="videos">
      {props.videos.map((i) => {
        return (
          <div className="videos__card" key={i.id}>
            <iframe allow="fullscreen;" src={`https://www.youtube.com/embed/${i.id}`} title={i.tite}></iframe>
          </div>
        )
      })}
      <a className="videos__card videos__card_last" href="https://www.youtube.com/@LiverpoolFC/videos" target="_blank" rel="noreferrer">
        <ImYoutube />
        <p>Смотреть другие видео</p>
      </a>

    </div>
  )
}

export default Videos;
