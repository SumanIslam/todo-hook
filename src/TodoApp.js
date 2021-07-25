import Paper from '@material-ui/core/Paper';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import Grid from '@material-ui/core/Grid';
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

function TodoApp() {
  const initialTodos = [
    {id: 1, task: 'going to market', completed: false},
    {id: 2, task: 'wash car', completed: true},
    {id: 3, task: 'study', completed: false},
  ]
  const todosFromLocalStorage = JSON.parse(localStorage.getItem('todos'));
  const [todos, setTodos] = useState(todosFromLocalStorage || initialTodos);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  },[todos])

  const addTodo = (newTodo) => {
    setTodos([...todos, {id: uuidv4(), task: newTodo, completed: false}])
  }

  const removeTodo = (todoId) => {
    const filteredTodo = todos.filter(todo => todo.id !== todoId);
    setTodos(filteredTodo)
  }

  const toggleCompletion = (todoId) => {
    const updatedTodos = todos.map(todo => todo.id === todoId ? {...todo, completed: !todo.completed} : todo)
    setTodos(updatedTodos);
  }
  const editTodo = (todoId, newTodo) => {
    const updatedTodos = todos.map(todo => todo.id === todoId ? {...todo, task: newTodo} : todo)
    setTodos(updatedTodos);
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