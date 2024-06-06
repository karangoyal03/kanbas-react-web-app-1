import React from 'react';
import { BsGripVertical } from 'react-icons/bs';
import ModulesControls from './ModulesControls';
import LessonControlButtons from './LessonControlButtons';
import ModuleControlButtons from './ModuleControlButtons';
import './style.css';
import GreenCheckmark from './GreenCheckmark';

export default function Modules() {
  return (
    <div>
     <div className="d-flex justify-content-center mb-3">
      <button className="btn btn-light me-2">Collapse All</button>
      <button className="btn btn-light me-2">View Progress</button>
      <button className="btn btn-light me-2"><GreenCheckmark/>Publish All</button>
      <button className="btn btn-danger"> + Module</button>
    </div>
      <div id="wd-modules">
        <ModulesControls /><br /><br /><br /><br />
        <ul id="wd-modules" className="list-group rounded-0">
          <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
            <div className="wd-title p-3 ps-2 bg-secondary">
              <BsGripVertical className="me-2 fs-3" />
              Week 1.Lecture 1 - Course Introduction, Syllabus, Agenda
              <ModuleControlButtons />
            </div>
            <ul className="wd-lessons list-group rounded-0">
              <li className="wd-lesson list-group-item p-3 ps-1">
                <BsGripVertical className="me-2 fs-3" />
                LEARNING OBJECTIVES
                <LessonControlButtons />
                <ul className="wd-content">
                  <li className="wd-content-item">Introduction to the course</li>
                  <li className="wd-content-item">Learn what is Web Development</li>
                </ul>
              </li>
              <li className="wd-lesson list-group-item p-3 ps-1">
                <BsGripVertical className="me-2 fs-3" />
                Reading
                <LessonControlButtons />
                <ul className="wd-content">
                  <li className="wd-content-item">Full Stack Developer Chapter -1 - Introduction</li>
                  <li className="wd-content-item">Full Stack Developer Chapter -1 - Creating US</li>
                </ul>
              </li>
              <li className="wd-lesson list-group-item p-3 ps-1">
                <BsGripVertical className="me-2 fs-3" />
                Slides
                <LessonControlButtons />
                <ul className="wd-content">
                  <li className="wd-content-item">Introduction to web Development</li>
                  <li className="wd-content-item">Creating an HTTP server with Node.js</li>
                  <li className="wd-content-item">Creating a React Application</li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
            <div className="wd-title p-3 ps-2 bg-secondary">
              Week 1.Lecture 2 - Formatting User Interfaces with HTML
              <ModuleControlButtons />
            </div>
            <ul className="wd-lessons list-group rounded-0">
              <li className="wd-lesson list-group-item p-3 ps-1">
                <BsGripVertical className="me-2 fs-3" />
                LEARNING OBJECTIVES
                <LessonControlButtons />
                <ul className="wd-content">
                  <li className="wd-content-item">Learn how to create User Interfaces with HTML</li>
                  <li className="wd-content-item">Deploy the assignment to Netlify</li>
                </ul>
              </li>
              <li className="wd-lesson list-group-item p-3 ps-1">
                <BsGripVertical className="me-2 fs-3" />
                Slides
                <LessonControlButtons />
                <ul className="wd-content">
                  <li className="wd-content-item">Introduction to HTML and the DOM</li>
                  <li className="wd-content-item">Formatting Web content with headings</li>
                  <li className="wd-content-item">Formatting content with Lists and Tables</li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}
