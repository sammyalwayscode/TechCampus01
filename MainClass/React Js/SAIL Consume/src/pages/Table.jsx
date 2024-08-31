import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { NameState } from "../global/GlobalContext";

const Table = () => {
  const [myData, setMyData] = useState([]);
  const { myName } = useContext(NameState);
  console.log(myName);
  const getData = async () => {
    await axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((responce) => {
        setMyData(responce.data);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(myData);

  return (
    <div className=" p-20">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <h1> {myName} </h1>
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
            <tr>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Username
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Address
              </th>
              <th scope="col" className="px-6 py-3">
                Phone No
              </th>
              <Link to="weather">
                <th scope="col" className="px-6 py-3">
                  Website
                </th>
              </Link>
            </tr>
          </thead>
          <tbody>
            {myData.map((myUser, i) => (
              <tr className="odd:bg-white even:bg-gray-50  border-b " key={i}>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                >
                  {myUser.name}
                </th>
                <td className="px-6 py-4"> {myUser.username} </td>
                <td className="px-6 py-4"> {myUser.email} </td>
                <td className="px-6 py-4">
                  {" "}
                  {myUser.address.street}, {myUser.address.city}{" "}
                </td>
                <td className="px-6 py-4"> {myUser.phone} </td>
                <td className="px-6 py-4">
                  <a
                    href="#"
                    className="font-medium text-blue-600 hover:underline"
                  >
                    {myUser.website}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
