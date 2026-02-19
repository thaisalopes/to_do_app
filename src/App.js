import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import ToDoList from './components/toDoList/ToDoList.jsx'

function App() {
  const [todos, setTodos] = useState([
  {
    id: 1,
    title: "Hello",
    deadline: "02/26/2026"
  }, 
  {
    id: 2,
    title: "test",
    deadline: "02/22/2026"
  }]);

  return (
    <div className='container'>
        <ToDoList  todos={todos} />
    </div>
  );
}

export default App;
