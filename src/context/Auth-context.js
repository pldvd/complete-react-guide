import React from 'react';

//this will be like a custom-scoped state, set as a wrapper component around the JSX where it should be available. Setting the default value of context by passing it to the createContext method, is optional (as it will be overwritten in the JSX anyway), but helps with IDE auto-completion
const AuthContext = React.createContext({
  authenticated: false,
  logIn: () => {},
});

export default AuthContext;