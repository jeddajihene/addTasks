import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { checkTask, deleteTask, editTask } from "../Js/actions/Task";
import EditTask from "./EditTask";

const Task = ({ task }) => {
  const [newText, setnewText] = useState(task.text);
  const [edit, setEdit] = useState(false);
  const dispatch = useDispatch();
  // function to dispatch the check action
  const handleCheck = () => {
    dispatch(checkTask(task.id));
  };
  // function to dispatch the delete action
  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };
  // when i click to the edit button (if true show the input else show the span)
  const handleEdit = () => {
    setEdit(!edit);
  };
  // function to handle the data in the input
  const handleText = (e) => {
    setnewText(e.target.value);
  };
  //function to dispatch the action edit to the reducer
  const handleSave = () => {
    dispatch(editTask(task.id, newText));
    setEdit(false);
  };
  // function to close the edit bloc
  const handleClose = () => {
    setEdit(false);
    setnewText(task.text);
  };

  return (
    <div>
      <span className={task.done && "done"}>{task.text}</span>
      {/* Method 1:modal */}
      <EditTask task={task} />

      {/* method 2 : input  */}
      {/* {!edit ? (
        <span className={task.done && "done"}>{task.text}</span>
      ) : (
        <div>
          <input onChange={handleText} type="text" value={newText} />
          <button onClick={handleClose}>close</button>
          <button onClick={handleSave}>save</button>
        </div>
      )} */}

      <button style={{ backgroundColor: "pink" }} onClick={handleDelete}>
        delete
      </button>
      <button style={{ backgroundColor: "aqua" }} onClick={handleCheck}>
        {task.done ? "undone" : "done"}
      </button>
    </div>
  );
};

export default Task;
