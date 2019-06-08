import React, { Component } from 'react'
import uuid from 'uuid/v4';
import './NewTodoForm.css';

class NewTodoForm extends Component {
    state = {
        task:''
    };
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.createTodo({
            ...this.state,
            id: uuid(),
            completed: false
        });
        this.setState({
            task: ''
        });
    }
    render(){
        return (
            <form className="NewTodoForm" onSubmit={this.handleSubmit}>
                <label htmlFor="task">New Todo</label>
                <input 
                    type="text"
                    id="task"
                    name="task"
                    onChange={this.handleChange}
                    value={this.state.task}
                    placeholder="New Todo" />
                    <button>Add Todo</button>
            </form>
        );
    }
}

export default NewTodoForm;