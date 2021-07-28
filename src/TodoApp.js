import Paper from '@material-ui/core/Paper';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import Grid from '@material-ui/core/Grid';
import { useEffect } from 'react';
import UseTodoState from './hooks/useTodosState';
import { TodosProvider } from './context/todos.context';

function TodoApp() {
  const initialTodos = [{id: 1, task: 'go to school', completed: false}];
  const {todos, addTodo, removeTodo, toggleCompletion, editTodo} = UseTodoState(initialTodos);

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
          <TodosProvider>
            <TodoForm addTodo={addTodo} />
            <TodoList 
              todos={todos} 
              removeTodo={removeTodo} 
              toggleCompletion={toggleCompletion}
              editTodo={editTodo}
            />
          </TodosProvider>
          
        </Grid>
      </Grid>
    </Paper>
  )
}

export default TodoApp;