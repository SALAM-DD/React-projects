const StudentProfile = ({ name, course, level, city, favouriteTechnology }) => {
  return (
    <div className="student-profile">
      <h2 className="section-title">Student Profile</h2>
      <div className="profile-card">
        <div className="profile-avatar">{name.charAt(0)}</div>
        <div className="profile-details">
          <p><span className="label">Name:</span> {name}</p>
          <p><span className="label">Course:</span> {course}</p>
          <p><span className="label">Level:</span> {level}</p>
          <p><span className="label">City:</span> {city}</p>
          <p><span className="label">Favourite Tech:</span> {favouriteTechnology}</p>
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;
