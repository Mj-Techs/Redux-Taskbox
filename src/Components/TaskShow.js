import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { TaskDiv } from "../App-Style";
import { taskRemover } from "../Actions/TaskAction";
import EditTask from "./EditTask";
const TaskShow = ({ title, status, id }) => {
  const [editTask, setEditTask] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(taskRemover(id));
  };
  const handleEdit = () => {
    setEditTask(true);
    setIsModalOpen(true);
  };
  const ToggleModal = () => {
    setIsModalOpen(false);
  };

  return (
    <TaskDiv status={status}>
      <div className="title">{title}</div>
      <div className="icon">
        <MdDelete
          size={25}
          className="delete"
          onClick={() => {
            handleDelete(id);
          }}
        />
        <FaEdit size={25} onClick={handleEdit} />
        {editTask && (
          <EditTask
            id={id}
            title={title}
            status={status}
            open={isModalOpen}
            toggle={ToggleModal}
          />
        )}
      </div>
    </TaskDiv>
  );
};

export default TaskShow;
