import React from 'react';
import Proptypes from 'prop-types';
import { FaEdit, FaWindowClose } from 'react-icons/fa';

export default function Tasks({ tasks, handleEdit, handleDelete }) {
  return (
    <ul className="task-list">
      {tasks.map((task, index) => (
        <li key={task}>
          {task}
          <div>
            <FaEdit
              onClick={(e) => { handleEdit(e, index); }}
              className="edit"
            />
            <FaWindowClose
              onClick={(e) => { handleDelete(e, index); }}
              className="delete"
            />
          </div>
        </li>
      ))}
    </ul>
  );
}

Tasks.propTypes = {
  tasks: Proptypes.array.isRequired,
  handleEdit: Proptypes.func.isRequired,
  handleDelete: Proptypes.func.isRequired,
};
