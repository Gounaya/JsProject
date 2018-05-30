import React from 'react';

import Student from './Student';

import list from '../controllers/students.js';

var StudentsList =
  () => {
    let studentsList = list.map(
      student => <Student {...student} key={student._id}/>
    );

    return <div>
      <h3>Students List</h3>
        {studentsList}
    </div>
    }
export default StudentsList;
