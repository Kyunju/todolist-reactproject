import React, { useContext } from 'react';
import { MdClose } from 'react-icons/md';
import { DarkModeContext } from '../App';
import listDarkMode from './TodoItemsDarkMode.module.css';

export default function TodoItems({
  id,
  text,
  checked,
  handleCheck,
  onRemove,
}) {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <li className={darkMode ? listDarkMode.items : 'items'}>
      <div className={darkMode ? listDarkMode.itemWrapper : 'itemWrapper'}>
        <label className={darkMode ? listDarkMode.checkbox : 'checkbox'}>
          <input
            type='checkbox'
            onChange={() => {
              handleCheck(id);
            }}
            checked={checked ? true : false}
          />
          <span
            className={darkMode ? listDarkMode.checkboxIcon : 'checkbox-icon'}
          ></span>
        </label>
        <span
          className={
            darkMode
              ? `${listDarkMode.itemText} ${checked && listDarkMode.checked}`
              : `itemText ${checked && 'checked'}`
          }
        >
          {text}
        </span>
      </div>
      <button
        className='deleteBtn'
        onClick={() => {
          onRemove(id);
        }}
      >
        <MdClose />
      </button>
    </li>
  );
}
