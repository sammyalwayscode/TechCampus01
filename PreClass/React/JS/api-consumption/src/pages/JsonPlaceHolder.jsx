import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";

const JsonPlaceHolder = () => {
  const [data, setData] = useState([]);
  const [axiosData, setAxiosData] = useState([]);
  const [aosData, setAosData] = useState([]);
  //   fullAxios
  const [myData, setMyData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const getFecthData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((responce) => responce.json())
      .then((res) => setData(res));
  };

  const getAxiosData = async () => {
    await axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setAxiosData(res.data));
  };

  const getAxiosDataTwo = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    setAosData(res.data);
  };

  const getMainAxios = async () => {
    await axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setMyData(res.data), setIsLoading(true))
      .catch((err) => setError(err), setIsLoading(true));
  };



  console.log("From Fetch", data);
  console.log("from Axios", axiosData);
  console.log("From second Axios", aosData);

  useEffect(() => {
    getFecthData();
    getAxiosData();
    getAxiosDataTwo();
  }, []);


  if (isLoading) return <h1>Loading...</h1>;
    if (error) return <div>Error {error.message} </div>;

  return (
    <Container>
      <h2>User Data</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Address</th>
            <th>Phone No</th>
            <th>Website</th>
            <th>Company</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td> name</td>
            <td> username </td>
            <td> email</td>
            <td> street </td>
            <td> phone </td>
            <td> web </td>
            <td> compny </td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
};

export default JsonPlaceHolder;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  table {
    border-collapse: collapse;
    width: 80%;
    margin: 30px 0px;
  }

  th {
    background-color: lightgreen;
    color: #fff;
    padding: 10px;
    text-align: left;
    border-bottom: 2px solid #ddd;
  }

  td {
    padding: 10px;
    border: 1px solid #ddd;
  }
`;
