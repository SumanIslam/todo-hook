import { v4 as uuidv4 } from 'uuid';

const reducer = (state, action) => {
  switch(action.type) {
    case 'ADDTODO': 
      return [...state, {id: uuidv4(), task: action.task, completed: false}]
    case 'REMOVETODO': 
      return state.filter(todo => todo.id !== action.id)
    case 'TOGGLE': 
      return state.map(todo => todo.id === action.id ? {...state, completed: !todo.completed} : todo)
    case 'EDITTODO':
      return state.map(todo => todo.id === action.id ? {...state, task: action.task} : todo)
    default: 
      return {
        state
      }
  }
}

export default reducer;
