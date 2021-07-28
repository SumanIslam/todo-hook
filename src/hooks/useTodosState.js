import { v4 as uuidv4 } from 'uuid';
import useLocalStorageState from "./useLocalStorageState";

const UseTodoState = (initialTodos) => {
  const [todos, setTodos] = useLocalStorageState('keys', initialTodos);
  return {
    todos,
    addTodo: (newTodo) => {
      setTodos([...todos, {id: uuidv4(), task: newTodo, completed: false}])
    },
    removeTodo: (todoId) => {
      const filteredTodo = todos.filter(todo => todo.id !== todoId);
      setTodos(filteredTodo)
    },
    toggleCompletion: (todoId) => {
      const updatedTodos = todos.map(todo => todo.id === todoId ? {...todo, completed: !todo.completed} : todo)
      setTodos(updatedTodos);
    },
    editTodo: (todoId, newTodo) => {
      const updatedTodos = todos.map(todo => todo.id === todoId ? {...todo, task: newTodo} : todo)
      setTodos(updatedTodos);
    }
  }
}
 
export default UseTodoState;