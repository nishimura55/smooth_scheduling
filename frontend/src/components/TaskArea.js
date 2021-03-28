import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTask } from '../actions';
import { Task } from './Task';

export const TaskArea = () => {
  const tasks = useSelector(state => state.tasks);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTask());
  }, [])

  return (
    <ul>
      {tasks.length && tasks.map(task => (
        <Task name={task.name} key={task.id}/>
      ))}
    </ul>
  );
}
