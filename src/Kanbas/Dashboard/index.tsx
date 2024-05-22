import React from "react";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <h2 id="wd-dashboard-published">Published Courses (7)</h2>
      <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <img src="/images/reactjs.png" width={200} alt="React JS" />
          <div>
            <a className="wd-dashboard-course-link" href="#/Kanbas/Courses/1234/Home">
              CS1234 React JS
            </a>
            <p className="wd-dashboard-course-title">
              Full Stack software developer
            </p>
            <a href="#/Kanbas/Courses/1234/Home"> Go </a>
          </div>
        </div>
        <div className="wd-dashboard-course">
          <img src="/images/nodejs.png" width={200} alt="Node JS" />
          <div>
            <a className="wd-dashboard-course-link" href="#/Kanbas/Courses/2345/Home">
              CS2345 Node JS
            </a>
            <p className="wd-dashboard-course-title">
              Backend development with Node.js
            </p>
            <a href="#/Kanbas/Courses/2345/Home"> Go </a>
          </div>
        </div>
        <div className="wd-dashboard-course">
          <img src="/images/htmlcss.png" width={200} alt="HTML and CSS" />
          <div>
            <a className="wd-dashboard-course-link" href="#/Kanbas/Courses/3456/Home">
              CS3456 HTML and CSS
            </a>
            <p className="wd-dashboard-course-title">
              Web development with HTML and CSS
            </p>
            <a href="#/Kanbas/Courses/3456/Home"> Go </a>
          </div>
        </div>
        <div className="wd-dashboard-course">
          <img src="/images/javascript.png" width={200} alt="JavaScript" />
          <div>
            <a className="wd-dashboard-course-link" href="#/Kanbas/Courses/4567/Home">
              CS4567 JavaScript
            </a>
            <p className="wd-dashboard-course-title">
              Advanced JavaScript programming
            </p>
            <a href="#/Kanbas/Courses/4567/Home"> Go </a>
          </div>
        </div>
        <div className="wd-dashboard-course">
          <img src="/images/python.png" width={200} alt="Python" />
          <div>
            <a className="wd-dashboard-course-link" href="#/Kanbas/Courses/5678/Home">
              CS5678 Python
            </a>
            <p className="wd-dashboard-course-title">
              Data Science with Python
            </p>
            <a href="#/Kanbas/Courses/5678/Home"> Go </a>
          </div>
        </div>
        <div className="wd-dashboard-course">
          <img src="/images/machinelearning.jpg" width={200} alt="Machine Learning" />
          <div>
            <a className="wd-dashboard-course-link" href="#/Kanbas/Courses/6789/Home">
              CS6789 Machine Learning
            </a>
            <p className="wd-dashboard-course-title">
              Introduction to Machine Learning
            </p>
            <a href="#/Kanbas/Courses/6789/Home"> Go </a>
          </div>
        </div>
        <div className="wd-dashboard-course">
          <img src="/images/database.jpeg" width={200} alt="Database Systems" />
          <div>
            <a className="wd-dashboard-course-link" href="#/Kanbas/Courses/7890/Home">
              CS7890 Database Systems
            </a>
            <p className="wd-dashboard-course-title">
              Principles of Database Systems
            </p>
            <a href="#/Kanbas/Courses/7890/Home"> Go </a>
          </div>
        </div>
      </div>
    </div>
  );
}
