import ToDoItem from "../toDoItem/ToDoItem";

function ToDoList({ todos }) {
    return(
        <div>
        {todos.map(todo => 
          <ToDoItem key ={todo.id} title={todo.title} deadline={todo.deadline} />
          
        )}
        </div>
    )
}

export default ToDoList;