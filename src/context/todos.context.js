import { createContext } from "react";
import useTodoState from "../hooks/useTodoState";

const initialTodos = [{id: 1, task: 'go to school', completed: false}];
export const TodosContext = createContext();

export const TodosProvider = (props) => {
  const todoStuff = useTodoState(initialTodos);

  return(
    <TodosContext.Provider value={todoStuff}>
      {props.children}
    </TodosContext.Provider>
  )
}