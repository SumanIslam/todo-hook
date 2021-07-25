import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';
function TodoList({todos}) {
  return(
    <Paper elevation={7}>
      <List>
        {todos.map(todo => (
        <ListItem key={todo.id}>
          <ListItemText>
            {todo.task}
          </ListItemText>
          <Divider />
        </ListItem>
      ))}
      </List>
      
    </Paper>
  )
}

export default TodoList;