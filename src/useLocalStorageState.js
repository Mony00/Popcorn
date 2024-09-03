import { useState, useEffect } from "react";

export function useLocalStorageState(initialState, key) {
  const [value, setValue] = useState(function () {
    const storedValue = localStorage.getItem(key);
    //initial state value can be find in th application section from inspect
    return storedValue ? JSON.parse(storedValue) : initialState; // this converts back the data (parse)
  });
  useEffect(
    function () {
      localStorage.setItem("watched", JSON.stringify(value)); // here is converted to string
    },
    [value, key]
  );

  return [value, setValue];
}
