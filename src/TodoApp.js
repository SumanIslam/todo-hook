import Paper from '@material-ui/core/Paper';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import Grid from '@material-ui/core/Grid';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function TodoApp() {
  const initialTodos = [
    {id: 1, task: 'going to market', completed: false},
    {id: 2, task: 'wash car', completed: true},
    {id: 3, task: 'study', completed: false},
  ]
  const [todos, setTodos] = useState(initialTodos);

  const addTodo = (newTodo) => {
    setTodos([...todos, {id: uuidv4(), task: newTodo, completed: false}])
  }
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
        <Grid item xs={11} md={8} lg={4}>
          <TodoForm addTodo={addTodo} />
          <TodoList todos={todos} />
        </Grid>
      </Grid>
      
      
    </Paper>
  )
}

export default TodoApp;