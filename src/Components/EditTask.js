import React from "react";
import TaskForm from "./TaskForm";

const EditTask = ({ id, title, status, open, toggle }) => {
  return (
    <div>
      <TaskForm
        id={id}
        title={title}
        status={status}
        open={open}
        toggle={toggle}
      />
    </div>
  );
};

export default EditTask;
