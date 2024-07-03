import React from 'react';
import { IoEllipsisVertical } from 'react-icons/io5';
import { BsPlus } from 'react-icons/bs';
import { FaTrash } from 'react-icons/fa';
import { FaPencil } from 'react-icons/fa6';
import GreenCheckmark from './GreenCheckmark';

interface ModuleControlButtonsProps {
  moduleId: string;
  deleteModule: (moduleId: string) => void;
  editModule: (moduleId: string) => void;
}

export default function ModuleControlButtons({ moduleId, deleteModule, editModule }: ModuleControlButtonsProps) {
  return (
    <div className="float-end">
      <FaPencil onClick={() => editModule(moduleId)} className="text-primary me-3" />
      <FaTrash onClick={() => deleteModule(moduleId)} className="text-danger me-2 mb-1" />
      <GreenCheckmark />
      <BsPlus className="fs-4" />
      <IoEllipsisVertical className="fs-4" />
    </div>
  );
}
