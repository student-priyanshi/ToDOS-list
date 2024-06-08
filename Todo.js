import React from 'react';

function Todo({ todo, deleteTodo }) {
  return (
    <div className='todo'>
      <p>{todo}</p>
      <div className='actions'>
        <input type='checkbox' />
        <button onClick={deleteTodo}>Delete</button>
      </div>
    </div>
  );
}

export default Todo;
