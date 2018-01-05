import React from 'react'
import ReactDOM from 'react-dom'
import { observer } from 'mobx-react'
import { observable, action } from 'mobx'

@observer
export default class Hello extends React.Component {
  @observable newTodo = ''

  handleKeyPress(e) {
    if (e.key === 'Enter') {
      this.addTodo()
    }
  }

  @action addTodo() {
    this.props.todoStore.addTodo(this.newTodo)
    this.newTodo = ''
  }

  deleteTodo(index) {
    this.todoStore.deleteTodo(index)
  }

  render() {
    const submitClassName = this.newTodo !== '' ? 'button-primary' : 'button-default'
    const { todoStore } = this.props

    return (
      <div className="input">
        <h1>TODO</h1>
        {todoStore.todos.map((todo, i) =>
          <div className="todo-list" key={i}>
            {todo}
            <span
              className="todo-list-delete"
              onClick={action(() => todoStore.deleteTodo(i))}>
              delete
            </span>
          </div>
        )}
        <div className="todo-add">
          <input
            type="text"
            autoFocus
            className="todo-add-input"
            value={this.newTodo}
            onChange={action(event => this.newTodo = event.target.value)}
            onKeyPress={event => this.handleKeyPress(event)}
          >
          </input>
          <button
            className="todo-add-submit"
            onClick={event => this.addTodo()}>Add</button>
        </div>
      </div>
    )
  }
}
