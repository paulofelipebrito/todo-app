import React, { useState } from 'react';

import TodoList from './components/Todo/TodoList/TodoList';
import TodoInput from './components/Todo/TodoInput/TodoInput';
import './App.css';

function App(){
  const [todo, setTodo] = useState([
    { text: 'Do all exercises!', id: 'g1' },
    { text: 'Finish the course!', id: 'g2' }
  ]);

  function handlerAddTodo(enteredText){
    setTodo(prevState => {
      const updatedTodos = [...prevState];
      updatedTodos.unshift({ text: enteredText, id: Math.random().toString() });
      return updatedTodos;
    });
  };

  function handlerDeleteItem(taskId){
    setTodo(prevState => {
      const updatedTodos = prevState.filter(task => task.id !== taskId);
      return updatedTodos;
    });
  };

  let content = (
    <p style={{ textAlign: 'center' }}>No task found. Maybe add one?</p>
  );

  if (todo.length > 0) {
    content = (
      <TodoList items={todo} onDeleteItem={handlerDeleteItem} />
    );
  }

  return (
    <div>
      <section id="todo-form">
        <TodoInput onAddTodo={handlerAddTodo} />
      </section>
      <section id="todo">
        {content}
      </section>
    </div>
  );
};

export default App;