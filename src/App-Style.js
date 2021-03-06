import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
export const Wrapper = styled.div`
  min-height: 100vh;
  background: linear-gradient(to right bottom, #36d1dc, #5b86e5);
  width: auto;
  display: grid;
  grid-template: 0.1fr 1fr/1fr;
  background-size: cover;
  background-attachment: fixed;
`;
export const Nav = styled.div`
  border: 1px solid black;
  border-radius: 10px;
`;
export const Main = styled.div`
  border: 1px solid;
  border-radius: 10px;
`;
export const LinkWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
`;
export const StyledLink = styled(Link)`
  outline: none;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 1.5rem;
  display: inline-block;
  width: 8.5%;
  margin-right: 0.625%;
  text-align: center;
  color: white;

  &:hover {
    color: black;
  }
`;

export const TaskWrapper = styled.div`
  min-height: 100%;
  display: grid;
  grid-template: 0.1fr 1fr /1fr;
`;
export const TaskNav = styled.div`
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Button = styled.button`
  border: 0;
  outline: none;
  background: linear-gradient(to right bottom, #36d1dc, #5b86e5);
  color: white;
  border-radius: 0.25rem;
  font-family: -system-ui, sans-serif;
  font-size: 1.5rem;
  line-height: 1.2;
  white-space: nowrap;
  text-decoration: none;
  padding: 0.25rem 2.5rem;
  margin: 0.25rem;
  margin-right: 1rem;
  width: 200px;
  cursor: pointer;
  &:hover {
    color: black;
    background: orange;
  }
`;
export const SubmitButton = styled(Button)`
  background: ${(props) => (props.disabled ? "lightgray" : "green")};
  &:hover {
    color: ${(props) => (props.disabled ? "white" : "black")};
    background: ${(props) => (props.disabled ? "lightgray" : "green")};
  }
`;
export const CancelButton = styled(Button)`
  background: ${(props) => props.red && "red"};
  &:hover {
    color: ${(props) => props.red && "black"};
    background: ${(props) => props.red && "red"};
  }
`;
export const TaskHeader = styled(motion.div)`
  font-size: 2rem;
  color: white;
  border-radius: 0.25rem;
  font-family: -system-ui, sans-serif;
  line-height: 1.2;
  white-space: nowrap;
  text-decoration: none;
  padding: 0.25rem 2.5rem;
  margin: 0.25rem;
  margin-left: 1rem;
`;
export const TaskContainer = styled.div`
  width: 900px;
  height: 500px;
  margin: 0.5rem 13em;
  padding: 1rem 2em;
  background: white;
  overflow-y: auto;
`;

export const TaskDiv = styled.div`
  width: 100%;
  height: auto;
  margin: 10px;
  padding: 10px;
  border: 1px solid;
  border-left: 5px solid;
  border-left-color: ${(props) => (props.status ? "green" : "red")};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
