import React, { useState } from 'react';
import './App.css';
import InputContainer from './InputContainer';
import TodoContainer from './TodoContainer';

function App() {
  const [inputVal, setInputVal] = useState('');
  const [todos, setTodos] = useState([]);

  function writeTodo(e) {
    setInputVal(e.target.value);
  }

  function addTodo() {
    if (inputVal !== '') {
      setTodos((prevTodos) => [...prevTodos, inputVal]);
      setInputVal('');
    }
  }

  function deleteTodo(index) {
    setTodos(todos.filter((todo, i) => i !== index));
  }

  return (
    <main>
      <h1>To Do List</h1>
      <InputContainer inputVal={inputVal} writeTodo={writeTodo} addTodo={addTodo} />
      <TodoContainer todos={todos} deleteTodo={deleteTodo} />
    </main>
  );
}

export default App;
