import Card from "../UI/Card";

import styles from "./Welcome.module.css";

const Welcome = () => {
  console.log("[Welcome rendered]");

  return (
    <Card className={styles.welcome}>
      <h2>Welcome back!</h2>
    </Card>
  );
};

export default Welcome;
