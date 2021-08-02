import { TextField } from "@material-ui/core";
import useInputState from "./hooks/useInputState";
import Button from '@material-ui/core/Button';
import { DispatchContext } from './context/todos.context';
import { useContext } from 'react';

function EditTodoForm({ id, task, toggle }) {
  const [value, onChange, reset] = useInputState(task);
  const dispatch = useContext(DispatchContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({type: 'EDITTODO', id, task: value});
    reset();
    toggle();
  }
  return (
    <form onSubmit={handleSubmit} style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
      <TextField
        style={{margin: '0 1rem', width: '100%'}}
        value={value} 
        onChange={onChange} 
        margin="normal"
        fullWidth
        autoFocus
      />
      <Button type='submit' variant="contained" color="primary">Save</Button>
    </form>
  )
}

export default EditTodoForm;