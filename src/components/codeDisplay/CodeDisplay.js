import React from 'react';

const CodeDisplay = ({ background, color, fontSize, paddingX, paddingY, radius }) => {
  return (
    <div className="code-display">
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
  );
}

export default CodeDisplay;
