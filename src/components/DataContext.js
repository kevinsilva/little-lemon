import { createContext, useContext, useReducer, useState } from 'react';
import { fetchAPI } from '../utils/mockAPI';

const DataContext = createContext(undefined);

function initializeTimes() {
  const today = new Date();
  return fetchAPI(today);
}

function updateTimes(state, action) {
  if (action.type === 'UPDATE_TIMES') return fetchAPI(new Date(action.date));
  else return state;
}

export function DataContextProvider({ children }) {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    time: '',
    date: '',
    bookingOccasion: '',
    numberOfGuests: '1',
  });

  return (
    <DataContext.Provider
      value={{ availableTimes, dispatch, formState, setFormState }}
    >
      {children}
    </DataContext.Provider>
  );
}

export const useDataContext = () => useContext(DataContext);
