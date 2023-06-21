import { createContext, useState } from 'react';
import { initialState } from './states.js';

export const StateContext = createContext(initialState);

export const StateProvider = ({ children }) => {
  const [state, setState] = useState(initialState);

  const updateState = (updatedState) => {
    setState({ ...state, ...updatedState });
  };

  return (
    <StateContext.Provider value={{ state, updateState }}>
      {children}
    </StateContext.Provider>
  );
};
