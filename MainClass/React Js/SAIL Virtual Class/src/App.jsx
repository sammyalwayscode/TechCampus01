import Home from "./pages/Home";
import Footer from "./static/Footer";
import Hero from "./components/Hero";

const App = () => {
  const num1 = 2;
  const num2 = 7;
  const addNum = num1 + num2;
  return (
    <div>
      <h1>This is the sum of all my Numbers {addNum} </h1>
      <Home myName="Sammy" />
      <Footer />
      <Hero answer={addNum} />
    </div>
  );
};

export default App;
