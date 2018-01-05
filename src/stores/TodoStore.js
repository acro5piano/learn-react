import { observable, computed, reaction } from 'mobx'

export default class TodoStore {
	@observable todos = ['buy milk', 'learn react']

  @computed get todoCount() {
    return this.todos.length
  }

  addTodo(title) {
    if (title === '') {
      return
    }
    this.todos.push(title)
  }

  deleteTodo(i) {
    const todos = this.state.todos
    todos.splice(i, 1)
    this.setState({
      todos: todos,
      newTodo: ''
    })
  }

}
