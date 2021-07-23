import { useEffect, useState, useReducer, useContext } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import AuthContext from "../../context/auth-context";

import styles from "./Login.module.css";

const INITIAL_STATE = {
  value: "",
  isValid: null,
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

const emailReducer = (state, action) => {
  switch (action.type) {
    case "INPUT_CHANGE":
      return {
        ...state,
        value: action.payload,
      };
    case "INPUT_BLUR":
      return {
        ...state,
        isValid: validateEmail(state.value),
      };
    default:
      return state;
  }
};

const passwordReducer = (state, action) => {
  switch (action.type) {
    case "INPUT_CHANGE":
      return {
        ...state,
        value: action.payload,
      };
    case "INPUT_BLUR":
      return {
        ...state,
        isValid: validatePassword(state.value),
      };
    default:
      return state;
  }
};

const Login = (props) => {
  console.log("[Login] rendered");

  const [email, dispatchEmail] = useReducer(emailReducer, INITIAL_STATE);
  const [password, dispatchPassword] = useReducer(
    passwordReducer,
    INITIAL_STATE
  );

  const [isFormValid, setIsFormValid] = useState(false);

  const authContext = useContext(AuthContext);

  const { value: emailValue } = email;
  const { value: passwordValue } = password;

  useEffect(() => {
    console.log("[Login - useEffect] Callback");

    const timer = setTimeout(() => {
      console.log("[Login - useEffect] Checking Form Validity inside Timer");

      // set if form is valid (impacts the login button)
      setIsFormValid(
        validateEmail(email.value) && validatePassword(password.value)
      );
    }, 500);

    return () => {
      console.log("[Login - useEffect] Cleanup");
      clearTimeout(timer);
    };
  }, [emailValue, passwordValue]);

  /**
   * Function as event handler when the value inside email input textbox changes
   * @param {Object} event
   */
  const emailChangeHandler = (event) => {
    dispatchEmail({ type: "INPUT_CHANGE", payload: event.target.value });
  };

  /**
   * Function as event handler when the value inside password input textbox changes
   * @param {Object} event
   */
  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: "INPUT_CHANGE", payload: event.target.value });
  };

  /**
   * Function as event handler when the email input textbox is blurred
   * @param {Object} event
   */
  const emailBlurHandler = (event) => {
    // set/unset error for email (impacts the invalid class on input field)
    dispatchEmail({ type: "INPUT_BLUR" });
  };

  /**
   * Function as event handler when the password input textbox is blurred
   * @param {Object} event
   */
  const passwordBlurHandler = (event) => {
    // set/unset error for password (impacts the invalid class on input field)
    dispatchPassword({ type: "INPUT_BLUR" });
  };

  /**
   * Function serving as event handler when form is submitted
   * @param {object} event
   */
  const submitFormHandler = (event) => {
    event.preventDefault();

    // form can now be submitted when user types in a valid value and quickly types an invalid value and clicks on login button before timer lapses; validate form before invoking login() method
    if (email.isValid && password.isValid) {
      authContext.onLogin();
    }
  };

  return (
    <Card className={styles["login"]}>
      <form className={styles["login-form"]} onSubmit={submitFormHandler}>
        <div
          className={`${styles["form-control"]} ${
            email.isValid === false && styles.invalid
          }`}
        >
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email.value}
            autoComplete="email"
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
          />
        </div>
        <div
          className={`${styles["form-control"]} ${
            password.isValid === false && styles.invalid
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            autoComplete="password"
            value={password.value}
            onChange={passwordChangeHandler}
            onBlur={passwordBlurHandler}
          />
        </div>
        <Button
          type="submit"
          className={styles["form-control-button"]}
          disabled={!isFormValid}
        >
          Login
        </Button>
      </form>
    </Card>
  );
};

export default Login;
