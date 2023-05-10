import React, { useState, useEffect } from 'react';
import { ImYoutube } from 'react-icons/im';

function Videos(props) {
  const videoRef = React.createRef();
  const [height, setHeight] = useState({ height: '0%'});

  useEffect(() => {
    setHeight({ height: videoRef.current !== null ? videoRef.current.offsetWidth * 0.56 : '' });
  }, [props.videos])



  return (
    <div className="videos">
      {props.videos.map((i) => {
        return (
          <div className="videos__card" key={i.id} ref={videoRef} style={height}>
            <iframe allow="fullscreen;" src={`https://www.youtube.com/embed/${i.id}`} title={i.tite}></iframe>
          </div>
        )
      })}
      <a className="videos__card videos__card_last" style={height} href="https://www.youtube.com/@LiverpoolFC/videos" target="_blank" rel="noreferrer">
        <ImYoutube />
        <p>Смотреть другие видео</p>
      </a>

    </div>
  )
}

export default Videos;
