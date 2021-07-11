import styles from "./Button.module.css";

const Button = (props) => {
  console.log("[Button] rendered");

  let cssClasses = styles.button;

  if (props.className) {
    cssClasses = `${props.className} ${cssClasses}`;
  }

  return (
    <button
      type={props.type || "button"}
      className={cssClasses}
      disabled={props.disabled}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
