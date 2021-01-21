import React from "react";

const TaskShow = ({ title, status }) => {
  //   console.log(status);
  return (
    <div>
      <h1>{title}</h1>
      <p>{`${status}`}</p>
    </div>
  );
};

export default TaskShow;
