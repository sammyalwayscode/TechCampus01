import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const StoreDetail = () => {
  const { id } = useParams();
  console.log(id);

  const [myDetail, setMyDetail] = useState({});

  const getMyDetail = async () => {
    await axios.get(`https://fakestoreapi.com/products/${id}`).then((res) => {
      setMyDetail(res.data);
    });
  };

  useEffect(() => {
    getMyDetail();
  }, []);

  console.log(myDetail);

  return (
    <div>
      <section className="p-10">
        <img src={myDetail.image} alt="" className=" h-[400px] w-full" />
        <h1 className=" font-bold text-xl"> {myDetail.title} </h1>
        <p> ${myDetail.price} </p>
        <p> {myDetail.category} </p>
        <p> {myDetail.description} </p>
      </section>
    </div>
  );
};

export default StoreDetail;
