import {
  useState
} from 'react';

export const useLocalStorage = (key, defaultValue) => {
  const localItem = JSON.parse(localStorage.getItem(key)) || defaultValue;
  const [value, setValue] = useState(localItem);

  localStorage.setItem(key, JSON.stringify(value));

  return [value, setValue];
};
