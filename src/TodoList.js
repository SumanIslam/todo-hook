import List from '@material-ui/core/List';
import Todo from './Todo';
import Paper from '@material-ui/core/Paper';
function TodoList({ todos, removeTodo, toggleCompletion, editTodo }) {
  if(todos.length) {
    return(
      <Paper elevation={7}>
        <List>
          {todos.map(todo => (
            <Todo
              key={todo.id} 
              id={todo.id} 
              task={todo.task} 
              completed={todo.completed} 
              removeTodo={removeTodo} 
              toggleCompletion={toggleCompletion}
              editTodo={editTodo}
            />
        ))}
        </List>
        
      </Paper>
    )
  }
  return null;
}

export default TodoList;