import React from 'react';

const TextInput = ({ name }) => {
  return (
    <div>
      <h2>{name}</h2>
      <input name={name} />
    </div>
  );
}

export default TextInput;
