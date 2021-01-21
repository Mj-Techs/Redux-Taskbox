import React from "react";
import { Route } from "react-router-dom";
import Modal from "react-modal";
import { Wrapper, Nav, Main } from "./App-Style";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Tasks from "./Components/Tasks";
Modal.setAppElement("#root");
const App = () => {
  return (
    <Wrapper>
      <Nav>
        <Navbar />
      </Nav>
      <Main>
        <Route exact path="/" component={Home} />
        <Route exact path="/myTasks" component={Tasks} />
      </Main>
    </Wrapper>
  );
};

export default App;
