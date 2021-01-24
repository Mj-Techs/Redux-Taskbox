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
import { startGetTasks } from "../Actions/TaskAction";
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
        <TaskHeader animate={{ rotate: 360 }} transition={{ duration: 2 }}>
          My Tasks-{tasks.length}
        </TaskHeader>
        <div>
          <Button onClick={showModal}>Add Task</Button>
          {isModalOpen && <TaskForm open={isModalOpen} toggle={ToggleModal} />}
        </div>
      </TaskNav>
      <TaskContainer>
        {tasks.length === 0 ? (
          <h2 className="task__header">Sorry! There is no task</h2>
        ) : (
          tasks.map((task) => {
            return (
              <TaskShow
                {...task}
                key={task.id}
                open={isModalOpen}
                toggle={ToggleModal}
                showModal={showModal}
              />
            );
          })
        )}
      </TaskContainer>
    </TaskWrapper>
  );
};

export default Tasks;
