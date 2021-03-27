import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTask } from '../actions';

export const App = () => {
  const tasks = useSelector(state => state.tasks);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTask());
  }, [])

  return (
    <ul>
      {tasks.length && tasks.map(task => (
        <li key={task.id}>{task.name}</li>
      ))}
    </ul>
  );
}
