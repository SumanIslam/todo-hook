import { createContext } from "react";
import UseTodoState from "../hooks/useTodosState";

const initialTodos = [{id: 1, task: 'go to school', completed: false}];
export const TodosContext = createContext();

export const TodosProvider = (props) => {
  const todoStuff = UseTodoState(initialTodos);

  return(
    <TodosContext.Provider value={todoStuff}>
      {props.children}
    </TodosContext.Provider>
  )
}