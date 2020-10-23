import React from 'react';

const RangeInput = ({name, value, handler}) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>{value}px</p>
      <input type="range" name={name} min="1" max="100" value={value} onChange={e => handler(e.target.value)}/>
    </div>
  );
}

export default RangeInput;
