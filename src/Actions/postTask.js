import axios from "axios";

const addTask = (user) => {
  return { type: "ADD_TASKS", payload: user };
};

export const postUser = (data) => {
  return (dispatch) => {
    axios
      .post("http://localhost:3033/api/tasks", data)
      .then((response) => {
        const result = response.data;
        dispatch(addTask(result));
      })
      .catch((err) => alert(err.message));
  };
};

const setTasks = (tasks) => {
  return { type: "SET_TASKS", payload: tasks };
};

export const startGetTasks = () => {
  return (dispatch) => {
    axios
      .get("http://localhost:3033/api/tasks")
      .then((response) => {
        const tasks = response.data;
        dispatch(setTasks(tasks));
      })
      .catch((err) => {
        alert(err.message);
      });
  };
};
