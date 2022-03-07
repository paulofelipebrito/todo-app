import React, { useState } from 'react';

import './TodoItem.css';

function TodoItem(props){

  function handlerDelete(){
    // setDeleteText('(Deleted!)');
    props.onDelete(props.id);
  };

  function handlerRightClick(event){
    event.preventDefault();
    props.onRightClick(props.id);
  }

  return (
    <li className={props.completed ? "todo-item__completed" : "todo-item"} onClick={handlerDelete} onContextMenu={handlerRightClick}>
      {props.children}
    </li>
  );
};

export default TodoItem;