import React from 'react'
import _ from 'lodash'
import { observer } from 'mobx-react'


export default @observer class Hello extends React.Component {

  _handleKeyPress(e) {
    if (e.key === 'Enter') {
      this.addTodo()
    }
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

    const {todos, newTodo} = this.props.todoStore

    console.log(todos, newTodo)

    return (
      <div className="input">
        <h1>TODO</h1>
        <div style={addStyle}>
          <input
            type="text"
            autoFocus
            style={newTodoStyle}
            value={this.props.todoStore.newTodo}
            onChange={event => this.setState({newTodo: event.target.value})}
            onKeyPress={event => this._handleKeyPress(event)}>
          </input>
          <button style={submitStyle} className={submitClassName} onClick={this.addTodo}>Add</button>
        </div>
      </div>
    )
  }
}
