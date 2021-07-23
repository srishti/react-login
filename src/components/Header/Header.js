import React, { useContext } from "react";
import Navigation from "./Navigation";
import AuthContext from "../../context/auth-context";

import styles from "./Header.module.css";

const Header = (props) => {
  console.log("[Header] rendered");

  const authContext = useContext(AuthContext);

  return (
    <header className={styles.header}>
      <h1>A Typical Page</h1>
      {authContext.isAuthenticated && (
        <Navigation onLogout={authContext.onLogout} />
      )}
    </header>
  );
};

export default Header;
