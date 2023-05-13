import React, { useEffect, useState } from 'react';

function Switcher(props) {
  const activeRef = React.createRef();
  const [overlayStyle, setOverlayStyle] = useState({ width: '0%' });

  function handleClick(e) {
    setOverlayStyle({ width: e.target.offsetWidth, transform: `translate(${e.target.offsetLeft - 3}px, 0px)` });
    props.handleSwitch(e.target.textContent);
  }

  useEffect(() => {
    setOverlayStyle({ width: activeRef.current.offsetWidth, transform: `translate(${activeRef.current.offsetLeft - 3}px, 0px)` });
  }, [props.activeBtn]);

  return (
    <div className="switcher">
      <div className="switcher__overlay" style={overlayStyle} />
      {props.btns.map((i) => (
        <button
          className="switcher__btn"
          ref={i.nameRu === props.activeBtn ? activeRef : null}
          onClick={handleClick}
          key={i.nameRu}
          type="button"
        >
          {i.nameRu}
        </button>
      ))}
    </div>
  );
}

export default Switcher;
