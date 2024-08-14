// /src/redux/store.js

import { createStore } from 'redux';
import { tasksReducer } from './reducer';

// Create the Redux store with the tasksReducer
const store = createStore(
    tasksReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // Enable Redux DevTools
);

export default store;
