import React from 'react';

import TodoButton from './TodoButton';
import TodoList from './TodoList';
import TodoInput from './TodoInput';

import './Todo.css';
import TodoListItem from './TodoListItem';

class Todo extends React.Component {

    state = {
        inputValue: '',
        todos: []
    }

    handleChange = e => {
        console.log('EVENT', e.target.value);

        this.setState({
            inputValue: e.target.value
        })

    }
    removeItems = () => {
        console.log("remove")
        this.setState({
            todos:[]
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
                {/* // removeItem={this.removeItem}  */}
                <TodoButton onCLick={this.handleClick} title="ADD" />
             <button onClick={this.removeItems}>Delete</button>
                
            </div>
        )
    }
}

export default Todo;