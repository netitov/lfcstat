import React, { useEffect, useState } from 'react'

function Switcher(props) {
  const activeRef = React.createRef();
  //const [activeBtn, setActiveBtn] = useState();
  const [overlayStyle, setOverlayStyle] = useState({ width: '0%'});


  function handleClick(e) {
    //setActiveBtn(e.target.textContent);
    setOverlayStyle({ width: e.target.offsetWidth, transform: `translate(${e.target.offsetLeft - 3}px, 0px)`});
    props.handleSwitch(e.target.textContent);
  }

  useEffect(() => {
    //setActiveBtn(activeRef.current);
    setOverlayStyle({ width: activeRef.current.offsetWidth});
  }, [])

  return (
    <div className="switcher">
      <div className="switcher__overlay" style={overlayStyle}></div>
      <button className="switcher__btn" ref={activeRef} onClick={handleClick}>Premier League</button>
      <button className="switcher__btn" onClick={handleClick}>UEFA Champions League</button>
    </div>
  )
}

export default Switcher;
