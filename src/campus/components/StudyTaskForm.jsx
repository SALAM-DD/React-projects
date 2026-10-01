const StudyTaskForm = ({ taskText, setTaskText, onAddTask }) => {
  return (
    <div className="task-form">
      <input
        className="task-input"
        type="text"
        placeholder="Enter a study task..."
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && onAddTask()}
      />
      <button className="btn btn-add" onClick={onAddTask}>
        Add task
      </button>
    </div>
  );
};

export default StudyTaskForm;
