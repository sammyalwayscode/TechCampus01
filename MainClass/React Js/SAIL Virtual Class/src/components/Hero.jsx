/* eslint-disable react/prop-types */
import Button from "./reuseable/Button";
const Hero = ({ answer }) => {
  return (
    <div>
      <h1>This is the Hero Page and the ans is {answer} </h1>
      <Button buttonName="Read More" />
    </div>
  );
};

export default Hero;
