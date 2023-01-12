import './App.css';
import { useState } from 'react';

function App() {
  const initialList = [
    { id: 0, text: '드림코딩 매일 수강하기', checked: true },
    { id: 1, text: '깃허브 매일 커밋하기', checked: false },
    { id: 2, text: '꿈을 코딩하기', checked: false },
  ];
  const [items, setItem] = useState(initialList);
  const [textBox, setTextBox] = useState('');
  const onRemove = (id) => {
    setItem(items.filter((item) => item.id !== id));
  };
  const updateCheck = (id) => {
    setItem(
      items.map((item) => {
        if (item.id !== id) return item;
        return { ...item, checked: !item.checked };
      })
    );
  };
  return (
    <div className='wrapper'>
      <div className='contentBox'>
        <div className='title'>My Tasks</div>
        <div className='listCount'>{items.length} incomplete, 5 completed</div>
        <ul className='listBox'>
          {items.map((item) => {
            return (
              <li key={item.id} className='items'>
                <div className='itemWrapper'>
                  <input
                    type='checkbox'
                    name='checkbox'
                    className='checkbox'
                    onChange={() => {
                      updateCheck(item.id);
                    }}
                    checked={item.checked ? true : false}
                  />
                  <span>{item.text}</span>
                </div>
                <button
                  className='deleteBtn'
                  onClick={() => {
                    onRemove(item.id);
                  }}
                >
                  삭제
                </button>
              </li>
            );
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
              if (e.target.value == '') return;
              setTextBox(e.target.value);
              setItem((prev) => [
                ...prev,
                { id: new Date(), text: e.target.value, checked: false },
              ]);
              setTextBox('');
            }
          }}
        />
      </div>
    </div>
  );
}

export default App;
