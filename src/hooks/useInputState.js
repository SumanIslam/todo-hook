import { useState } from "react";

function useInputState(props) {
  const initialValue = props;
  const [value, setValue] = useState(initialValue);

  const handleChange = e => {
    setValue(e.target.value);
  }
  const reset = () => {
    setValue("");
  }

  return [value, handleChange, reset];
}

export default useInputState;