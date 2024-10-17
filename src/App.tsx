import "./styles.css";
import React, { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  function handleChange(event) {
    setInput(event.target.value);
  }
  function handleClick() {
    if (input) {
      setTodos([...todos, input]);
      setInput("");
    }
  }
  function deleteTodo(indexToRemove) {
    setTodos(todos.filter((todos, index) => index !== indexToRemove));
  }
  return (
    <div className="App">
      <h1>to-do-list</h1>
      <input
        type="text"
        value={input}
        onChange={handleChange}
        placeholder="add a new task"
      />
      <button onClick={handleClick}>add</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => deleteTodo(index)}>delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default App;
