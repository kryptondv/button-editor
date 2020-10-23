import React from 'react';
import { StyledInputDiv } from './RangeInput.styles';

const RangeInput = ({name, value, handler}) => {
  return (
    <StyledInputDiv>
      <h2>{name}</h2>
      <p>{value}px</p>
      <input type="range" name={name} min="1" max="100" value={value} onChange={e => handler(e.target.value, name)}/>
    </StyledInputDiv>
  );
}

export default RangeInput;
