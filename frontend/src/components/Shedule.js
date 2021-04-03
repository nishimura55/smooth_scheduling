import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Hour } from './Hour';

export const Shedule = () => {
  const schedules = useSelector(state => state.schedules);

  return (
    <div className='shedule-area box'>
      <ul>
        {Object.values(schedules).map(({name, selected}, index) =>
          <Hour name={name} selected={selected} index={index} key={index}/>
        )}
      </ul>
    </div>
  );
}
