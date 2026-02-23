import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import ToDoList from './components/toDoList/ToDoList.jsx';
import ToDoForm from './components/toDoForm/ToDoForm.jsx';

function App() {
  const [todos, setToDoList] = useState([
  {
    id: 1,
    title: "Hello",
    deadline: "02/26/2026",
    completed: false
  },
  {
    id: 2,
    title: "test",
    deadline: "02/22/2026",
    completed:false
  }]);

  const addToDo = (todo) => {
    setToDoList((prev) => {
      return [todo, ...prev];
    });
   };

  const deleteToDo = (targetId) => {
    setToDoList(todos => todos.filter(todo => todo.id !== targetId));
  };

  const setCheck = (targetId) => {
    setToDoList(todos => todos.map(todo => {
      return todo.id === targetId ? {...todo, completed: !todo.completed} : todo
  }));
};

  return (
    <div className='container'>
        <ToDoList  todos={todos} onDelete={deleteToDo} onAdd={addToDo} onToggle={setCheck}/>
        <ToDoForm onAdd={addToDo}/>
    </div>
  );
}

export default App;
