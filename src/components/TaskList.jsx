import React, { useState } from 'react';
import '../stylesheets/TaskList.css';
import Form from './Form';
import Task from './Task';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  const AddTask = task => {
    if (task.text.trim()) {
      task.text = task.text.trim();

      const taskUpdated = [task, ...tasks];
      setTasks(taskUpdated);
    }
  };

  const deleteTask = id => {
    const taskUpdated = tasks.filter(task => task.id !== id);
    setTasks(taskUpdated);
  };

  const completeTask = id => {
    const taskUpdated = tasks.map(task => {
      if (task.id === id) {
        task.completed = !task.completed;
      }
      return task;
    });

    setTasks(taskUpdated);
  };

  return(
    <>
      <Form onSubmit={AddTask}/>
      <div className='task-list-container'>
        {
          tasks.map((task) =>
            <Task 
            key={task.id}
            id={task.id}
            text={task.text}
            completed={task.completed}
            completeTask={completeTask}
            deleteTask={deleteTask} />
          )
        }
      </div>
    </>
  );
};

export default TaskList;