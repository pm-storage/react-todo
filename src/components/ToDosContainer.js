import React from 'react';
import Items from './Items';

const ToDosContainer = (props) => {

  let {data} = props;


  let jsxBoilerPlate = data.map(todo => {
    return <Items key={todo._id} info={todo}/>
  })

  return(
    <div className="todos-container">
      <h2>TO DO'S</h2>
      <div className='to-dos'>{jsxBoilerPlate}</div>
    </div>
  )
}

export default ToDosContainer;