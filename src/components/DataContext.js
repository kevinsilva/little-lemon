import { createContext, useContext, useReducer, useState } from 'react';

const DataContext = createContext(undefined);

const initialTimes = ['17:00', '18:00', '19:00', '20:00', '21:00'];

const initializeTimes = () => initialTimes;

const updateTimes = (state, action) => {
  console.log('reducer', state);
  if (action.type === 'UPDATE_TIMES') return [...state, state];
  else return state;
};

export function DataContextProvider({ children }) {
  const [date, setDate] = useState('');
  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    initialTimes,
    initializeTimes
  );

  return (
    <DataContext.Provider value={{ availableTimes, dispatch, date, setDate }}>
      {children}
    </DataContext.Provider>
  );
}

export const useDataContext = () => useContext(DataContext);
