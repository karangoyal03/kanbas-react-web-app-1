import React from 'react';
import { MdDoNotDisturbAlt } from 'react-icons/md';
import { FaCheckCircle, FaFileExport } from 'react-icons/fa';
import { BiImport } from 'react-icons/bi';
import { LiaFileImportSolid, LiaSaveSolid } from 'react-icons/lia';
import { IoMdDownload } from 'react-icons/io';

export default function CourseStatus() {
  return (
    <div id="wd-course-status" style={{ width: '300px' }}>
      <h2>Course Status</h2>
      <div className="d-flex">
        <div className="w-50 pe-1">
          <button className="btn btn-lg btn-secondary w-100 text-nowrap">
            <MdDoNotDisturbAlt className="me-2 fs-5" />
            Unpublish
          </button>
        </div>
        <div className="w-50">
          <button className="btn btn-lg btn-success w-100">
            <FaCheckCircle className="me-2 fs-5" />
            Publish
          </button>
        </div>
      </div>
      <br />
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <BiImport className="me-2 fs-5" />
        Import Existing Content
      </button>
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <LiaFileImportSolid className="me-2 fs-5" />
        Import from Commons
      </button>
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <FaFileExport className="me-2 fs-5" />
        Export Course
      </button>
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <LiaSaveSolid className="me-2 fs-5" />
        Save Course
      </button>
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <IoMdDownload className="me-2 fs-5" />
        Download Course Material
      </button>
    </div>
  );
}
