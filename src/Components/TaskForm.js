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
import { SubmitButton, CancelButton } from "../App-Style";
import { postTask } from "../Actions/TaskAction";
import { TaskUpdater } from "../Actions/TaskAction";
const TaskForm = (props) => {
  const { open, toggle } = props;
  console.log(props.id, props.title, props.status);
  const [formData, setFormData] = useState({
    id: props.id ? props.id : uuidv4(),
    title: props.title ? props.title : "",
    status: props.status ? props.status : false,
  });

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
    if (!props.id) {
      console.log(true);
      dispatch(postTask(formData));
      setFormData({ title: "", status: false });
    } else {
      console.log(false);
      dispatch(TaskUpdater(props.id, formData));
    }
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
        <SubmitButton type="submit" disabled={!formData.title}>
          save
        </SubmitButton>
        {props.id && (
          <CancelButton red onClick={toggle}>
            cancel
          </CancelButton>
        )}
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
