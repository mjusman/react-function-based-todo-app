import React from "react";
import { useState } from "react";
import styles from "../TodoItem.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";


// todo single item

const TodoItem = (props) => {
  const [isEditing, setEditing] = useState(false);
  const { id, title, completed } = props.todo;
  const handleEditing = () => {
    setEditing(true);
  };
  const hnadleEditingDone = (event) => {
    // updates to when user press enter after edit
    if (event.key === "Enter") {
      setEditing(false);
    }
  };
  // style inline style object when user checks todo item

  const completedStyle = {
    fontStyle: "italic",
    opacity: 0.4,
    color: "#595959",
    textDecoration: "line-through",
  };
  // edit text box toggler 
  let viewMode = {};
  let editMode = {};

  if (isEditing) {
    viewMode.display = "block";
  } else {
    editMode.display = "none";
  }
  return (
    <li className={styles.item}>
      <div onDoubleClick={handleEditing} style={viewMode}>
        <input
          type="checkbox"
          className={styles.checkbox}
          checked={props.todo.completed}
          onChange={() => props.handleChangeProps(id)}
        />
        <span style={completed ? completedStyle : null}>{title}</span>
        <button onClick={() => props.handleDeleteProps(id)}>
          <FontAwesomeIcon icon={faTrashAlt} size="2x" />
        </button>
        <input
          type="text"
          className={styles.inputText}
          style={editMode}
          value={title}
          onChange={(e) => props.setUpdateProps(e.target.value, id)}
          onKeyDown={hnadleEditingDone}
        />
      </div>
    </li>
  );
};

export default TodoItem;
