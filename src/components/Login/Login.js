import { useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";

import styles from "./Login.module.css";

const USER_INPUT_INITIAL_VALUES = {
  email: "",
  password: "",
};

const Login = (props) => {
  console.log("[Login] rendered");

  const [userInput, setUserInput] = useState(USER_INPUT_INITIAL_VALUES);
  const [isInputValid, setIsInputValid] = useState(false);

  const emailChangeHandler = (event) => {
    const newEmail = event.target.value;

    setUserInput((prevState) => {
      return {
        ...prevState,
        email: newEmail,
      };
    });

    if (validateUserInput(newEmail, userInput.password)) {
      setIsInputValid(true);
    } else {
      setIsInputValid(false);
    }
  };

  const passwordChangeHandler = (event) => {
    const newPassword = event.target.value;

    setUserInput((prevState) => {
      return {
        ...prevState,
        password: newPassword,
      };
    });
    if (validateUserInput(userInput.email, newPassword)) {
      setIsInputValid(true);
    } else {
      setIsInputValid(false);
    }
  };

  /**
   * Function to validate email
   * @param {String} email
   * @returns true - when email is valid
   *          false - when email is invalid
   */
  const validateEmail = (email) => {
    let isEmailValid = false;

    // CREDITS - https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
    const regex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (email.trim() && regex.test(email)) {
      isEmailValid = true;
    }

    return isEmailValid;
  };

  /**
   * Function to validate password
   * @param {String} password
   * @returns true - when password is valid
   *          false - when password is invalid
   */
  const validatePassword = (password) => {
    let isPasswordValid = false;

    if (password.trim() && password.length >= 7) {
      isPasswordValid = true;
    }

    return isPasswordValid;
  };

  /**
   * Function to validate user input
   * @param {String} email
   * @param {String} password
   * @returns true - when both email & password are valid
   *          false - when either email of password is invalid
   */
  const validateUserInput = (email, password) => {
    return validateEmail(email) && validatePassword(password);
  };

  /**
   * Function serving as event handler when form is submitted
   * @param {object} event
   */
  const submitFormHandler = (event) => {
    event.preventDefault();

    setIsInputValid(true);
    setUserInput(USER_INPUT_INITIAL_VALUES);

    props.onLogin();
  };

  return (
    <Card className={styles["login"]}>
      <form className={styles["login-form"]} onSubmit={submitFormHandler}>
        <div className={styles["form-control"]}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={userInput.email}
            onChange={emailChangeHandler}
          />
        </div>
        <div className={styles["form-control"]}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            autoComplete="on"
            value={userInput.password}
            onChange={passwordChangeHandler}
          />
        </div>
        <Button
          className={styles["form-control-button"]}
          onClick={submitFormHandler}
          disabled={!isInputValid}
        >
          Login
        </Button>
      </form>
    </Card>
  );
};

export default Login;
