import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import ToDoItem from './components/toDoItem/ToDoItem';

function App() {
  const todo = {
    title: "Hello",
    deadline: "02/26/2026"
  }

  return (
    <>
      <ToDoItem todo={todo}/>
    </>
  );
}

export default App;
