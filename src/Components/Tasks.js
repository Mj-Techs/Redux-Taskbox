import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  TaskWrapper,
  TaskNav,
  Button,
  TaskHeader,
  TaskContainer,
} from "../App-Style";
import TaskForm from "./TaskForm";
import { startGetTasks } from "../Actions/postTask";
import TaskShow from "./TaskShow";
const Tasks = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);
  useEffect(() => {
    dispatch(startGetTasks());
  }, []);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const ToggleModal = () => {
    setIsModalOpen(false);
  };
  return (
    <TaskWrapper>
      <TaskNav>
        <TaskHeader>My Tasks-{tasks.length}</TaskHeader>
        <div>
          <Button onClick={showModal}>Add Task</Button>
          {isModalOpen && <TaskForm open={isModalOpen} toggle={ToggleModal} />}
        </div>
      </TaskNav>
      <TaskContainer>
        {tasks.map((task) => (
          <TaskShow {...task} key={task.id} />
        ))}
      </TaskContainer>
    </TaskWrapper>
  );
};

export default Tasks;
