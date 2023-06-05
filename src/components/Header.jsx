import React from 'react';
import { useDarkMode } from '../context/DarkModeContext';
import TodoCounts from './TodoCounts';

export default function Header({ items }) {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <>
      <button onClick={toggleDarkMode} className='darkModeBtn'>
        {darkMode ? 'Light mode' : 'Dark mode'}
      </button>
      <div className={'title'}>My Tasks</div>
      <TodoCounts items={items} />
    </>
  );
}
