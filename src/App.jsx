import { React, useState } from 'react';
import { Grid } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import TodoList from './component/todo/todoList';
import TodoInput from './component/todo/todoInput';
import { todoState, todoActions } from './reducers/todoSlice';

function App() {
  const [textFieldBool, setTextFieldBool] = useState(false);
  const [value, setValue] = useState('');
  const todos = useSelector(todoState);
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (value !== '') {
      dispatch(todoActions.add(value));
      setValue('');
    } else {
      setTextFieldBool(true);
    }
  };

  const handleInputChange = (e) => {
    setValue(e.target.value);
    setTextFieldBool(false);
  };

  const completedTodos = todos.filter(
    (item) => item?.isComplete,
  );

  const incompleteTodos = todos.filter(
    (item) => !item?.isComplete,
  );

  return (
    <Grid container marginTop="20px" marginLeft="10px">
      <TodoInput
        textFieldCheck={textFieldBool}
        value={value}
        addTodo={handleAddTodo}
        inputChange={handleInputChange}
      />
      <Grid item xs={7} container marginTop="30px">
        <TodoList todoList={incompleteTodos} />
        <TodoList todoList={completedTodos} />

      </Grid>
    </Grid>

  );
}

export default App;
