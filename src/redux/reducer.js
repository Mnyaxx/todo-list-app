// /src/redux/reducer.js

import { ADD_TASK, EDIT_TASK, TOGGLE_TASK, FILTER_TASKS } from './actionTypes';

// Initial state for the Redux store
const initialState = {
    tasks: [],          // Array to store tasks
    filter: 'ALL',      // Filter criteria: ALL, DONE, NOT_DONE
};

// Reducer function to handle state changes based on actions
export const tasksReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            // Add a new task to the tasks array
            return {
                ...state,
                tasks: [...state.tasks, action.payload],
            };
        case EDIT_TASK:
            // Edit the task with the given ID
            return {
                ...state,
                tasks: state.tasks.map((task) =>
                    task.id === action.payload.id
                        ? { ...task, ...action.payload.updates }
                        : task
                ),
            };
        case TOGGLE_TASK:
            // Toggle the 'done' status of the task with the given ID
            return {
                ...state,
                tasks: state.tasks.map((task) =>
                    task.id === action.payload
                        ? { ...task, isDone: !task.isDone }
                        : task
                ),
            };
        case FILTER_TASKS:
            // Set the filter criteria (ALL, DONE, NOT_DONE)
            return {
                ...state,
                filter: action.payload,
            };
        default:
            // Return the current state if no actions match
            return state;
    }
};
