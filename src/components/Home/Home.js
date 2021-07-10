import Card from "../UI/Card";

import styles from "./Home.module.css";

const Home = () => {
  console.log("[Home] rendered");

  return (
    <Card className={styles.home}>
      <h2>Welcome back!</h2>
    </Card>
  );
};

export default Home;
