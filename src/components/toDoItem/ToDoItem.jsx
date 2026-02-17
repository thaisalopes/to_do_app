import "./ToDoItem.css"
import delete_icon from '../../images/delete_icon.jpg'

function ToDoItem({ todo }) {
    return(
        <div className="todo" key={todo.title}>
            <div className="align_left">
                <div className="checkbox">
                    <input type="checkbox"/>
                </div>
            </div>
            <div className="align_center">
                <div className="title">
                    <h2>{todo.title}</h2>
                </div>
                <div className="deadline">
                    <p>{todo.deadline}</p>
                </div>
            </div>
            <div className="align_right">
                <div className="delete_icon">
                    <img src={delete_icon} alt="delete"/>
                </div>
            </div>
        </div>
    )
}

export default ToDoItem;