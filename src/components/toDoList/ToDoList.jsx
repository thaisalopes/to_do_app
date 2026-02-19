import ToDoItem from "../toDoItem/ToDoItem";

function ToDoList({ todos, onDelete }) {
    return(
        <div>
        {todos.map(todo => 
          <ToDoItem key ={todo.id} title={todo.title} deadline={todo.deadline} onDelete={()=> onDelete(todo.id)} />
          
        )}
        </div>
    )
}

export default ToDoList;