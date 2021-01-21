import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore } from "./Store/ConfigureStore";
import App from "./App";
import "./index.css";
const store = configureStore();
store.subscribe(() => {
  console.log(store.getState());
});
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
