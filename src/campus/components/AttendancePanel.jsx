import { useState } from "react";

const AttendancePanel = () => {
  const [presentCount, setPresentCount] = useState(0);
  const [absentCount, setAbsentCount] = useState(0);

  const markPresent = () => setPresentCount(presentCount + 1);
  const markAbsent = () => setAbsentCount(absentCount + 1);
  const resetAttendance = () => {
    setPresentCount(0);
    setAbsentCount(0);
  };

  return (
    <div className="attendance-panel">
      <h2 className="section-title">Attendance</h2>
      <div className="attendance-counts">
        <div className="count-box present-box">
          <span className="count-number">{presentCount}</span>
          <span className="count-label">Present</span>
        </div>
        <div className="count-box absent-box">
          <span className="count-number">{absentCount}</span>
          <span className="count-label">Absent</span>
        </div>
      </div>
      <div className="attendance-buttons">
        <button className="btn btn-present" onClick={markPresent}>Mark present</button>
        <button className="btn btn-absent" onClick={markAbsent}>Mark absent</button>
        <button className="btn btn-reset" onClick={resetAttendance}>Reset attendance</button>
      </div>
    </div>
  );
};

export default AttendancePanel;
