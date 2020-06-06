import React from 'react';
import Items from './Items';

const ToDosContainer = (props) => {

  let {data} = props;

  const onUpdateItem = (id) => {
    props.callGrandpa(id)
  }

  let jsxBoilerPlate = data.map(todo => {
    return <Items key={todo._id} info={todo} callYourParent={onUpdateItem}/>
  })

  return(
    <div className="todos-container">
      <h2>TO DO'S</h2>
      <div className='to-dos'>{jsxBoilerPlate}</div>
    </div>
  )
}

export default ToDosContainer;