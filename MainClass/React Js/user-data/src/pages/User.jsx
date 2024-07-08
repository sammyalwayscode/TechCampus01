import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

const User = () => {
  const [userData, setUserData] = useState([]);

  const getUserData = async () => {
    await axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUserData(res.data));
  };

  useEffect(() => {
    getUserData();
  }, []);

  console.log(userData);

  return (
    <Container>
      <Wrapper>
        <label>All User Data</label>
        <SearchBar>
          <input type="search" placeholder="Make a Seach" />
          <button>Search</button>
        </SearchBar>
        <MainTable>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Username</th>
                <th>email</th>
                <th>address</th>
              </tr>
            </thead>
            <tbody>
              {userData.map((data, i) => (
                <tr key={i}>
                  <td> {data.name} </td>
                  <td> {data.username} </td>
                  <td>Sam@gmai.com</td>
                  <td>
                    <Circle> {data.name.charAt()} </Circle>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </MainTable>
      </Wrapper>
    </Container>
  );
};

export default User;

const Container = styled.div`
  width: 90%;
  background-color: #fff;
  min-height: 80vh;
  margin-right: auto;
  margin-left: auto;
  margin-top: 30px;
`;
const Wrapper = styled.div`
  label {
    margin-left: 30px;
    padding-top: 30px;
    font-weight: 700;
  }
`;
const SearchBar = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 20px;
  width: 100%;

  button {
    height: 40px;
    width: 150px;
    background-color: #2563eb;
    border: none;
    outline: none;
    color: #fff;
    font-family: Montserrat;
  }

  input {
    height: 40px;
    width: 80%;
    background-color: #eee;
    border: none;
    outline: none;
    font-family: Montserrat;
    font-weight: 500;
  }
`;
const MainTable = styled.div`
  width: 90%;
  margin-right: auto;
  margin-left: auto;

  table {
    width: 100%;
  }

  th,
  td {
    border: 1px solid #ddd;
    padding: 10px;
    text-align: center;
  }
`;

const Circle = styled.div`
  height: 40px;
  width: 40px;
  background-color: lightblue;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: 700;
  color: #fff;
`;
