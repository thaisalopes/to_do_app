import { useState, useEffect } from 'react';

function ToDoForm( {onAdd} ){
    const [title, setTitle] = useState('');
    const [deadline, setDeadline] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault(); // prevents refresh

        const newToDo = { id: Date.now(), title, deadline, completed: false };
        onAdd(newToDo);
        setTitle('');
        setDeadline('');
        alert("To Do Item added succesfully!");
    };
    
    return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input
            className="title_input"
            type="text"
            name="title"
            value={title}
            onChange = {(e) => setTitle(e.target.value)}
        />
        <label>Deadline</label>
        <input
            className="deadline_input"
            type="text"
            name="deadline"
            value={deadline}
            onChange = {(e) => setDeadline(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ToDoForm;