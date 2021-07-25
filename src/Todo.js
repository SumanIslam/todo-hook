import Checkbox from '@material-ui/core/Checkbox';
// import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

function Todo({ id, task, completed, removeTodo, toggleCompletion }) {
  const handleRemove = () => {
    removeTodo(id);
  }
  const handleChange = () => {
    toggleCompletion(id)
  }
  return(
    <ListItem>
      <Checkbox tabIndex={-1} checked={completed} onChange={handleChange} />
      <ListItemText style={{textDecoration: completed ? 'line-through' : 'none'}}>
        {task}
      </ListItemText>
      <ListItemSecondaryAction style={{cursor: 'pointer'}}>
        <IconButton aria-label="Edit">
          <EditIcon fontSize="small" />
        </IconButton>
        <IconButton aria-label="Delete" onClick={handleRemove}>
          <DeleteIcon fontSize="small" />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  )
}

export default Todo;