import React from 'react';

const ToDonesContainer = (props) => {

  let {data} = props;

  let jsxBoilerPlate = data.map(todo => (
      <div className='todo todones' key={todo._id}>{todo.name} <span>&#10006;</span>
      </div>
  ))

  return(
  <>
  <h2>DONES</h2>
  <div className="to-dones">{jsxBoilerPlate}</div>
  </>
  )
}

export default ToDonesContainer;