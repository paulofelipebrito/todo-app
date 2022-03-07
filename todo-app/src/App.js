import React, { useState } from 'react';

import TodoList from './components/Todo/TodoList/TodoList';
import TodoInput from './components/Todo/TodoInput/TodoInput';
import './App.css';

function App(){
  /*const [todo, setTodo] = useState([
    { text: 'Do all exercises!', id: 'g1', completed: false},
    { text: 'Finish the course!', id: 'g2', completed: false }
  ]);*/
  const [todo, setTodo] = useState(()=>{
    const todos = JSON.parse(localStorage.getItem('todos'));
    return todos === null ? [] : todos;
  });

  function handlerAddTodo(enteredText){
    
    setTodo(prevState => {
      const updatedTodos = [...prevState];
      updatedTodos.unshift({ text: enteredText, id: Math.random().toString(), completed: false });
      updateLocalStorage(updatedTodos);
      return updatedTodos;
    });    
  };

  function handlerDeleteItem(taskId){
    removeFromLocalStorage(taskId);
    setTodo(prevState => {
      const updatedTodos = prevState.filter(task => task.id !== taskId);
      return updatedTodos;
    });
  };

  function handlerCompleteTask(taskId){
    setTodo(prevState => {
      const updatedTodos = prevState.map((todo)=>(
        todo.id === taskId ? 
          (todo.completed === true 
            ? {...todo, completed: false}
            : {...todo, completed: true})        
        : {...todo}
        ))
      updateLocalStorage(updatedTodos);
      return updatedTodos;
    });
  }

  function getFromLocalStorage(){
    const todos = JSON.parse(localStorage.getItem('todos'));
    return todos === null ? [] : todos;
  }
  function updateLocalStorage(todo){
    localStorage.setItem("todos", JSON.stringify(todo));
  }
  function removeFromLocalStorage(taskId){
    const todo = getFromLocalStorage();
    console.log(todo)
    localStorage.setItem('todos', JSON.stringify(todo.filter((todo) => 
      todo.id !== taskId)
      )
    );
  }

  let content = (
    <p style={{ textAlign: 'center' }}>No task found. Maybe add one?</p>
  );

  if (todo.length > 0) {
    content = (
      <TodoList items={todo} onDeleteItem={handlerDeleteItem} onRightClick={handlerCompleteTask}/>
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
      <section id="instructions">
        <small>
          Left click to delete the todo.
          <br/>
          Right click to toggle complete.
        </small>
      </section>
    </div>
  );
};

export default App;