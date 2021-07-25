import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import useToggleState from './hooks/useToggleState';
import EditTodoForm from './EditTodoForm';

function Todo({ id, task, completed, removeTodo, toggleCompletion, editTodo }) {
  const [isEditing, toggle] = useToggleState(false);

  const handleRemove = () => {
    removeTodo(id);
  }
  const handleChange = () => {
    toggleCompletion(id)
  }
  return(
    <ListItem>
      {isEditing ? <EditTodoForm toggle={toggle} id={id} task={task} editTodo={editTodo} /> : (
        <>
          <Checkbox tabIndex={-1} checked={completed} onChange={handleChange} />
          <ListItemText style={{textDecoration: completed ? 'line-through' : 'none'}}>
            {task}
          </ListItemText>
          <ListItemSecondaryAction style={{cursor: 'pointer'}}>
            <IconButton aria-label="Edit" onClick={toggle}>
              <EditIcon fontSize="small" />
            </IconButton>
            <IconButton aria-label="Delete" onClick={handleRemove}>
              <DeleteIcon fontSize="small" />
            </IconButton>
          </ListItemSecondaryAction>
        </>
      )}
    </ListItem>
  )
}

export default Todo;