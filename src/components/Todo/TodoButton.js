import React from 'react';

function TodoButton(props) {
    return <button onClick={props.onCLick}>{props.title}</button>
}

export default TodoButton;