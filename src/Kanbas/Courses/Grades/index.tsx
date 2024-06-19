import React from 'react';
import { useParams } from 'react-router-dom';
import db from '../../Database';


const Grades = () => {
  const { cid } = useParams<{ cid: string }>();

  const enrollmentData = db.enrollments.filter(enrollment => enrollment.course === cid);
  const studentIds = enrollmentData.map(enrollment => enrollment.user);
  const students = db.users.filter(user => studentIds.includes(user._id));
  const assignments = db.assignments.filter(assignment => 
    db.modules.find(module => module._id === assignment.module)?.course === cid
  );
  const grades = db.grades.filter(grade => studentIds.includes(grade.user));

  return (
    <div className="container mt-4">
      <h1>Grades for Course {cid}</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Student Name</th>
            {assignments.map(assignment => (
              <th key={assignment._id} scope="col">{assignment.title}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {students.map(student => (
            <tr key={student._id}>
              <td>{student.firstName} {student.lastName}</td>
              {assignments.map(assignment => {
                const grade = grades.find(g => g.user === student._id && g.assignment === assignment._id);
                return (
                  <td key={assignment._id}>{grade ? grade.grade : 'N/A'}</td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Grades;
