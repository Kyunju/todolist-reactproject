import React from 'react';

export default function TodoList({ item }) {
  return (
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
  );
}
