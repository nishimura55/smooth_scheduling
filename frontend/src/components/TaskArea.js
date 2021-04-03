import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTasks } from '../actions';
import { Task } from './Task';
import { Input } from './Input';

export const TaskArea = () => {
  const tasks = useSelector(state => state.tasks);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTasks());
  }, [])

  return (
    <div className='task-area box'>
      <Input/>
      <ul>
        {Object.values(tasks).map(({name, hours}, index) =>
          <Task name={name} hours={hours} index={index} key={index}/>
        )}
      </ul>
    </div>
  );
}
