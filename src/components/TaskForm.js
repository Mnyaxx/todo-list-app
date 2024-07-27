// src/components/TaskForm.js
import React, { useState } from 'react';

function TaskForm({ addTask, taskToEdit, updateTask }) {
  const [name, setName] = useState(taskToEdit ? taskToEdit.name : '');
  const [description, setDescription] = useState(taskToEdit ? taskToEdit.description : '');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && description) {
      if (taskToEdit) {
        updateTask(taskToEdit.id, { name, description });
      } else {
        addTask({ name, description });
      }
      setName('');
      setDescription('');
    } else {
      alert('Both fields are required.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Task Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <textarea
        placeholder="Task Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      <button type="submit">{taskToEdit ? 'Update Task' : 'Add Task'}</button>
    </form>
  );
}

export default TaskForm;
