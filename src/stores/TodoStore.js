import { observable, computed, reaction } from 'mobx'

export default class TodoStore {
	@observable todos = []

  @observable newTodo = ''

  @computed get todoCount() {
    return this.todos.length
  }

  addTodo(title) {
    if (title === '') {
      return
    }
    this.todos.push(title)
    this.newTodo = ''
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
