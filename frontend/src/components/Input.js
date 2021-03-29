import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../actions';

export const Input = () => {
  const [inputTextValue, setInputTextValue] = useState('');
  const [inputNumberValue, setInputNumberValue] = useState('');
  const dispatch = useDispatch();

  const submitTask = (e) => {
    e.preventDefault();
    dispatch(addTask(inputTextValue, inputNumberValue));
    setInputTextValue('');
    setInputNumberValue('');
  };

  const handleTextInput = (e) => {
    setInputTextValue(e.target.value);
  };

  const handleNumberInput = (e) => {
    setInputNumberValue(e.target.value);
  };

  return (
    <>
      <form onSubmit={submitTask}>
        <input type='text' onChange={handleTextInput} value={inputTextValue}/>
        <input type='number' onChange={handleNumberInput} value={inputNumberValue} className='number-input'/>
        <button type='submit'>登録</button>
      </form>
    </>
  );
}
