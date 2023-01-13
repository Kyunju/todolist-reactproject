import './App.css';
import { useState } from 'react';
import TodoItems from './components/TodoItems';
import TodoCounts from './components/TodoCounts';
import { IoAdd } from 'react-icons/io5';

function App() {
  const initialList = [
    { id: 0, text: '드림코딩 매일 수강하기', checked: true },
    { id: 1, text: '깃허브 매일 커밋하기', checked: false },
    { id: 2, text: '꿈을 코딩하기', checked: false },
  ];
  const [items, setItem] = useState(initialList);
  const [textBox, setTextBox] = useState('');
  console.log(items);
  const onRemove = (id) => {
    setItem(items.filter((item) => item.id !== id));
  };
  const handleCheck = (id) => {
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
        <TodoCounts items={items} />
        <section className='todoView'>
          <h6 className='listTitle'>Incomplete</h6>
          <ul className='listBox'>
            {items
              .filter((item) => !item.checked)
              .map((item) => {
                return (
                  <TodoItems
                    key={item.id}
                    id={item.id}
                    text={item.text}
                    checked={item.checked}
                    handleCheck={handleCheck}
                    onRemove={onRemove}
                  />
                );
              })}
          </ul>
          <h6 className='listTitle'>Complete</h6>
          <ul className='listBox'>
            {items
              .filter((item) => item.checked)
              .map((item) => {
                return (
                  <TodoItems
                    key={item.id}
                    id={item.id}
                    text={item.text}
                    checked={item.checked}
                    handleCheck={handleCheck}
                    onRemove={onRemove}
                  />
                );
              })}
          </ul>
        </section>
        <section className='formView'>
          <div className='formWrapper'>
            <input
              type='text'
              name='textBox'
              id='textBox'
              placeholder='Todo List'
              value={textBox}
              onChange={(e) => {
                setTextBox(e.target.value);
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  if (e.target.value === '') return;
                  setTextBox(e.target.value);
                  setItem((prev) => [
                    ...prev,
                    {
                      id: new Date().toLocaleString(),
                      text: e.target.value,
                      checked: false,
                    },
                  ]);
                  setTextBox('');
                }
              }}
            />
            <button className='submitBtn'>
              <IoAdd />
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
