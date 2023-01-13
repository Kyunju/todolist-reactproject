import React from 'react';

export default function TodoCounts({ items }) {
  return (
    <div className='listCount'>
      {items.filter((item) => !item.checked).length} incomplete,{' '}
      {items.filter((item) => item.checked).length} completed
    </div>
  );
}
