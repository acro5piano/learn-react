import React from 'react'
import ReactDOM from 'react-dom'
import _ from 'lodash'
import { observer } from 'mobx-react'
import { observable } from 'mobx'

@observer
export default class Hello extends React.Component {
  @observable newTodo = ''

  handleKeyPress(e) {
    if (e.key === 'Enter') {
      this.addTodo()
    }
  }

  addTodo() {
    this.props.todoStore.addTodo(this.newTodo)
    this.newTodo = ''
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
    const submitClassName = this.props.todoStore.newTodo !== '' ? 'button-primary' : 'button-default'

    const { todoStore } = this.props

    return (
      <div className="input">
        <h1>TODO</h1>
        {todoStore.todos.map((todo, i) =>
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
            value={this.newTodo}
            onChange={event => this.newTodo = event.target.value}
            onKeyPress={event => this.handleKeyPress(event)}
          >
          </input>
          <button
            style={submitStyle}
            className={submitClassName}
            onClick={event => this.addTodo()}>Add</button>
        </div>
      </div>
    )
  }
}
