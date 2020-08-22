import { useReducer, useContext, createContext, useEffect } from 'react';
import Cookie from 'js-cookie';
import AuthReducer from './reducer';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {

  const [state, dispatch] = useReducer(AuthReducer, '', () => {
    return { token: Cookie.get('token') };
  });

  useEffect(() => {
    Cookie.set('token', state.token)
  }, [state]);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  )
};

const useAuth = () => { 
  const context = useContext(AuthContext);
  return context;
};

export {
  AuthProvider,
  useAuth
}