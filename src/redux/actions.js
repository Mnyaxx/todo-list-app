// /src/redux/actions.js

import { ADD_TASK, EDIT_TASK, TOGGLE_TASK, FILTER_TASKS } from './actionTypes';

// Action creator for adding a new task
export const addTask = (task) => ({
    type: ADD_TASK,
    payload: task,
});

// Action creator for editing an existing task
export const editTask = (id, updates) => ({
    type: EDIT_TASK,
    payload: { id, updates },
});

// Action creator for toggling the 'done' status of a task
export const toggleTask = (id) => ({
    type: TOGGLE_TASK,
    payload: id,
});

// Action creator for filtering tasks by their status (all, done, not done)
export const filterTasks = (filter) => ({
    type: FILTER_TASKS,
    payload: filter,
});
