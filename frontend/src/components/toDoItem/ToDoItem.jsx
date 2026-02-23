import "./ToDoItem.css"
import delete_icon from '../../images/delete_icon.jpg'

function ToDoItem({ id, title, deadline, completed, onDelete, onToggle }) {
    return(
        <div className={`todo ${completed ? "completed" : ""}`} key={id}>
            <div className="align_left">
                <div className="checkbox">
                    <input   type="checkbox" 
                    checked={completed}
                    onChange={onToggle}/>
                </div>
            </div>
                <div className="align_center">
                    <div className="title">
                        <h2>{title}</h2>
                    </div>
                    <div className="deadline">
                        <p>{deadline}</p>
                    </div>
                </div>
                <div className="column">
                    <div className="delete_icon" onClick={onDelete}>
                        <img src={delete_icon} alt="delete"/>
                    </div>
                </div>
        </div>
    )
}

export default ToDoItem;