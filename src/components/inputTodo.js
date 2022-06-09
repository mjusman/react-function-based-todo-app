import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const InputTodo = (props) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() !== "") {
      props.addTodoProps(title);
      setTitle("");
    } else {
      alert("Enter todo title first");
    }
  };
  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <input
        type="text"
        className="input-text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button className="input-submit">
        <FontAwesomeIcon icon={faPlus} size="2x" />
      </button>
    </form>
  );
};

export default InputTodo;
