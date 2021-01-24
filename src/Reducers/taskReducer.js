const usersInitialState = [];

const taskReducer = (state = usersInitialState, action) => {
  switch (action.type) {
    case "GET_TASKS": {
      return [...action.payload];
    }
    case "ADD_TASKS": {
      return [action.payload, ...state];
    }
    case "REMOVE_TASK": {
      return state.filter((task) => task.id !== action.payload.id);
    }
    case "EDIT_TASK": {
      return state.map((task) => {
        if (task.id === action.payload.id) {
          return { ...task, ...action.payload };
        } else {
          return { ...task };
        }
      });
    }
    default: {
      return [...state];
    }
  }
};
export default taskReducer;
