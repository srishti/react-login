import Button from "../UI/Button";

import styles from "./Navigation.module.css";

const Navigation = (props) => {
  console.log("[Navigation] rendered");

  return (
    <nav className={styles["navigation"]}>
      <ul>
        <li>
          <a href="/">Users</a>
        </li>
        <li>
          <a href="/">Admin</a>
        </li>
        <li>
          <Button color="primary" onClick={props.onLogout}>
            Logout
          </Button>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
