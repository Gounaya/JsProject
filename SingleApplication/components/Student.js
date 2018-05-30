import React from 'react';

var Student =
  (props) =>
    <div>
      <ul>
      <li>{ props.name }</li>
      <li>{ props.firstname }</li>
      <li>{ props.group }</li>
      </ul>
    </div>

export default Student;
