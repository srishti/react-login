import React, { useContext } from "react";

import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import AuthContext from "./context/auth-context";

const App = () => {
  console.log("[App] rendered");

  const authContext = useContext(AuthContext);

  return (
    <>
      <Header />
      <main>{authContext.isAuthenticated ? <Home /> : <Login />}</main>
    </>
  );
};

export default App;
