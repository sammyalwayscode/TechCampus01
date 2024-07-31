import BigCard from "../reuseable/BigCard";

const HomeTop = () => {
  const a = 34;
  const b = 73;
  const add = a + b;
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <BigCard username="samuel" followNum="1804" todayNum={add} />
      <BigCard username="jide" followNum="2536" todayNum="35" />
      <BigCard username="shade" followNum="6382" todayNum="43" />
      <BigCard username="ben" followNum="8722" todayNum="90" />
    </div>
  );
};

export default HomeTop;
