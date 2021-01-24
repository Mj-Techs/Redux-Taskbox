import axios from "axios";

// Create Task
const addTask = (user) => {
  return { type: "ADD_TASKS", payload: user };
};

export const postTask = (data) => {
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

// Get Task
const setTasks = (tasks) => {
  return { type: "GET_TASKS", payload: tasks };
};

export const startGetTasks = () => {
  return (dispatch) => {
    axios
      .get("http://localhost:3033/api/tasks")
      .then((response) => {
        const tasks = response.data.reverse();
        dispatch(setTasks(tasks));
      })
      .catch((err) => {
        alert(err.message);
      });
  };
};

// deleteTask
const deleteTask = (task) => {
  return { type: "REMOVE_TASK", payload: task };
};
export const taskRemover = (id) => {
  return (dispatch) => {
    axios
      .delete(`http://localhost:3033/api/tasks/${id}`)
      .then((response) => {
        const result = response.data;
        console.log(result);
        dispatch(deleteTask(result));
      })
      .catch((err) => alert(err.message));
  };
};

// Edit Task

const editTask = (task) => {
  return { type: "EDIT_TASK", payload: task };
};

export const TaskUpdater = (id, data) => {
  return (dispatch) => {
    axios
      .put(`http://localhost:3033/api/tasks/${id}`, data)
      .then((response) => {
        const result = response.data;
        dispatch(editTask(result));
      })
      .catch((err) => alert(err.message));
  };
};
