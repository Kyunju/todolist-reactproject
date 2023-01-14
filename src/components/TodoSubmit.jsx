import React, { useContext, useState } from 'react';
import { IoAdd } from 'react-icons/io5';
import { DarkModeContext } from '../App';
import submitDarkMode from './DarkModeSubmit.module.css';

export default function TodoSubmit({ addItem }) {
  const [todoItem, setTodoItem] = useState('');
  const { darkMode } = useContext(DarkModeContext);
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
          id={darkMode ? submitDarkMode.textBox : 'textBox'}
          placeholder='Todo List'
          value={todoItem}
          onChange={(e) => {
            setTodoItem(e.target.value);
          }}
        />
        <button className={darkMode ? submitDarkMode.submitBtn : 'submitBtn'}>
          <IoAdd />
        </button>
      </form>
    </div>
  );
}
