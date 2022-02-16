import { Grid, TextField, Button } from '@mui/material';

function TodoInput({
  textFieldCheck, value, inputChange, addTodo,
}) {
  return (
    <Grid item container spacing={2}>
      <Grid item xs={7}>
        <TextField
          fullWidth
          size="small"
          error={textFieldCheck}
          id="outlined-basic"
          label="Add Todo"
          variant="outlined"
          value={value}
          onChange={inputChange}
        />
      </Grid>
      <Grid item xs={5}>
        <Button variant="contained" onClick={addTodo}>Add todo</Button>
      </Grid>
    </Grid>
  );
}

export default TodoInput;
