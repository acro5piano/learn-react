import { observable, computed, action } from 'mobx'

export default class TodoStore {
  @observable todos = ['buy milk', 'learn react']

  @computed get todoCount() {
    return this.todos.length
  }

  @action addTodo(title) {
    if (title === '') {
      return
    }
    this.todos.push(title)
  }

  deleteTodo(i) {
    this.todos.splice(i, 1)
  }
}
