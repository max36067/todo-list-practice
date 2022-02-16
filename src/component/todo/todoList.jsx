import { Grid } from '@mui/material';
import TodoItem from './todoItem';

export default function TodoList({ todoList }) {
  const todoItemStyle = {
    overflow: 'auto',
    height: '400px',
    padding: '5px',
    border: 'gray solid 1px',
    borderRadius: '10px',
  };

  return (
    <Grid item xs={6} style={todoItemStyle}>
      {todoList.map(
        (todo) => (
          <TodoItem
            key={todo.id}
            todoItem={todo}
          />
        ),
      )}
    </Grid>
  );
}
