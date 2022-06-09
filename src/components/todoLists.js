import React from "react";
import TodoItem from "./todoItem";

// todo lists

const TodoLists = (props) => {
  return (
    <ul>
      {props.todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleDeleteProps={props.handleDeleteProps}
          handleChangeProps={props.handleChangeProps}
          setUpdateProps={props.setUpdateProps}
        />
      ))}
    </ul>
  );
};

export default TodoLists;
