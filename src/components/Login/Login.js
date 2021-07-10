import LoginForm from "./LoginForm";
import Welcome from "./Welcome";

const Login = (props) => {
  console.log("[Login rendered]");

  return props.isLoggedIn ? <Welcome /> : <LoginForm onLogin={props.onLogin} />;
};

export default Login;
