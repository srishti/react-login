import { useState } from "react";

import Header from "./components/Header/Header";
import Login from "./components/Login/Login";

const App = () => {
  console.log("[App rendered]");

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  /**
   * Funtion to login to the app
   */
  const login = () => {
    setIsLoggedIn(true);
  };

  /**
   * Function to logout from the app
   */
  const logout = () => {
    setIsLoggedIn(false);
  };

  return (
    <>
      <Header isLoggedIn={isLoggedIn} onLogout={logout} />
      <Login isLoggedIn={isLoggedIn} onLogin={login} />
    </>
  );
};

export default App;
