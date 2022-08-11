import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import {FormControl} from './styles';

function TodoInput({onAddTodo}){
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  function handlerTodoInputChange(event){
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  function formSubmitHandler(event){
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    onAddTodo(enteredValue);
    setEnteredValue('')
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <FormControl invalid={!isValid}>
        <label>Todos</label>
        <input type="text" value={enteredValue} placeholder="What needs to be done?" onChange={handlerTodoInputChange} />
      </FormControl>
      <Button type="submit">Add Task</Button>
    </form>
  );
};

export default TodoInput;