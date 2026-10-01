const StudentSelector = ({ selectedStudent, onSelect }) => {
  return (
    <div className="student-selector">
      <h2 className="section-title">Select Student</h2>
      <div className="selector-buttons">
        <button
          className={`selector-btn ${selectedStudent === "Amaka" ? "active" : ""}`}
          onClick={() => onSelect("Amaka")}
        >
          Show Amaka
        </button>
        <button
          className={`selector-btn ${selectedStudent === "Chidi" ? "active" : ""}`}
          onClick={() => onSelect("Chidi")}
        >
          Show Chidi
        </button>
      </div>
    </div>
  );
};

export default StudentSelector;
