import React from 'react';

import TodoItem from '../TodoItem/TodoItem';
import './TodoList.css';

function TodoList({items, onDeleteItem}){
  return (
    <ul className="todo-list">
      {items.map(todo => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          onDelete={onDeleteItem}
        >
          {todo.text}
        </TodoItem>
      ))}
    </ul>
  );
};

export default TodoList;