// /src/components/AddTask.js

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/actions';

function AddTask() {
    const [description, setDescription] = useState('');  // Local state for the task description
    const dispatch = useDispatch();                     // Get the Redux dispatch function

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent form submission from refreshing the page
        if (description.trim()) { // Check if the description is not empty
            dispatch(addTask({ id: Date.now(), description, isDone: false })); // Dispatch the addTask action
            setDescription(''); // Clear the input field
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Enter task description"
                value={description}
                onChange={(e) => setDescription(e.target.value)} // Update local state on input change
            />
            <button type="submit">Add Task</button>
        </form>
    );
}

export default AddTask;
