import React from 'react';
import { ImYoutube } from 'react-icons/im';

function Videos(props) {
  return (
    <div className="videos">
      {props.videos.map((i) => {
        return (
          <div className="videos__card" key={i.id}>
            <iframe allow="fullscreen;" src={`https://www.youtube.com/embed/${i.id}`}></iframe>
          </div>
        )
      })}
      <a className="videos__card videos__card_last" href="https://www.youtube.com/@LiverpoolFC/videos" target="_blank">
        <ImYoutube />
        <p>Смотреть другие видео</p>
      </a>

    </div>
  )
}

export default Videos;
