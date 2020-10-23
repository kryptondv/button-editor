import React, { useState } from 'react';
import debounce from 'lodash/debounce';

import Button from './components/button/Button';
import ColorInput from './components/colorInput/ColorInput';
import RangeInput from './components/rangeInput/RangeInput';
import TextInput from './components/textInput/TextInput';
import CodeDisplay from './components/codeDisplay/CodeDisplay';

function App() {
  const [text, setText] = useState('Click me!');
  const [background, setBackground] = useState('#119911');
  const [color, setColor] = useState('#ffffff');
  const [fontSize, setFontSize] = useState(16);
  const [paddingX, setPaddingX] = useState(8);
  const [paddingY, setPaddingY] = useState(32);
  const [radius, setRadius] = useState(5);

  const debounceBgChange = debounce(value => setBackground(value), 15);
  const debounceColorChange = debounce(value => setColor(value), 15);
  const debounceTextChange = debounce(value => setText(value), 15);
  const debounceFontSizeChange = debounce(value => setFontSize(value), 15);
  const debouncePaddingXChange = debounce(value => setPaddingX(value), 15);
  const debouncePaddingYChange = debounce(value => setPaddingY(value), 15);
  const debounceRadiusChange = debounce(value => setRadius(value), 15);

  const handleBackgroundChange = value => {
    debounceBgChange(value);
  };

  const handleColorChange = value => {
    debounceColorChange(value);
  };

  const handleTextChange = value => {
    debounceTextChange(value);
  };

  const handleFontSizeChange = value => {
    debounceFontSizeChange(value);
  };

  const handlePaddingXChange = value => {
    debouncePaddingXChange(value);
  };

  const handlePaddingYChange = value => {
    debouncePaddingYChange(value);
  };

  const handleRadiusChange = value => {
    debounceRadiusChange(value);
  };

  return (
    <div className="app">
      <main>
        <h1>Button Editor</h1>
        <div className="button-container">
          <Button
            background={background}
            paddingX={paddingX}
            paddingY={paddingY}
            color={color}
            radius={radius}
            text={text}
            fontSize={fontSize}
          />
        </div>
        <TextInput name="text" value={text} handler={handleTextChange} />
        <div className="color-inputs">
          <ColorInput name="color" value={color} handler={handleColorChange} />
          <ColorInput
            name="background"
            value={background}
            handler={handleBackgroundChange}
          />
        </div>
        <div className="range-inputs">
          <RangeInput
            name="font-size"
            value={fontSize}
            handler={handleFontSizeChange}
          />
          <RangeInput
            name="paddingX"
            value={paddingX}
            handler={handlePaddingXChange}
          />
          <RangeInput
            name="paddingY"
            value={paddingY}
            handler={handlePaddingYChange}
          />
          <RangeInput
            name="radius"
            value={radius}
            handler={handleRadiusChange}
          />
        </div>
        <CodeDisplay
          background={background}
          paddingX={paddingX}
          paddingY={paddingY}
          color={color}
          radius={radius}
          text={text}
          fontSize={fontSize}
        />
      </main>
    </div>
  );
}

export default App;
