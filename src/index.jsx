import React from 'react';
import ReactDOM from 'react-dom';
import TodoStore from './stores/TodoStore';
import Hello from './components/hello.jsx';
import { useStrict } from 'mobx'
import './css/index.css'
useStrict(true)

ReactDOM.render(
  <div>
    <Hello todoStore={new TodoStore} />
  </div>,
  document.getElementById('app')
);
