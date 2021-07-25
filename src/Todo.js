import Avatar from '@material-ui/core/Avatar';
import Checkbox from '@material-ui/core/Checkbox';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';

function Todo({task, completed}) {
  return(
    <ListItem>
      <Checkbox checked={completed} />
      <ListItemText>
        {task}
      </ListItemText>
      <ListItemSecondaryAction style={{cursor: 'pointer'}}>
        <IconButton>
          <EditIcon fontSize="small" />
        </IconButton>
        <IconButton>
          <DeleteIcon fontSize="small" />
        </IconButton>
      </ListItemSecondaryAction>
      <Divider />
    </ListItem>
  )
}

export default Todo;