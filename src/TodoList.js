import React, { Component } from 'react'
import Todo from './Todo';
import './TodoList.css';
import NewTodoForm from './NewTodoForm';

class TodoList extends Component {
    state = {
        todos: []
    };
    create = (newTodo) => {
        this.setState({
            todos: [...this.state.todos, newTodo]
        });
    }
    remove = (id) => {
        this.setState(state => ({
            todos: state.todos.filter(todo => todo.id !== id)
        }));
    }
    update = (id, updatedTask) => {
        this.setState({
            todos: this.state.todos.map(todo => {
                if(todo.id === id){
                    return {...todo, task: updatedTask };
                }
                return todo;
            })
        })
    }
    toggleCompletion = (id) => {
        this.setState({
            todos: this.state.todos.map(todo => {
                if(todo.id === id){
                    return {...todo, completed: !todo.completed };
                }
                return todo;
            })
        })
    }
    render(){
        const todos = this.state.todos.map(todo => (
             <Todo 
                key={todo.id} 
                id={todo.id} 
                completed={todo.completed}
                updateTodo={this.update}
                removeTodo={this.remove} 
                toggleTodo={this.toggleCompletion}
                task={todo.task} />
        ));
        return(
            <div className="TodoList"> 
                <h1>
                    Todo List! <span>A Simple React Todo List App.</span>
                </h1>
                <ul>
                    {todos}
                </ul>
                <NewTodoForm  createTodo={this.create} />
            </div>
        );
    }
}

export default TodoList;