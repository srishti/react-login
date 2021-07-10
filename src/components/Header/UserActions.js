import Button from "../UI/Button";

import styles from "./UserActions.module.css";

const UserActions = (props) => {
  console.log("[UserActions rendered]");

  return (
    <section className={styles["user-actions"]}>
      <Button>Users</Button>
      <Button>Admin</Button>
      <Button color="primary" onClick={props.onLogout}>
        Logout
      </Button>
    </section>
  );
};

export default UserActions;
