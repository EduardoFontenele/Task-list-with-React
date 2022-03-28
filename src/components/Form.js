import React from 'react';
import Proptypes from 'prop-types';
import { FaPlus } from 'react-icons/fa';
// import '../../css/App.css';

export default function Form({ handleSubmit, handleChange, newTask }) {
  return (
    <form onSubmit={handleSubmit} action="#" className="task-form">
      <input
        onChange={handleChange}
        type="text"
        value={newTask}
        placeholder="Tarefa"
      />
      <button type="submit">
        <FaPlus />
      </button>
    </form>
  );
}

Form.propTypes = {
  handleSubmit: Proptypes.func.isRequired,
  handleChange: Proptypes.func.isRequired,
  newTask: Proptypes.string.isRequired,
};
