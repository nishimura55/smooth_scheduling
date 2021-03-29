import React from 'react';

export const Task = ({ name, hours }) => {
  return (
    <li>{name} ({hours}H)</li>
  );
}
