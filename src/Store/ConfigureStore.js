import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import taskReducer from "../Reducers/taskReducer";
export const configureStore = () => {
  const store = createStore(
    combineReducers({
      tasks: taskReducer,
    }),
    applyMiddleware(thunk)
  );
  return store;
};
