// /src/App.js

import React from 'react';
import AddTask from './components/AddTask';
import ListTask from './components/ListTask';
import './App.css';  // Import the custom CSS file

function App() {
    return (
        <div className="App">
            <header className="app-header">
                <h1>My ToDo App</h1>
            </header>
            <main className="app-main">
                <AddTask />
                <ListTask />
            </main>
        </div>
    );
}

export default App;
