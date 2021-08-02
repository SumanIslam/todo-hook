import { useReducer, useEffect } from "react";

const useLocalStorageReducer = (key, todoReducer, initialValue) => {
  const [state, dispatch] = useReducer(todoReducer, initialValue, () => {
    let value;
    try {
      value = JSON.parse(localStorage.getItem(key) || String(initialValue))
      console.log(value);
    } catch {
      value = initialValue;
    }
    return value;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, dispatch];
}

export default useLocalStorageReducer;