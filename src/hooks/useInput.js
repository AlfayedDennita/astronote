import { useState } from 'react';

function useInput({ defaultValue = '', maxLength = null }) {
  const [value, setValue] = useState(defaultValue);

  const onInputChangeHandler = (event) => {
    const inputValue = event.target.value;

    if (maxLength === null || (maxLength !== null && inputValue.length <= maxLength)) {
      setValue(inputValue);
    }
  };

  return [value, onInputChangeHandler];
}

export default useInput;
