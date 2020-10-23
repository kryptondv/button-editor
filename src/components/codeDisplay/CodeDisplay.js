import React from 'react';
import { StyledCodeDisplay } from './CodeDisplay.styles';

const CodeDisplay = ({
  background,
  color,
  fontSize,
  paddingX,
  paddingY,
  radius,
}) => {
  return (
    <StyledCodeDisplay>
      <div>
        <span>button {'{'}</span>
        <span>background: {background};</span>
        <span>color: {color};</span>
        <span>font-size: {fontSize}px;</span>
        <span>
          padding: {paddingX}px {paddingY}px;
        </span>
        <span>border-radius:{radius}px;</span>
        <span>{'}'}</span>
      </div>
    </StyledCodeDisplay>
  );
};

export default CodeDisplay;
