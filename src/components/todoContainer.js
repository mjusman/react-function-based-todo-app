import React from "react";
import { useState, useEffect } from "react";
import TodoLists from "./todoLists";
import InputTodo from "./inputTodo";
import { v4 as uuidv4 } from "uuid";
import Header from "./header";


//todo container

const TodoContainer = () => {
  // my todo state
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Reading Books",
      completed: false,
    },

    {
      id: 2,
      title: "Qur'an Recitation",
      completed: false,
    },
    {
      id: 3,
      title: "Reading Hadith",
      completed: false,
    },
  ]);
  const addTodoItem = (title) => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false
    }
    setTodos([...todos, newTodo])
  };

  const handleDeleteTodo = (id) => {
    // handle delete todo
    setTodos(
      todos.filter(todo => {
        if(todo.id === id){
          return todo.id !== id
        }
        return todo
      })
    )
  };
  const handleChange = (id) => {
    // handle check for checkboxes
    setTodos(
      todos.map(todo => {
        if(todo.id === id){
            return {
              ...todo,
              completed: !todo.completed,
            };
        }
        return todo
      })
    )
  };
  const setUpdate = (updatedTodo, id) => {
    // handle update 
   setTodos(todos.map((todo) => {
     if(todo.id === id){
       todo.title = updatedTodo;
     }
     return todo;
   }));
  };
  useEffect(() => {
    console.log("Happy coding Mahmud!");
  }, [todos]);
  return (
    <div className="container">
      <div className="inner">
        <Header />
        <InputTodo addTodoProps={addTodoItem} />
        <TodoLists
          todos={todos}
          handleDeleteProps={handleDeleteTodo}
          handleChangeProps={handleChange}
          setUpdateProps={setUpdate}
        />
      </div>
    </div>
  );
};

export default TodoContainer;
