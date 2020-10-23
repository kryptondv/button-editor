import React from 'react';

const ColorInput = ({ name }) => {
  return (
    <div>
      <h2>{name}</h2>
      <input type="color" name={name}/>
    </div>
  );
}

export default ColorInput;
