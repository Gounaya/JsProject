import StudentsList from './components/StudentsList.js';
import React from 'react';
import ReactDOM from 'react-dom';

var studentList =
  () =>
    ReactDOM.render(<StudentsList />,
      document.getElementById("StudentsList"));

window.addEventListener("DOMContentLoaded", studentList);
