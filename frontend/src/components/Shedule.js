import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Hour } from './Hour';

export const Shedule = () => {
  const schedules = useSelector(state => state.schedules);

  return (
    <div className='shedule-area box'>
      <ul>
        {schedules.map((schedule, index) => 
          <Hour schedule={schedule} times={index+6} key={index}/>
        )}
      </ul>
    </div>
  );
}
