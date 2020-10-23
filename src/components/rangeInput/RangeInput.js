import React from 'react';

const RangeInput = ({name}) => {
  return (
    <div>
      <h2>{name}</h2>
      <input type="range" name={name} />
    </div>
  );
}

export default RangeInput;
