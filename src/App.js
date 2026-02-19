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
    deadline: "02/26/2026"
  },
  {
    id: 2,
    title: "test",
    deadline: "02/22/2026"
  }]);

  const addToDo = (todo) => {
    setToDoList((prev) => {
      return [todo, ...prev];
    });
   };

  const deleteToDo = (targetId) => {
    setToDoList(prev => prev.filter(todo => todo.id !== targetId));
  };

  return (
    <div className='container'>
        <ToDoList  todos={todos} onDelete={deleteToDo} onAdd={addToDo}/>
        <ToDoForm onAdd={addToDo} />
    </div>
  );
}

export default App;
