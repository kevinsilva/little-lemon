import { createContext, useContext, useReducer, useState } from 'react';
import { fetchAPI } from '../utils/mockAPI';
import { initialFormState } from '../utils/utilities';

const DataContext = createContext(undefined);

export function initializeTimes() {
  const today = new Date();
  return fetchAPI(today);
}

export function updateTimes(state, action) {
  if (action.type === 'UPDATE_TIMES') return fetchAPI(new Date(action.date));
  else return state;
}

export function DataContextProvider({ children }) {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());
  const [formState, setFormState] = useState(initialFormState);

  return (
    <DataContext.Provider
      value={{ availableTimes, dispatch, formState, setFormState }}
    >
      {children}
    </DataContext.Provider>
  );
}

export const useDataContext = () => useContext(DataContext);
