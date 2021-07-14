import { useEffect, useState } from "react";

import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";

const App = () => {
  console.log("[App] rendered");

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

  return (
    <>
      <Header isAuthenticated={isAuthenticated} onLogout={logout} />
      <main>{isAuthenticated ? <Home /> : <Login onLogin={login} />}</main>
    </>
  );
};

export default App;
