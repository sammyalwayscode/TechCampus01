import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";

const Todo = () => {
  const [userTodo, setUserTodo] = useState({});

  const getUserTodo = async () => {
    await axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((res) => setUserTodo(res.data));
  };

  useEffect(() => {
    getUserTodo();
  }, []);

  console.log(userTodo);

  return (
    <Container>
      <Wrapper>
        <label>All Todos</label>
        <SearchBar>
          <input type="search" placeholder="Make a Seach" />
          <button>Search</button>
        </SearchBar>
        <MainTable>
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th> {user} </th>
              </tr>
            </thead>
            <tbody>
              {userTodo.map((data, i) => (
                <tr key={i}>
                  <td> {data.title} </td>
                  <td>
                    {data.completed ? (
                      <Box>completed</Box>
                    ) : (
                      <Box2>Not Done</Box2>
                    )}
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

export default Todo;

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
    text-align: left;
  }
`;

const Box = styled.span`
  padding: 4px 60px;
  border-radius: 50px;
  background-color: green;
  color: #fff;
  text-align: center;
`;

const Box2 = styled.span`
  padding: 4px 60px;
  border-radius: 50px;
  background-color: red;
  color: #fff;
  text-align: center;
`;
