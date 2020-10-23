import React from 'react';
import Button from './components/button/Button';
import ColorInput from './components/colorInput/ColorInput';

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
      />
      <ColorInput name="background" />
      <ColorInput name="colour" />
    </div>
  );
}

export default App;
