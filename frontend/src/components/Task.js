import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { assignTask } from '../actions';

export const Task = ({ name, hours }) => {
  const dispatch = useDispatch();
  const anySelected = useSelector((state) => state.schedules.some((s) => s.selected))

  const assign = () => {
    anySelected && dispatch(assignTask(name));
  };

  return (
    <li className='task'>
      {name} ({hours}H)
      {hours == 0 ?
        <button className='check'> ✔︎ </button> :
        <button onClick={assign} className='un-check'> → </button>
      }
    </li>
  );
}
