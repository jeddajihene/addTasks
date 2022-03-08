import { color } from "@mui/system";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../Js/actions/Task";

const AddTasks = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const handleAdd = () => {
    // text.length ? add() : alert("can not add empty task!!");
    if (text) {
      dispatch(addTask({ id: Math.random(), text: text, done: false }));
      setText("");
    } else {
      alert("can not add empty task!!");
    }
  };

  return (
    <div>
      <input
        style={{ fontSize: "x-large" }}
        type="text"
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <button className="one" onClick={handleAdd}>
        AddTASK{" "}
      </button>
    </div>
  );
};

export default AddTasks;
