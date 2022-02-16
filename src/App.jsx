import { React } from 'react';
import { Grid } from '@mui/material';
import { useSelector } from 'react-redux';
import TodoList from './component/todo/todoList';
import TodoInput from './component/todo/todoInput';
import { todoState } from './reducers/todoSlice';

function App() {
  const todos = useSelector(todoState);
  const completedTodos = todos.filter(
    (item) => item?.isComplete,
  );

  const incompleteTodos = todos.filter(
    (item) => !item?.isComplete,
  );

  return (
    <Grid container margin="auto" spacing={2}>
      <TodoInput />
      <Grid item xs={7} marginTop="30px" container>
        <TodoList todoList={incompleteTodos} />
        <TodoList todoList={completedTodos} />
      </Grid>
    </Grid>

  );
}

export default App;
