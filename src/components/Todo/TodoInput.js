import React from 'react';

function TodoInput(props) {
    return <input placeholder={props.placeholder} value={props.value} onChange={props.onChange} />
}

export default TodoInput;