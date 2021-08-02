import { createContext, useReducer } from "react";
import reducer from "../reducer/todo.reducer";

const initialTodos = [{id: 1, task: 'go to school', completed: false}];
export const TodosContext = createContext();
export const DispatchContext = createContext();

export const TodosProvider = (props) => {
  // const todoStuff = useTodoState(initialTodos);
  const [todos, dispatch] = useReducer(reducer, initialTodos)

  return(
    <TodosContext.Provider value={ todos }>
      <DispatchContext.Provider value={ dispatch }>
       {props.children}
      </DispatchContext.Provider>
    </TodosContext.Provider>
  )
}