import Navigation from "./Navigation";

import styles from "./Header.module.css";

const Header = (props) => {
  console.log("[Header] rendered");

  return (
    <header className={styles.header}>
      <h1>A Typical Page</h1>
      {props.isAuthenticated && <Navigation onLogout={props.onLogout} />}
    </header>
  );
};

export default Header;
