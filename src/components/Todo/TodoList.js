import React from 'react';

import TodoListItem from './TodoListItem';

function TodoList(props) {
    return props.todos.map((todo, index) => (
        <TodoListItem key={index} text={todo.text} />
    ))
        
    
}

export default TodoList;