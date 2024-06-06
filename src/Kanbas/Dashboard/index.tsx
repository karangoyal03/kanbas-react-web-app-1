export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card">
              <img src="/images/reactjs.png" alt="React JS" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
              <div className="card-body">
                <a
                  className="wd-dashboard-course-link"
                  href="#/Kanbas/Courses/1234/Home"
                  style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}
                >
                  CS1234 React JS
                </a>
                <p className="wd-dashboard-course-title">
                  Full Stack software developer
                </p>
                <a href="#/Kanbas/Courses/1234/Home"> Go </a>
              </div>
            </div>
          </div>
 
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card">
              <img src="/images/nodejs.png" alt="Node JS" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
              <div className="card-body">
                <a
                  className="wd-dashboard-course-link"
                  href="#/Kanbas/Courses/1234/Home"
                  style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}
                >
                  CS5679 Node JS
                </a>
                <p className="wd-dashboard-course-title">
                Backend Development with Node.js
                </p>
                <a href="#/Kanbas/Courses/1234/Home"> Go </a>
              </div>
            </div>
          </div>
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card">
              <img src="/images/htmlcss.png" alt="HtmlCSS" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
              <div className="card-body">
                <a
                  className="wd-dashboard-course-link"
                  href="#/Kanbas/Courses/1234/Home"
                  style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}
                >
                  CS5680 HtmlCSS
                </a>
                <p className="wd-dashboard-course-title">
                Full Stack Web Development
                </p>
                <a href="#/Kanbas/Courses/1234/Home"> Go </a>
              </div>
            </div>
          </div>
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card">
              <img src="/images/database.jpeg" alt="Database" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
              <div className="card-body">
                <a
                  className="wd-dashboard-course-link"
                  href="#/Kanbas/Courses/1234/Home"
                  style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}
                >
                  CS5681 Database
                </a>
                <p className="wd-dashboard-course-title">
                Database Applications
                </p>
                <a href="#/Kanbas/Courses/1234/Home"> Go </a>
              </div>
            </div>
          </div>
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card">
              <img src="/images/javascript.png" alt="Javascript" style={{ width: '100%', height: '200px', objectFit: 'cover' }}/>
              <div className="card-body">
                <a
                  className="wd-dashboard-course-link"
                  href="#/Kanbas/Courses/1234/Home"
                  style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}
                >
                  CS5682 Javascript
                </a>
                <p className="wd-dashboard-course-title">
                Web Development 
                </p>
                <a href="#/Kanbas/Courses/1234/Home"> Go </a>
              </div>
            </div>
          </div>
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card">
              <img src="/images/python.png" alt="Python" style={{ width: '100%', height: '200px', objectFit: 'cover' }}/>
              <div className="card-body">
                <a
                  className="wd-dashboard-course-link"
                  href="#/Kanbas/Courses/1234/Home"
                  style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}
                >
                  CS5683 Python
                </a>
                <p className="wd-dashboard-course-title">
                Enterprise Applications
                </p>
                <a href="#/Kanbas/Courses/1234/Home"> Go </a>
              </div>
            </div>
          </div>
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card">
              <img src="images/machinelearning.jpg" alt="MachineLearning" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
              <div className="card-body">
                <a
                  className="wd-dashboard-course-link"
                  href="#/Kanbas/Courses/1234/Home"
                  style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}
                >
                  CS5684 MachineLearning
                </a>
                <p className="wd-dashboard-course-title">
                Microservices with Flask
                </p>
                <a href="#/Kanbas/Courses/1234/Home"> Go </a>
              </div>
            </div>
          </div>
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card">
              <img src="/images/reactjs.png" alt="React JS" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
              <div className="card-body">
                <a
                  className="wd-dashboard-course-link"
                  href="#/Kanbas/Courses/1234/Home"
                  style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}
                >
                  CS5685 React JS
                </a>
                <p className="wd-dashboard-course-title">
                Building Web Apps 
                </p>
                <a href="#/Kanbas/Courses/1234/Home"> Go </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}