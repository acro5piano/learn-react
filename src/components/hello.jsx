import React from 'react';
import _ from 'lodash';

export default class Hello extends React.Component {
  constructor() {
    super()
    this.addTodo = this.addTodo.bind(this);

    this.state = {
      todos: ['buy milk', 'learn react'],
      newTodo: '',
    }
  }

  _handleKeyPress(e) {
    if (e.key === 'Enter') {
      console.log(this)
      this.addTodo()
    }
  }

  addTodo() {
    if (this.state.newTodo === '') {
      return
    }
    const todos = this.state.todos
    todos.push(this.state.newTodo)
    this.setState({
      todos: todos,
      newTodo: ''
    })
  }

  deleteTodo(i) {
    const todos = this.state.todos
    todos.splice(i, 1)
    this.setState({
      todos: todos,
      newTodo: ''
    })
  }

  render() {
    const listStyle = {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '18px',
      color: '#666',
    }
    const deleteStyle = {
      color: '#888',
      padding: '8px',
      border: 'solid 1px #888',
      borderRadius: '3px',
      cursor: 'pointer',
    }
    const addStyle = {
      position: 'fixed',
      left: 0,
      bottom: 0,
      display: 'flex',
      textAlign: 'center',
      width: '100%',
    }
    const newTodoStyle = {
      width: '100%',
      margin: 0,
    }
    const submitStyle = {
      margin: 0,
    }
    const submitClassName = this.state.newTodo !== '' ? 'button-primary' : 'button-default'

    return (
      <div className="input">
        <h1>TODO</h1>
        {this.state.todos.map((todo, i) =>
          <div style={listStyle} key={i}>
            {todo}
            <span style={deleteStyle} onClick={event => this.deleteTodo(i)}>delete</span>
          </div>
        )}
        <div style={addStyle}>
          <input
            type="text"
            autoFocus
            style={newTodoStyle}
            value={this.state.newTodo}
            onChange={event => this.setState({newTodo: event.target.value})}
            onKeyPress={event => this._handleKeyPress(event)}>
          </input>
          <button style={submitStyle} className={submitClassName} onClick={this.addTodo}>Add</button>
        </div>
      </div>
    );
  }
}
