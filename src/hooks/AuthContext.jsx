import React, { useContext, createContext, useCallback, useState } from 'react';
import AuthService from '../services/AuthService/AuthService';
import { useHistory } from 'react-router';
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
   const history = useHistory();
   const [data, setData] = useState(() => {
      const token = localStorage.getItem('@calango:token');
      if (token) {
         return { token };
      }
      return {};
   });
   const sigIn = useCallback(async ({ username, password }) => {
      const response = await AuthService.login({username, password})
      const {
         token
      } = response;
      localStorage.setItem('@calango:token', token);
      token && history.push('/list-car')

      setData( token );
   }, []);
   const signOut = useCallback(() => {
      localStorage.removeItem('token');
      setData({});
   }, []);

   return (
      <AuthContext.Provider
         value={{
            token: data.token,
            sigIn,
            signOut,
         }}>
         {children}
      </AuthContext.Provider>
   );
};

const useAuth = () => {
   const context = useContext(AuthContext);
   if (!context) {
      throw new Error('Usuário errado');
   }
   return context;
};

export { AuthProvider, useAuth };
