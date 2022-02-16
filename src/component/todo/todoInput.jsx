import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Grid, TextField, Button } from '@mui/material';
import { todoActions } from '../../reducers/todoSlice';

function TodoInput() {
  const [textFieldBool, setTextFieldBool] = useState(false);
  const [value, setValue] = useState('');
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

  return (
    <Grid item xs={12} container spacing={4}>
      <Grid item xs={7}>
        <TextField
          fullWidth
          size="small"
          error={textFieldBool}
          id="outlined-basic"
          label="Add Todo"
          variant="outlined"
          value={value}
          onChange={handleInputChange}
        />
      </Grid>
      <Grid item xs={5}>
        <Button variant="contained" onClick={handleAddTodo}>Add todo</Button>
      </Grid>
    </Grid>
  );
}

export default TodoInput;
