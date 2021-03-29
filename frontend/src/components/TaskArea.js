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
    <>
      <Input/>
      <ul>
        {tasks.length && tasks.map((name, index) =>
          <Task name={name} key={index}/>
        )}
      </ul>
    </>
  );
}
