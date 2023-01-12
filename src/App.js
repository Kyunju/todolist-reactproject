import './App.css';
import { useState } from 'react';

function App() {
  const [items, setItem] = useState([]);
  const [textBox, setTextBox] = useState('');
  return (
    <div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
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
            setTextBox(e.target.value);
            setItem((prev) => [...prev, textBox]);
            setTextBox('');
          }
        }}
      />
    </div>
  );
}

export default App;
