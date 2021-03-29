import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../actions';

export const Input = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();

  // const token = document.querySelector('meta[name="csrf-token"]').content;

  const submitTask = (e) => {
    e.preventDefault();
    dispatch(addTask(inputValue));
  }

  const handleInput = (e) => {
    setInputValue(e.target.value);
  }

  return (
    <>
      <form onSubmit={submitTask}>
        <input onChange={handleInput} value={inputValue}/>
        <button type='submit'>登録</button>
      </form>
    </>
  );
}
