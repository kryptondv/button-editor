import React, { useState } from 'react';
import debounce from 'lodash/debounce';

import Button from './components/button/Button';
import ColorInput from './components/colorInput/ColorInput';
import RangeInput from './components/rangeInput/RangeInput';
import TextInput from './components/textInput/TextInput';
import CodeDisplay from './components/codeDisplay/CodeDisplay';

function App() {
  // state
  const [text, setText] = useState('Click me!');
  const [background, setBackground] = useState('#119911');
  const [color, setColor] = useState('#ffffff');
  const [fontSize, setFontSize] = useState(16);
  const [paddingX, setPaddingX] = useState(8);
  const [paddingY, setPaddingY] = useState(32);
  const [radius, setRadius] = useState(5);

  // debouncing functions
  const debounceBgChange = debounce(value => setBackground(value), 15);
  const debounceColorChange = debounce(value => setColor(value), 15);
  const debounceTextChange = debounce(value => setText(value), 15);
  const debounceFontSizeChange = debounce(value => setFontSize(value), 15);
  const debouncePaddingXChange = debounce(value => setPaddingX(value), 15);
  const debouncePaddingYChange = debounce(value => setPaddingY(value), 15);
  const debounceRadiusChange = debounce(value => setRadius(value), 15);

  // event handler
  const handleChange = (value, name) => {
    switch(name) {
      case 'background': 
        debounceBgChange(value);
        break;
      case 'color': 
        debounceColorChange(value);
        break;
      case 'text': 
        debounceTextChange(value);
        break;
      case 'font-size': 
        debounceFontSizeChange(value);
        break;
      case 'paddingX': 
        debouncePaddingXChange(value);
        break;
      case 'paddingY': 
        debouncePaddingYChange(value);
        break;
      case 'radius': 
        debounceRadiusChange(value);
        break;
      default:
        return;
    }
  }
  

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
        <TextInput name="text" value={text} handler={handleChange} />
        <div className="color-inputs">
          <ColorInput name="color" value={color} handler={handleChange} />
          <ColorInput
            name="background"
            value={background}
            handler={handleChange}
          />
        </div>
        <div className="range-inputs">
          <RangeInput
            name="font-size"
            value={fontSize}
            handler={handleChange}
          />
          <RangeInput
            name="paddingX"
            value={paddingX}
            handler={handleChange}
          />
          <RangeInput
            name="paddingY"
            value={paddingY}
            handler={handleChange}
          />
          <RangeInput
            name="radius"
            value={radius}
            handler={handleChange}
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
