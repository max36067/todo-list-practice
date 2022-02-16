import { Button, Grid } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

export default function TodoButton({ completedTodo, removeTodo }) {
  return (
    <Grid item xs={4} justifyContent="right" container>
      <Button sx={{ m: '3px' }} color="success" variant="outlined" onClick={completedTodo}>
        <CheckIcon color="success" />
      </Button>
      <Button sx={{ m: '3px' }} color="error" variant="outlined" onClick={removeTodo}>
        <DeleteOutlineIcon color="error" />
      </Button>
    </Grid>
  );
}
