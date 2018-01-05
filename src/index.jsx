import React from 'react';
import ReactDOM from 'react-dom';
import TodoStore from './stores/TodoStore.js';

import Hello from './components/hello.jsx';

ReactDOM.render(
  <div>
    <Hello todoStore={TodoStore} />
  </div>,
  document.getElementById('app')
);
