import { useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";

import styles from "./Login.module.css";

const USER_INPUT_INITIAL_VALUES = {
  email: "",
  password: "",
};
const INPUT_ERROR_INITIAL_VALUES = {
  email: false,
  password: false,
};

const Login = (props) => {
  console.log("[Login] rendered");

  const [userInput, setUserInput] = useState(USER_INPUT_INITIAL_VALUES);
  const [inputError, setInputError] = useState(INPUT_ERROR_INITIAL_VALUES);
  const [isInputValid, setIsInputValid] = useState(false);

  /**
   * Function as event handler when the value inside email input textbox changes
   * @param {Object} event
   */
  const emailChangeHandler = (event) => {
    const newEmail = event.target.value;

    setUserInput((prevState) => {
      return {
        ...prevState,
        email: newEmail,
      };
    });

    // set if form is valid (impacts the login button)
    setIsInputValid(
      validateEmail(newEmail) && validatePassword(userInput.password)
    );
  };

  /**
   * Function as event handler when the value inside password input textbox changes
   * @param {Object} event
   */
  const passwordChangeHandler = (event) => {
    const newPassword = event.target.value;

    setUserInput((prevState) => {
      return {
        ...prevState,
        password: newPassword,
      };
    });

    // set if form is valid (impacts the login button)
    setIsInputValid(
      validateEmail(userInput.email) && validatePassword(newPassword)
    );
  };

  /**
   * Function as event handler when the email input textbox is blurred
   * @param {Object} event
   */
  const emailBlurHandler = (event) => {
    // set/unset error for email (impacts the invalid class on input field)
    setInputError((prevState) => {
      return {
        ...prevState,
        email: !validateEmail(event.target.value),
      };
    });
  };

  /**
   * Function as event handler when the password input textbox is blurred
   * @param {Object} event
   */
  const passwordBlurHandler = (event) => {
    // set/unset error for password (impacts the invalid class on input field)
    setInputError((prevState) => {
      return {
        ...prevState,
        password: !validatePassword(event.target.value),
      };
    });
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
   * Function serving as event handler when form is submitted
   * @param {object} event
   */
  const submitFormHandler = (event) => {
    event.preventDefault();

    // form is submitted only when the button is enabled & button is enabled only when current email & password in text fields are valid
    props.onLogin();

    // reset the user input and errors when the form is submitted
    setUserInput(USER_INPUT_INITIAL_VALUES);
    setInputError(INPUT_ERROR_INITIAL_VALUES);
    setIsInputValid(true);
  };

  return (
    <Card className={styles["login"]}>
      <form className={styles["login-form"]} onSubmit={submitFormHandler}>
        <div
          className={`${styles["form-control"]} ${
            inputError.email && styles.invalid
          }`}
        >
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={userInput.email}
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
            autoComplete="email"
          />
        </div>
        <div
          className={`${styles["form-control"]} ${
            inputError.password && styles.invalid
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={userInput.password}
            onChange={passwordChangeHandler}
            onBlur={passwordBlurHandler}
            autoComplete="password"
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
