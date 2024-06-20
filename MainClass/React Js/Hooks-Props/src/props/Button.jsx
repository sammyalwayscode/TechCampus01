/* eslint-disable react/prop-types */
const Button = (props) => {
  return (
    <div>
      <button
        style={{
          backgroundColor: "orange",
          margin: "10px",
        }}
      >
        {props.buttonName}
      </button>
    </div>
  );
};

export default Button;
