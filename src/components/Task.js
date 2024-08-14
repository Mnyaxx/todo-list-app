// /src/components/Task.js

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editTask, toggleTask } from '../redux/actions';

function Task({ task }) {
    const [isEditing, setIsEditing] = useState(false);    // State to toggle edit mode
    const [newDescription, setNewDescription] = useState(task.description); // Local state for new description
    const dispatch = useDispatch();                       // Get the Redux dispatch function

    const handleEdit = () => {
        if (isEditing && newDescription.trim()) { // Save the new description if editing mode is on
            dispatch(editTask(task.id, { description: newDescription })); // Dispatch the editTask action
        }
        setIsEditing(!isEditing); // Toggle the editing mode
    };

    return (
        <div>
            {isEditing ? (
                <input
                    type="text"
                    value={newDescription}
                    onChange={(e) => setNewDescription(e.target.value)} // Update new description state
                />
            ) : (
                <span
                    style={{ textDecoration: task.isDone ? 'line-through' : 'none' }} // Apply strikethrough if done
                >
                    {task.description}
                </span>
            )}
            <button onClick={() => dispatch(toggleTask(task.id))}>
                {task.isDone ? 'Undo' : 'Done'} // Button to toggle task completion
            </button>
            <button onClick={handleEdit}>
                {isEditing ? 'Save' : 'Edit'} // Button to save or edit the task
            </button>
        </div>
    );
}

export default Task;
