/* eslint-disable react/prop-types */
import "./BigCard.css";
const BigCard = (props) => {
  // const students = {
  //     name: "Shade"
  // }

  return (
    <div className="cardContainer">
      <small> {props.username} </small>
      <h1> {props.followNum} </h1>
      <span>Followers</span>
      <nav> {props.todayNum} Today</nav>
    </div>
  );
};

export default BigCard;
