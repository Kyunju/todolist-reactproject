import './App.css';
import { createContext, useEffect, useState } from 'react';
import TodoItems from './components/TodoItems';
import TodoCounts from './components/TodoCounts';
import TodoSubmit from './components/TodoSubmit';
import DarkMode from './AppDarkMode.module.css';

export const DarkModeContext = createContext();

function App() {
  const initialList = JSON.parse(localStorage.getItem('todoList')) || [];
  const [items, setItem] = useState(initialList);
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode((mode) => !mode);
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
  const addItem = (value) => {
    setItem((prev) => [
      ...prev,
      {
        id: new Date().toLocaleString(),
        text: value,
        checked: false,
      },
    ]);
  };

  useEffect(() => {
    localStorage.setItem('todoList', JSON.stringify(items));
  }, [items]);

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      <div className={'wrapper'}>
        <div className={'contentBox'}>
          <button onClick={() => toggleDarkMode()} className='darkModeBtn'>
            {darkMode ? 'Light mode' : 'Dark mode'}
          </button>
          <div className={'title'}>My Tasks</div>
          <TodoCounts items={items} />
          <section className='todoView'>
            <h6 className={'listTitle'}>Incomplete</h6>
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
            <h6 className={'listTitle'}>Complete</h6>
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
            <TodoSubmit addItem={addItem} />
          </section>
        </div>
      </div>
    </DarkModeContext.Provider>
  );
}

export default App;
