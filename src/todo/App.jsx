import { useState } from "react";
import "./App.css";

export default function App() {
    const [tasks, setTasks] = useState([]);
    const [taskInput, setTaskInput] = useState("");

    function addTask(e) {
        if (e) e.preventDefault();
        const trimmed = taskInput.trim();
        if (!trimmed) return;
        setTasks((prevTasks) => [...prevTasks, trimmed]);
        setTaskInput("");
    }

    function removeTask(indexToRemove) {
        setTasks((prevTasks) => prevTasks.filter((_, index) => index !== indexToRemove));
    }

    function removeLastTask() {
        setTasks((prevTasks) => prevTasks.slice(0, -1));
    }

    return (
        <main className="todo-app">
            <div className="todo-card">
                <header className="todo-header">

                    <h1>My To-Do List</h1>
                    <p className="todo-subtitle">Type a task and click Add to see it appear live below.</p>
                </header>


                <form className="todo-form" onSubmit={addTask}>
                    <input
                        type="text"
                        className="todo-input"
                        placeholder="Add a task..."
                        value={taskInput}
                        onChange={(e) => setTaskInput(e.target.value)}
                        autoFocus
                    />
                    <button type="submit" className="btn-add">
                        Add
                    </button>
                </form>


                <div className="todo-list-wrapper">
                    {tasks.length === 0 ? (
                        <div className="todo-empty">
                            <span className="empty-icon"></span>
                            <p>No tasks yet. Type a task above and click <strong>Add</strong>!</p>
                        </div>
                    ) : (
                        <ul className="todo-list">
                            {tasks.map((task, index) => (
                                <li key={index} className="todo-item">

                                    <span className="todo-text">{task}</span>
                                    <button
                                        type="button"
                                        className="btn-remove"
                                        onClick={() => removeTask(index)}
                                        title="Remove task"
                                    >
                                        Remove
                                    </button>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                {tasks.length > 0 && (
                    <div className="todo-footer">
                        <span className="task-count">
                            <strong>{tasks.length}</strong> {tasks.length === 1 ? "task" : "tasks"}
                        </span>
                        <div className="footer-actions">
                            <button
                                type="button"
                                className="btn-secondary"
                                onClick={removeLastTask}
                                title="Remove the last task"
                            >
                                Remove Last
                            </button>
                            <button
                                type="button"
                                className="btn-secondary btn-clear"
                                onClick={() => setTasks([])}
                                title="Clear all tasks"
                            >
                                Clear All
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </main>
    );
}