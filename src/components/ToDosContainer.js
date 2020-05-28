import React from 'react';

const ToDosContainer = (props) => {

  let {data} = props;

  let jsxBoilerPlate = data.map(todo => (
      <div className='todo' key={todo._id}>{todo.name} <span>&#9997;</span></div>
  ))

  return(
  <div className='to-dos'>{jsxBoilerPlate}</div>
  )
}

export default ToDosContainer;