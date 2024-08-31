import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { NameState } from "../../global/GlobalContext";

const Store = () => {
  const [myStore, setMyStore] = useState([]);

  const { myName } = useContext(NameState);

  const getStore = async () => {
    await axios.get("https://fakestoreapi.com/products").then((res) => {
      setMyStore(res.data);
    });
  };

  useEffect(() => {
    getStore();
  }, []);

  console.log(myStore);

  return (
    <div>
      <section className=" flex flex-wrap justify-center">
        {myStore.map((myData, i) => (
          <main className=" m-5" key={i}>
            <Link to={`/detail/${myData.id}`}>
              <img src={myData.image} alt="img" width="300" height="300" />
            </Link>
            <h1 className=" w-[300px] text-wrap text-ellipsis">
              {" "}
              {myData.title}{" "}
            </h1>
            <p> {myData.price} </p>
            <h1 className=" text-6xl"> {myName} </h1>
          </main>
        ))}
      </section>
    </div>
  );
};

export default Store;
