import React from 'react';

const ToDosContainer = (props) => {

  let {data} = props;

  let jsxBoilerPlate = data.map(todo => (
      <div className='todo' key={todo._id}>{todo.text} <span>&#9997;</span></div>
  ))

  return(
    <>
      <h2>TO DO'S</h2>
      <div className='to-dos'>{jsxBoilerPlate}</div>
    </>
  )
}

export default ToDosContainer;