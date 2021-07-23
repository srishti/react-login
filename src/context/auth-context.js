import React, { useState, useEffect } from "react";

const AuthContext = React.createContext({
  isAuthenticated: false,
  onLogin: () => {},
  onLogout: () => {},
});

export const AuthContextProvider = (props) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    console.log("[App - useEffect] Callback");
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn === "1") {
      setIsAuthenticated(true);
    }
  }, []);

  /**
   * Funtion to login to the app
   */
  const login = () => {
    localStorage.setItem("isLoggedIn", "1");
    setIsAuthenticated(true);
  };

  /**
   * Function to logout from the app
   */
  const logout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsAuthenticated(false);
  };

  const authContextProviderValues = {
    isAuthenticated: isAuthenticated,
    onLogin: login,
    onLogout: logout,
  };

  return (
    <AuthContext.Provider {...props} value={authContextProviderValues}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
