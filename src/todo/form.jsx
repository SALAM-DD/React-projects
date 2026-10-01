import { useState } from "react";

export default function TaskForm({ onAddTask }) {
    const [taskInput, setTaskInput] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        const trimmed = taskInput.trim();
        if (!trimmed) return;
        if (onAddTask) {
            onAddTask(trimmed);
        }
        setTaskInput("");
    }

    return (
        <form className="todo-form" onSubmit={handleSubmit}>
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
    );
}