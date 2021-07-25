import { useState } from "react";

function useToggleState(props) {
  const initialValue = props;
  const [value, setValue] = useState(initialValue);
  const toggle = () => {
    setValue(!value);
  }
  return [value, toggle];
}

export default useToggleState;