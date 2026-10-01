const StudyTask = ({ task, onComplete, onRemove }) => {
  return (
    <li className={`study-task ${task.completed ? "task-done" : ""}`}>
      <span className="task-title">
        {task.title}
        {task.completed && <span className="completed-badge">Completed</span>}
      </span>
      <div className="task-actions">
        {!task.completed && (
          <button className="btn btn-complete" onClick={() => onComplete(task.id)}>
            Complete
          </button>
        )}
        <button className="btn btn-remove" onClick={() => onRemove(task.id)}>
          Remove
        </button>
      </div>
    </li>
  );
};

export default StudyTask;
