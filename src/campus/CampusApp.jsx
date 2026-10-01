import { useState } from "react";
import Header from "./components/Header";
import StudentSelector from "./components/StudentSelector";
import StudentProfile from "./components/StudentProfile";
import AttendancePanel from "./components/AttendancePanel";
import StudyTaskForm from "./components/StudyTaskForm";
import StudyTaskList from "./components/StudyTaskList";
import "./Campus.css";

const students = {
  Amaka: {
    name: "Amaka Okafor",
    course: "React Development",
    level: "Beginner",
    city: "Lagos",
    favouriteTechnology: "JavaScript",
  },
  Chidi: {
    name: "Chidi Mensah",
    course: "Frontend Engineering",
    level: "Beginner",
    city: "Abuja",
    favouriteTechnology: "CSS",
  },
};

const CampusApp = () => {
  const [selectedStudent, setSelectedStudent] = useState("Amaka");
  const [taskText, setTaskText] = useState("");
  const [tasks, setTasks] = useState([
    { id: 1, title: "Review React props", completed: false },
    { id: 2, title: "Practise useState", completed: false },
  ]);

  const addTask = () => {
    if (!taskText.trim()) return;
    setTasks([...tasks, { id: Date.now(), title: taskText.trim(), completed: false }]);
    setTaskText("");
  };

  const completeTask = (id) => {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, completed: true } : t)));
  };

  const removeTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const student = students[selectedStudent];

  return (
    <div className="campus-wrapper">
      <Header title="Campus Student Hub" />

      <main className="campus-main">
        <section className="campus-section">
          <StudentSelector
            selectedStudent={selectedStudent}
            onSelect={setSelectedStudent}
          />
        </section>

        <section className="campus-section">
          <StudentProfile
            name={student.name}
            course={student.course}
            level={student.level}
            city={student.city}
            favouriteTechnology={student.favouriteTechnology}
          />
        </section>

        <section className="campus-section">
          <AttendancePanel />
        </section>

        <section className="campus-section">
          <h2 className="section-title">Study Tasks</h2>
          <StudyTaskForm
            taskText={taskText}
            setTaskText={setTaskText}
            onAddTask={addTask}
          />
          <StudyTaskList
            tasks={tasks}
            onComplete={completeTask}
            onRemove={removeTask}
          />
        </section>
      </main>
    </div>
  );
};

export default CampusApp;
