import StudyTask from "./StudyTask";

const StudyTaskList = ({ tasks, onComplete, onRemove }) => {
  if (tasks.length === 0) {
    return (
      <div className="task-list-empty">
        <p>No tasks yet. Add one above!</p>
      </div>
    );
  }

  const completedCount = tasks.filter((t) => t.completed).length;

  return (
    <div className="task-list">
      <p className="task-counter">
        {completedCount} of {tasks.length} tasks completed
      </p>
      <ul className="task-ul">
        {tasks.map((task) => (
          <StudyTask
            key={task.id}
            task={task}
            onComplete={onComplete}
            onRemove={onRemove}
          />
        ))}
      </ul>
    </div>
  );
};

export default StudyTaskList;
