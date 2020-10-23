import React from 'react';

const TextInput = ({ name, value, handler }) => {
  return (
    <div>
      <h2>{name}</h2>
      <input name={name} value={value} onChange={e => handler(e.target.value)}/>
    </div>
  );
}

export default TextInput;
