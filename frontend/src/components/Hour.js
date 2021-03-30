import React from 'react';

export const Hour = ({ schedule, times }) => {

  return (
    <li>
      <div className='hour'></div>
      <div className='hour-index'>{times}</div>
    </li>
  );
}
