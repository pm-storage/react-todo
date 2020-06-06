import React from 'react';

const Item = (props) => {
  let icon;
  let {status, _id, text} = props.info;

  if(status) icon = <span>&#9997;</span>;
  else icon =<span>&#10006;</span>;
  
  const callPapa = () => {
    props.callYourParent(_id);
  }

  return(
    <>
     <div className={status ? 'todo' : 'todones'}>
      <p>{text}</p>
      <button onClick={callPapa}>
        {icon}
      </button>
     </div>
    </>
  )
}

export default Item;