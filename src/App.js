import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Form from "./components/form";
import TodoList from "./components/todoList";

function App() {
  // first thing is the variable for current state
  // second thing is the function to update current state


  const [inputText, setInputText] = useState(""); //state expecting string
  const [todos, setTodos] = useState([]); //state expecting array of objects
  const [currentTodo, setCurrentTodo] = useState({});
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="App">
      <header className="todo-app">
        <h1>Todo List</h1>
      </header>
      {/* passing setInput text in as props to the Form, so state can be accessed there*/}
      <Form
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
        currentTodo={currentTodo}
        setCurrentTodo={setCurrentTodo}
      />
      <TodoList
        todos={todos}
        setTodos={setTodos}
        isEditing={isEditing}
        setIsEditing={setIsEditing}
      />
    </div>
  );
}

export default App;
