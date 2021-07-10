import { useState } from "react";

import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";

const App = () => {
  console.log("[App] rendered");

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  /**
   * Funtion to login to the app
   */
  const login = () => {
    setIsAuthenticated(true);
  };

  /**
   * Function to logout from the app
   */
  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <>
      <Header isAuthenticated={isAuthenticated} onLogout={logout} />
      <main>{isAuthenticated ? <Home /> : <Login onLogin={login} />}</main>
    </>
  );
};

export default App;
