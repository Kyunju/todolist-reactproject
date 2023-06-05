import React, { useContext } from 'react';
import { MdClose } from 'react-icons/md';
import { DarkModeContext } from '../App';

export default function TodoItems({
  id,
  text,
  checked,
  handleCheck,
  onRemove,
}) {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <li className={'items'}>
      <div className={'itemWrapper'}>
        <label className={'checkbox'}>
          <input
            type='checkbox'
            onChange={() => {
              handleCheck(id);
            }}
            checked={checked ? true : false}
          />
          <span className={'checkbox-icon'}></span>
        </label>
        <span className={`itemText ${checked && 'checked'}`}>{text}</span>
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
