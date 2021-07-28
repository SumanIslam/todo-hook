import Paper from '@material-ui/core/Paper';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import Grid from '@material-ui/core/Grid';
import { useEffect } from 'react';
import UseTodoState from './hooks/useTodosState';

function TodoApp() {
  const initialTodos = JSON.parse(localStorage.getItem('todos') || '[]');
  const {todos, addTodo, removeTodo, toggleCompletion, editTodo} = UseTodoState(initialTodos);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  },[todos])

  
  return (
    <Paper
      elevation={0}
      square
      style={{padding:0, margin: 0, height:'100vh', background: '#fafafa'}}
    >
      <Grid
        container
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={11} md={8} lg={5}>
          <TodoForm addTodo={addTodo} />
          <TodoList 
            todos={todos} 
            removeTodo={removeTodo} 
            toggleCompletion={toggleCompletion}
            editTodo={editTodo}
          />
        </Grid>
      </Grid>
    </Paper>
  )
}

export default TodoApp;