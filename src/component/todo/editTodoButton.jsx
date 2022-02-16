import { Grid, Button } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import { useDispatch } from 'react-redux';
import { todoActions } from '../../reducers/todoSlice';

export default function EditTodoButton({ itemId, value }) {
  const buttonStyle = {
    m: '3px',
  };
  const dispatch = useDispatch();

  const handleEditSuccess = () => {
    dispatch(todoActions.edit({ id: itemId, text: value }));
  };

  const handleEditCancel = () => {
    dispatch(todoActions.setEdit({ id: itemId, isEditing: false }));
  };

  return (
    <Grid item xs={3} justifyContent="center" container direction="row">
      <Button sx={buttonStyle} color="success" variant="outlined" onClick={handleEditSuccess}>
        <CheckIcon color="success" />
      </Button>
      <Button sx={buttonStyle} color="error" variant="outlined" onClick={handleEditCancel}>
        <ClearIcon color="error" />
      </Button>
    </Grid>
  );
}
