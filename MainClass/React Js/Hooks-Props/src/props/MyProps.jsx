import Header from "../header/Header";
import Button from "./Button";

const MyProps = () => {
  return (
    <div>
      <Header />
      <h1>props</h1>
      <Button buttonName="Sign Up" />
      <Button buttonName="Login" />
      <Button buttonName="About us" />
      <Button buttonName="Register Now" />
    </div>
  );
};

export default MyProps;
