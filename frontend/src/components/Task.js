import React from 'react';

export const Task = ({ name, hours }) => {
  const assignTask = () => {
    console.log('hoge');
  };

  return (
    <li className='task'>
      {name} ({hours}H)
      {hours == 0 ?
        <button className='check'> ✔︎ </button> :
        <button onClick={assignTask} className='un-check'> → </button>
      }
    </li>
  );
}
