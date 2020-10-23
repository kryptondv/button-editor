import React from 'react';
import Button from './components/button/Button';
import ColorInput from './components/colorInput/ColorInput';
import RangeInput from './components/rangeInput/RangeInput';

function App() {
  return (
    <div className="app">
      <h1>Button Editor</h1>
      <Button
        background="green"
        paddingX=".5rem"
        paddingY="2rem"
        color="white"
        radius="5px"
        text="Click me!"
        fontSize="1rem"
      />
      <ColorInput name="background" />
      <ColorInput name="colour" />
      <RangeInput name="font-size" />
      <RangeInput name="paddingX" />
      <RangeInput name="paddingY" />
      <RangeInput name="radius" />
    </div>
  );
}

export default App;
