 import React, { createContext, useReducer, useEffect, useContext } from 'react';
import authReducer from './reducer';

const initialState = {
  username: '',
  token: '',
  signed: false,
};

const AuthStore = createContext(initialState);

const GlobalAuth = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState, () => {
    const localData = localStorage.getItem('state');
    return localData ? JSON.parse(localData) : initialState;
  });

  useEffect(() => {
    localStorage.setItem('state', JSON.stringify(state));
  }, [state]);

  return (
    <AuthStore.Provider value={{ state, dispatch }}>
      {children}
    </AuthStore.Provider>
  );
};

function useAuth() {
  const context = useContext(AuthStore);
  return context;
}

export { useAuth };
export default GlobalAuth;