import React from 'react';

import TodoButton from './TodoButton';
import TodoList from './TodoList';
import TodoInput from './TodoInput';

import './Todo.css';

class Todo extends React.Component {

    state = {
        inputValue: '',
        todos: [
            {
                id: 1,
                text: 'kupi mleko'
            },
            {
                id: 2,
                text: 'kupi slaninu'
            }
        ]
    }

    handleChange = e => {
        console.log('EVENT', e.target.value);

        this.setState({
            inputValue: e.target.value
        })

    }

    handleClick = () => {
        const { inputValue, todos } = this.state;

        const newTodo = {
            text: inputValue
        }

        this.setState({
            todos: [...todos, newTodo],
            inputValue: ''
        })
    }

    render() {

        const { todos, inputValue } = this.state;

        return (
            <div className="todo-container">
                <h1>TODO APP</h1>

                <TodoInput
                    placeholder="Add new todo"
                    onChange={this.handleChange}
                    value={inputValue}
                />

                <TodoList todos={todos} />

                <TodoButton onCLick={this.handleClick} title="ADD" />
            </div>
        )
    }
}

export default Todo;