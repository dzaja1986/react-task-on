import React from 'react';

function TodoListItem(props) {
   
    return <div className="todo-item">{props.text}
    <br/>
    <button onClick={props.handleDelete}>Delete</button></div>

}

export default TodoListItem;