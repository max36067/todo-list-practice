import { Grid, TextField } from '@mui/material';
import { useState } from 'react';
import TodoButton from './todoButton';
import EditTodoButton from './editTodoButton';

function TodoItem({ todoItem }) {
  const [value, setValue] = useState(todoItem.text);
  const completeStyle = {
    m: 'auto',
    fontSize: '20px',
    textAlign: 'center',
  };

  const handleEditChange = (e) => {
    setValue(e.target.value);
  };

  const todoItemStatus = (isComplete, isEditing) => {
    if (isComplete) {
      return (
        <>
          <Grid item xs={8} sx={{ m: 'auto', fontSize: '30px' }} content={todoItem.text}>
            {todoItem.text}
          </Grid>
          <Grid item xs={4} sx={completeStyle} color="green">Complete!</Grid>
        </>
      );
    } if (isEditing) {
      return (
        <>
          <Grid item xs={9}>
            <TextField
              size="small"
              fullWidth
              value={value}
              onChange={handleEditChange}
            />
          </Grid>
          <EditTodoButton itemId={todoItem.id} value={value} />
        </>
      );
    }
    return (
      <>
        <Grid item xs={8} sx={{ m: 'auto', fontSize: '30px' }} content={todoItem.text}>
          {todoItem.text}
        </Grid>
        <TodoButton itemId={todoItem.id} />
      </>
    );
  };
  return (
    <Grid item xs sx={{ height: '50px', borderBottom: 'gray solid 0.5px' }} container padding="2px">
      {todoItemStatus(todoItem.isComplete, todoItem.isEditing)}
    </Grid>
  );
}

export default TodoItem;
