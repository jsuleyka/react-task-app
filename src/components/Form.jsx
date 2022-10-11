import React, { useState } from "react";
import '../stylesheets/Form.css';
import { v4 as uuidv4 } from 'uuid';

const Form = props => {
  const [input, setInput] = useState('');

  const manageChange = e => {
    setInput(e.target.value);
  };

  const manageShipp = e => {
    e.preventDefault();

    const newTask = {
      id: uuidv4(),
      text: input,
      completed: false
    };

    props.onSubmit(newTask);
  };

  return(
    <form 
      className='form-container'
      onSubmit={manageShipp}>
      <input 
        className='task-input'
        type='text'
        name='text'
        placeholder='Type a Task..'
        onChange={manageChange}
        />
        <button className='task-button'>Add Task</button>
    </form>
  );
};

export default Form;