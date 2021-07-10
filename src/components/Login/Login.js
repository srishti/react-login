import { useRef } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";

import styles from "./Login.module.css";

const Login = (props) => {
  console.log("[Login] rendered");

  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);

  /**
   * Function to validate user input
   * @param {String} email
   * @param {String} password
   * @returns true - when input is valid
   *          false - when input is invalid
   */
  const validateUserInput = (email, password) => {
    if (!email.trim() || !password.trim() || password.trim().length < 7) {
      return false;
    }
    return true;
  };

  /**
   * Function serving as event handler when form is submitted
   * @param {object} event
   */
  const submitFormHandler = (event) => {
    event.preventDefault();

    const email = emailInputRef.current.value;
    const password = passwordInputRef.current.value;

    if (validateUserInput(email, password)) {
      props.onLogin();
    }
  };

  return (
    <Card className={styles["login"]}>
      <form className={styles["login-form"]} onSubmit={submitFormHandler}>
        <div className={styles["form-control"]}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" ref={emailInputRef} />
        </div>
        <div className={styles["form-control"]}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            autoComplete="on"
            ref={passwordInputRef}
          />
        </div>
        <Button
          className={styles["form-control-button"]}
          onClick={submitFormHandler}
        >
          Login
        </Button>
      </form>
    </Card>
  );
};

export default Login;
