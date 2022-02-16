import { Grid } from '@mui/material';
import { useDispatch } from 'react-redux';
import { todoActions } from '../../reducers/todoSlice';
import TodoButton from './todoButton';

function TodoItem({ todoItem }) {
  const completeStyle = {
    m: 'auto',
    fontSize: '20px',
    textAlign: 'center',
  };
  const dispatch = useDispatch();
  const handleCompletedTodo = () => {
    dispatch(todoActions.setComplete(todoItem.id));
  };

  const handleRemoveTodo = () => {
    dispatch(todoActions.remove(todoItem.id));
  };

  return (
    <Grid item xs sx={{ height: '50px', borderBottom: 'gray solid 0.5px' }} container padding="2px">
      <Grid
        item
        xs={8}
        sx={{ m: 'auto', fontSize: '20px' }}
        data-todo-id={todoItem.id}
        content={todoItem.text}
      >
        {todoItem.text}
      </Grid>
      {todoItem.isComplete
        ? <Grid item xs={4} sx={completeStyle} color="green">Complete!</Grid>
        : <TodoButton completedTodo={handleCompletedTodo} removeTodo={handleRemoveTodo} />}
    </Grid>
  );
}

export default TodoItem;
