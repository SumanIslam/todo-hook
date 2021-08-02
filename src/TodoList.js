import List from '@material-ui/core/List';
import Todo from './Todo';
import Paper from '@material-ui/core/Paper';
import { TodosContext } from './context/todos.context';
import { useContext, memo } from 'react';

function TodoList() {
  const todos = useContext(TodosContext);
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
            />
          ))}
        </List>
        
      </Paper>
    )
  }

  return null;
}

export default memo(TodoList);