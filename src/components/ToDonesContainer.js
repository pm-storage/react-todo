import React from 'react';
import Items from './Items';

const ToDonesContainer = (props) => {

  let {data} = props;
  
  const onUpdateItem = (id) => {
    props.callGrandma(id);
  };

  let jsxBoilerPlate = data.map(todo => (
     <Items key={todo._id} info={todo} callYourParent={onUpdateItem}/>
  ))

  return(
  <div className="todos-container">
  <h2>DONES</h2>
  <div className="to-dones">{jsxBoilerPlate}</div>
  </div>
  )
}

export default ToDonesContainer;