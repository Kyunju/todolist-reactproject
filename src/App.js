import './App.css';
import { useEffect, useState } from 'react';
import TodoItems from './components/TodoItems';
import TodoSubmit from './components/TodoSubmit';
import { DarkModeProvider } from './context/DarkModeContext';
import Header from './components/Header';

function App() {
  const initialList = JSON.parse(localStorage.getItem('todoList')) || [];
  const [items, setItem] = useState(initialList);
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
    <DarkModeProvider>
      <div className={'wrapper'}>
        <div className={'contentBox'}>
          <Header items={items} />
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
    </DarkModeProvider>
  );
}

export default App;
