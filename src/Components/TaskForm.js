import React, { useState } from "react";
import Modal from "react-modal";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import {
  customStyles,
  crossStyle,
  buttonStyle,
  Input,
  Label,
  StatusDiv,
  Checkbox,
} from "./ModalStyle";
import { Button } from "../App-Style";
import { postUser } from "../Actions/postTask";
const TaskForm = (props) => {
  const { open, toggle } = props;
  const [formData, setFormData] = useState({
    id: uuidv4(),
    title: "",
    status: false,
  });
  // const [disable, setDisable] = useState(formData.title === "" ? false : true);
  // console.log(disable);
  const dispatch = useDispatch();
  const handleFormData = (e) => {
    if (e.target.name === "title") {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.checked });
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postUser(formData));
  };
  return (
    <Modal isOpen={open} onRequestClose={toggle} style={customStyles}>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Title"
          name="title"
          value={formData.title}
          onChange={handleFormData}
        />
        <br />
        <StatusDiv>
          <Label>Status</Label>
          <Checkbox
            type="checkbox"
            name="status"
            checked={formData.status}
            onChange={handleFormData}
          />
        </StatusDiv>
        <br />
        <Button type="submit" disabled={!formData.title}>
          save
        </Button>
      </form>
      <button onClick={toggle} style={crossStyle}>
        X
      </button>
      <button onClick={toggle} style={buttonStyle}>
        Close
      </button>
    </Modal>
  );
};

export default TaskForm;
