import React, { useState } from "react";
import TodoList from "./TodoList";

function App() {
  const [todo, setTodos] = useState([]);
  return (
    <>
      <TodoList />
      <input type="text"></input>
      <button>Add Todo</button>
      <button>Clear Todo</button>
      <div>0 left to do</div>
    </>
  );
}

export default App;
