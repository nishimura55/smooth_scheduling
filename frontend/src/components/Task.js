import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { assignTask } from '../actions';

export const Task = (task) => {
  const dispatch = useDispatch();
  const anySelected = useSelector((state) => Object.values(state.schedules).some((s) => s.selected))

  const { name, hours } = task;

  const assign = () => {
    anySelected && dispatch(assignTask(task));
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
