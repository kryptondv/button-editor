import React from 'react';

const ColorInput = ({ name, handler, value }) => {
  return (
    <div>
      <h2>{name}</h2>
      <input type="color" name={name} value={value} onChange={e => handler(e.target.value)}/>
    </div>
  );
}

export default ColorInput;
