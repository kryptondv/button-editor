import React from 'react';
import { StyledColorInputDiv } from './ColorInput.styles';

const ColorInput = ({ name, handler, value }) => {
  return (
    <StyledColorInputDiv>
      <h2>{name}</h2>
      <input type="color" name={name} value={value} onChange={e => handler(e.target.value)}/>
    </StyledColorInputDiv>
  );
}

export default ColorInput;
