import { useEffect, useRef, useState } from 'react';
import { cups } from '../../utils/constants';

function Trophies() {

  const [animation, setAnimation] = useState(false);
  const pathRef = useRef();

  useEffect(() => {

    function runAnimation() {
      const elementPos = pathRef.current.getBoundingClientRect().top;
      const elementHeight = pathRef.current.offsetHeight;
      const windowHeight = window.innerHeight;

      if(elementPos < windowHeight - (elementHeight * 0.5)) {
        setAnimation(true);
      }
    }

    window.addEventListener('scroll', runAnimation);
    return () => window.removeEventListener('scroll', runAnimation);
  })


  return (
    <div className="trophies" ref={pathRef}>

      {cups.map((i) => {
        return (
          <div className={`trophies__card${animation ? ' trophies__card_active' : ''}`} key={i.name}>
            <div className="trophies__img-container">
              <img className={`trophies__img${i.class}`} src={i.logo} alt="cup"></img>
              <h3>{i.amount}</h3>
            </div>
            <p>{i.name}</p>
          </div>
        )
      })}

    </div>
  )
}

export default Trophies;
