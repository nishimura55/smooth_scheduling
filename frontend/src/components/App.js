import React from 'react';
import { TaskArea } from './TaskArea';
import { Shedule } from './Shedule';

export const App = () =>
  (
    <div className='main-area'>
      <TaskArea/>
      <Shedule/>
    </div>
  )
