// /src/components/ListTask.js

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Task from './Task';
import { filterTasks } from '../redux/actions';

function ListTask() {
    const { tasks, filter } = useSelector((state) => state); // Get tasks and filter from Redux state
    const dispatch = useDispatch();                          // Get the Redux dispatch function

    // Filter tasks based on the filter criteria
    const filteredTasks = tasks.filter((task) => {
        if (filter === 'DONE') return task.isDone;
        if (filter === 'NOT_DONE') return !task.isDone;
        return true;
    });

    return (
        <div>
            {/* Buttons to filter tasks by their completion status */}
            <div>
                <button onClick={() => dispatch(filterTasks('ALL'))}>All</button>
                <button onClick={() => dispatch(filterTasks('DONE'))}>Done</button>
                <button onClick={() => dispatch(filterTasks('NOT_DONE'))}>Not Done</button>
            </div>
            {/* Display the list of filtered tasks */}
            <div>
                {filteredTasks.map((task) => (
                    <Task key={task.id} task={task} /> // Render each task using the Task component
                ))}
            </div>
        </div>
    );
}

export default ListTask;
