import styles from "./Card.module.css";

const Card = (props) => {
  console.log("[Card] rendered");

  let cssClasses = [styles.card];

  if (props.className) {
    cssClasses = [...cssClasses, props.className.split(" ")];
  }

  return <article className={cssClasses.join(" ")}>{props.children}</article>;
};

export default Card;
