import React, { useState } from 'react';
import { IoAdd } from 'react-icons/io5';

export default function TodoSubmit({ addItem }) {
  const [todoItem, setTodoItem] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoItem === '') return;
    addItem(todoItem);
    setTodoItem('');
  };
  return (
    <div className='formWrapper'>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='textBox'
          id={'textBox'}
          placeholder='Todo List'
          value={todoItem}
          onChange={(e) => {
            setTodoItem(e.target.value);
          }}
        />
        <button className={'submitBtn'}>
          <IoAdd />
        </button>
      </form>
    </div>
  );
}
