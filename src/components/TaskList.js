// src/components/TaskList.js
import React from 'react';
import TaskItem from './TaskItem';

function TaskList({ tasks, deleteTask, markCompleted, editTask }) {
  return (
    <div>
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          markCompleted={markCompleted}
          editTask={editTask}
        />
      ))}
    </div>
  );
}

export default TaskList;
