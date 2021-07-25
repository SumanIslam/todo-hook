import { Paper } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import useInputState from "./hooks/useInputState";

function TodoForm({addTodo}) {
  const [value, onChange, reset] = useInputState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(value);
    reset();
  }
  return(
    <Paper elevation={4} style={{margin: '1rem 0', padding: '0 1rem'}}>
      <form onSubmit={handleSubmit}>
        <TextField value={value} onChange={onChange} margin="normal" label="Add new Todo" fullWidth />
      </form>
      
    </Paper>
  )
}

export default TodoForm;