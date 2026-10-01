import { useState } from "react";


export function AttendanceCounter({ studentName, className = "" }) {
    const [presentCount, setPresentCount] = useState(0);

    function markPresent() {
        setPresentCount((currentCount) => currentCount + 1);
    }


    function resetCount() {
        setPresentCount(0);
    }

    return (
        <section className={`attendance-card ${className}`}>
            <div className="card-header">
                <h2>{studentName}</h2>

                <span className={`status-pill ${presentCount > 0 ? "status-present" : "status-absent"}`}>
                    {presentCount > 0 ? "Present" : "Not marked"}
                </span>
            </div>

            <p className="present-count">
                Present: <span className="counter-value">{presentCount}</span>
            </p>

            <div className="button-group">
                <button className="btn-mark" onClick={markPresent}>
                    Mark present
                </button>


                <button
                    className="btn-reset"
                    onClick={resetCount}
                    disabled={presentCount === 0}
                    title="Reset counter to 0"
                >
                    Reset
                </button>
            </div>
        </section>
    );
}


