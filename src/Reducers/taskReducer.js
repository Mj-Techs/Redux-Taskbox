const usersInitialState = [];

const taskReducer = (state = usersInitialState, action) => {
  switch (action.type) {
    case "SET_TASKS": {
      return [...action.payload];
    }
    case "ADD_TASKS": {
      return [...state, action.payload];
    }
    default: {
      return [...state];
    }
  }
};
export default taskReducer;
