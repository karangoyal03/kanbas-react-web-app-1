import React from 'react';
import { useParams, Link } from 'react-router-dom';
import db from '../../Database/assignments.json';

const AssignmentEditor = () => {
  const { cid, aid } = useParams<{ cid: string, aid: string }>();
  const assignment = db.find((assignment) => assignment._id === aid);

  if (!assignment) {
    return <div>Assignment not found</div>;
  }

  return (
    <div className="container mt-4">
      <h1>Edit Assignment</h1>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">Title</label>
        <input type="text" className="form-control" id="title" value={assignment.title} readOnly />
      </div>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">Description</label>
        <textarea className="form-control" id="description" rows={3} value={assignment.description} readOnly></textarea>
      </div>
      <div className="mb-3">
        <label htmlFor="points" className="form-label">Points</label>
        <input type="number" className="form-control" id="points" value={assignment.points} readOnly />
      </div>
      <div className="mb-3">
        <label htmlFor="availableDate" className="form-label">Available Date</label>
        <input type="date" className="form-control" id="availableDate" value={assignment.availableDate} readOnly />
      </div>
      <div className="mb-3">
        <label htmlFor="dueDate" className="form-label">Due Date</label>
        <input type="date" className="form-control" id="dueDate" value={assignment.dueDate} readOnly />
      </div>
      <div className="d-flex justify-content-end">
        <Link to={`/Kanbas/Courses/${cid}/Assignments`} className="btn btn-secondary me-2">Cancel</Link>
        <Link to={`/Kanbas/Courses/${cid}/Assignments`} className="btn btn-primary">Save</Link>
      </div>
    </div>
  );
};

export default AssignmentEditor;
