import React from 'react';

function Select(props) {
  function handleChange(e) {
    props.selectOption(e.target.value);
  }

  return (
    <select name={props.type} id={props.type} className="select" defaultValue={props.initOption} onChange={handleChange}>
      {props.tsOptions.filter((el) => el.type === props.type).map((i) => (
        <option value={i.name} key={i.name}>{i.nameRu}</option>
      ))}

    </select>
  );
}

export default Select;
