import Paper from '@material-ui/core/Paper';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import Grid from '@material-ui/core/Grid';
import { TodosProvider } from './context/todos.context';

function TodoApp() {
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
            <TodoForm />
            <TodoList />
          </TodosProvider>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default TodoApp;