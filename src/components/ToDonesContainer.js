import React from 'react';

const ToDonesContainer = (props) => {

  let {data} = props;

  let jsxBoilerPlate = data.map(todo => (
      <div className='todo todones' key={todo._id}>{todo.text} <span>&#10006;</span>
      </div>
  ))

  return(
  <div className="todos-container">
  <h2>DONES</h2>
  <div className="to-dones">{jsxBoilerPlate}</div>
  </div>
  )
}

export default ToDonesContainer;