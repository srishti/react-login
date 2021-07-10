import styles from "./Button.module.css";

const Button = (props) => {
  console.log("[Button rendered]");

  let cssClasses = [styles.button];

  switch (props.color) {
    case "primary":
      cssClasses.push(styles.primary);
      break;
    case "secondary":
    default:
      cssClasses.push(styles.secondary);
      break;
  }

  if (props.className) {
    cssClasses = [...cssClasses, props.className.split(" ")];
  }

  return (
    <button
      type={props.type || "button"}
      className={cssClasses.join(" ")}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
