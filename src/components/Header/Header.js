import UserActions from "./UserActions";

import styles from "./Header.module.css";

const Header = (props) => {
  console.log("[Header rendered]");

  return (
    <header className={styles.header}>
      <h1>A Typical Page</h1>
      {props.isLoggedIn && <UserActions onLogout={props.onLogout} />}
    </header>
  );
};

export default Header;
