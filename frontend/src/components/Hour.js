import React from 'react';
import { useDispatch } from 'react-redux';
import { turnOffSelected, turnOnSelectedHours } from '../actions';

export const Hour = ({ name, selected, index }) => {
  const dispatch = useDispatch();

  const toggleSelected = () => {
    dispatch(selected ? turnOffSelected(index) : turnOnSelectedHours(index));
  }

  const className = selected ? 'hour selected' : 'hour';

  return (
    <li>
      <div className={className} onClick={toggleSelected}>{name}</div>
      <div className='hour-index'>{index+6}</div>
    </li>
  );
}
