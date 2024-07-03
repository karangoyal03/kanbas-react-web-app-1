import React, { useState } from "react";
import { useParams } from 'react-router-dom';
import ModulesControls from "./ModulesControls";
import ModuleControlButtons from "./ModuleControlButtons";
import LessonControlButtons from "./LessonControlButtons";
import { BsGripVertical } from 'react-icons/bs';
import modulesData from '../../Database/modules.json';
import './style.css';

export default function Modules() {
  const { cid } = useParams<{ cid: string }>();
  const [modules, setModules] = useState<any[]>(modulesData);

  const courseModules = modules.filter((module) => module.course === cid);

  console.log('Course ID:', cid);
  console.log('Filtered Modules:', courseModules);

  return (
    <div className="wd-modules">
      <ModulesControls /><br /><br /><br /><br />
      <ul className="list-group rounded-0">
        {courseModules.map((module: any) => (
          <li key={module._id} className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
            <div className="wd-title p-3 ps-2 bg-secondary">
              <BsGripVertical className="me-2 fs-3" />
              <span className="flex-grow-1">{module.name}</span>
              <ModuleControlButtons />
            </div>
            {module.lessons && (
              <ul className="wd-lessons list-group rounded-0">
                {module.lessons.map((lesson: any) => (
                  <li key={lesson._id} className="wd-lesson list-group-item p-3 ps-1">
                    <BsGripVertical className="me-2 fs-3" />
                    {lesson.name}
                    <LessonControlButtons />
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
