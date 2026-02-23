import ToDoItem from "../toDoItem/ToDoItem";

function ToDoList({ todos, onDelete, onToggle }) {
    return(
        <div>
        {todos.map(todo => 
          <ToDoItem key ={todo.id} title={todo.title} deadline={todo.deadline} completed={todo.completed} onDelete={()=> onDelete(todo.id)} onToggle={() => onToggle(todo.id)} />
        )}
        </div>
    )
}

export default ToDoList;