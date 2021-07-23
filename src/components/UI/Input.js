import React from "react";

import styles from "./Input.module.css";

const Input = (props) => {
  let cssClasses = "";
  if (props.className) {
    cssClasses += ` ${props.className}`;
  }
  if (props.isValid === false) {
    cssClasses += ` ${styles.invalid}`;
  }

  return (
    <div className={cssClasses}>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        type={props.type}
        id={props.id}
        value={props.value}
        autoComplete={props.autoComplete}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </div>
  );
};

export default Input;
