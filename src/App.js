import './App.css';
import { useState } from 'react';

function App() {
  const [textBox, setTextBox] = useState('');
  const [items, setItem] = useState([]);
  return (
    <div>
      <ul>
        {items.map((item, index) => {
          <li key={index}>{item}</li>;
        })}
      </ul>
      <input
        type='text'
        name='textBox'
        id='textBox'
        value={textBox}
        onChange={(e) => {
          setTextBox(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            console.log(textBox);
            setTextBox('');
          }
        }}
      />
    </div>
  );
}

export default App;
