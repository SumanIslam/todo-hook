import List from '@material-ui/core/List';
import Todo from './Todo';
import Paper from '@material-ui/core/Paper';
function TodoList({todos}) {
  return(
    <Paper elevation={7}>
      <List>
        {todos.map(todo => (
          <Todo task={todo.task} key={todo.id} completed={todo.completed} />
      ))}
      </List>
      
    </Paper>
  )
}

export default TodoList;