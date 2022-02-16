import { Button, Grid } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import CreateIcon from '@mui/icons-material/Create';

import { useDispatch } from 'react-redux';
import { todoActions } from '../../reducers/todoSlice';

export default function TodoButton({ itemId }) {
  const buttonStyle = {
    m: '3px',
  };
  const variant = 'outlined';
  const dispatch = useDispatch();
  const handleCompletedTodo = () => {
    dispatch(todoActions.setCompleted(itemId));
  };

  const handleRemoveTodo = () => {
    dispatch(todoActions.remove(itemId));
  };

  const handleEditTodo = () => {
    dispatch(todoActions.setEdit({ id: itemId, isEditing: true }));
  };

  return (
    <Grid item xs={4} justifyContent="right" container>
      <Button sx={buttonStyle} color="success" variant={variant} onClick={handleCompletedTodo}>
        <CheckIcon color="success" />
      </Button>
      <Button sx={buttonStyle} color="info" variant={variant} onClick={handleEditTodo}>
        <CreateIcon color="info" />
      </Button>
      <Button sx={buttonStyle} color="error" variant={variant} onClick={handleRemoveTodo}>
        <DeleteOutlineIcon color="error" />
      </Button>
    </Grid>
  );
}
