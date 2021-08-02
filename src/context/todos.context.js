import { createContext } from "react";
import todoReducer from "../reducer/todo.reducer";
import useLocalStorageReducer from "../hooks/useLocalStorageReducer";

const initialTodos = [{id: 1, task: 'go to school', completed: false}];
export const TodosContext = createContext();
export const DispatchContext = createContext();

export const TodosProvider = (props) => {
  // const todoStuff = useTodoState(initialTodos);
  const [todos, dispatch] = useLocalStorageReducer('todos',todoReducer, initialTodos)

  return(
    <TodosContext.Provider value={ todos }>
      <DispatchContext.Provider value={ dispatch }>
       {props.children}
      </DispatchContext.Provider>
    </TodosContext.Provider>
  )
}