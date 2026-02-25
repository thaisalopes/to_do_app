import ToDoItem from "../toDoItem/ToDoItem";
import "./ToDoList.css";

function ToDoList({ todos, onDelete, onToggle }) {
  return (
    <>
      <h1>To Do List</h1>
      {todos.length === 0 && (
        <p className="empty">
          Add your first task to your to do <br />
          list by submitting the form on the right!
        </p>
      )}
      {todos.map((todo) => (
        <ToDoItem
          key={todo.id}
          title={todo.title}
          deadline={todo.deadline}
          completed={todo.completed}
          onDelete={() => onDelete(todo.id)}
          onToggle={() => onToggle(todo.id)}
        />
      ))}
    </>
  );
}

export default ToDoList;
