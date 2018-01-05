import React from 'react'
import ReactDOM from 'react-dom'
import TodoStore from './stores/TodoStore'
import Todo from './components/todo.jsx'
import { useStrict } from 'mobx'
import './css/index.css'
useStrict(true)

ReactDOM.render(
  <div>
    <Todo todoStore={new TodoStore()} />
  </div>,
  document.getElementById('app')
)
