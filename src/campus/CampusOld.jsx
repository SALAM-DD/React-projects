import React, { useState } from 'react';
import Header from './components/Header';
import StudentSelector from './components/StudentSelector';
import StudentProfile from './components/StudentProfile';
import AttendanceTracker from './components/AttendanceTracker';
import StudyTaskManager from './components/StudyTaskManager';

const App = () => {
    const [selectedStudent, setSelectedStudent] = useState(null);
    const [presentCount, setPresentCount] = useState(0);
    const [absentCount, setAbsentCount] = useState(0);
    const [taskText, setTaskText] = useState('');
    const [tasks, setTasks] = useState([]);

    const handleAttendance = (status) => {
        if (status === 'present') {
            setPresentCount(presentCount + 1);
        } else {
            setAbsentCount(absentCount + 1);
        }
    };

    const addTask = () => {
        if (taskText) {
            setTasks([...tasks, { title: taskText, completed: false }]);
            setTaskText('');
        }
    };

    return (
        <div>
            <Header />
            <StudentSelector setSelectedStudent={setSelectedStudent} />
            {selectedStudent && (
                <>
                    <StudentProfile
                        name={selectedStudent.name}
                        course={selectedStudent.course}
                        level={selectedStudent.level}
                        city={selectedStudent.city}
                        favouriteTechnology={selectedStudent.favouriteTechnology}
                    />
                    <AttendanceTracker
                        presentCount={presentCount}
                        absentCount={absentCount}
                        handleAttendance={handleAttendance}
                    />
                    <StudyTaskManager
                        taskText={taskText}
                        setTaskText={setTaskText}
                        addTask={addTask}
                        tasks={tasks}
                    />
                </>
            )}
        </div>
    );
};

export default App;