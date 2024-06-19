import { Link } from "react-router-dom";
import db from "../Database";

export default function Dashboard() {
  const courses = db.courses;
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>
      <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {courses.map((course) => {
            // Proper placement for variable declaration
            const imgPath = `/images/${course.image}.jpg`;
            return (
              <div key={course._id} className="wd-dashboard-course col" style={{ width: "300px" }}>
                <div className="card rounded-3 overflow-hidden">
                  <Link to={`/Kanbas/Courses/${course._id}/Home`} className="text-decoration-none">
                    <img src={course.image} alt={course.name} style={{ width: '100%', height: '160px', objectFit: 'cover' }} />
                    <div className="card-body">
                      <span className="wd-dashboard-course-link"
                        style={{ color: "navy", fontWeight: "bold" }} >
                        {course.name}
                      </span>
                      <p className="wd-dashboard-course-title card-text" style={{ maxHeight: "53px", overflow: "hidden" }}>
                        {course.description}
                      </p>
                    </div>
                  </Link>
                  <div className="card-footer">
                    <Link to={`/Kanbas/Courses/${course._id}/Home`} className="btn btn-primary">Go</Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
