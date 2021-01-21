import styled from "styled-components";
export const customStyles = {
  overlay: {
    backgroundColor: "rgba(0,0,0,0.7)",
  },
  content: {
    top: "40%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    minHeight: "40%",
    minWidth: "40%",
  },
};
export const crossStyle = {
  position: "absolute",
  right: "0",
  top: "0",
  color: "grey",
  border: "none",
  outline: "none",
};
export const buttonStyle = {
  position: "absolute",
  right: "0",
  bottom: "0",
  color: "grey",
  backgroundColor: "light",
};

export const Input = styled.input`
  width: 400px;
  height: 55px;
  margin: 5px;
  padding-left: 10px;
  border: 2px solid;
  border-radius: 30px;
  font-size: 1.5rem;
  outline: none;
`;
export const Label = styled.label`
  font-size: 2.5rem;
`;
export const StatusDiv = styled.div`
  font-size: 1.5rem;
  margin-top: 10px;
  border: 1px solid;
  width: 200px;
  padding-top: 10px;
  padding-left: 10px;
  border-radius: 30px;
`;
export const Checkbox = styled.input`
  width: 50px;
  height: 30px;
  margin-left: 30px;
`;
