import { useState } from "react";
import styled from "styled-components";

const Profile = () => {
  // thi is the first step
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [date, setDate] = useState("");
  const [phoneNo, setPhoneNo] = useState(0);
  const [bio, setBio] = useState("");
  //   const [gender, setGender] = useState("");

  const [storeProfile, setStoreProfile] = useState([]);

  // to chect if it's working on the console
  console.log(name, age, date, phoneNo, bio);

  // the third step :  to post a new profile
  const createNewProfile = () => {
    setStoreProfile([...storeProfile, { name, age, date, phoneNo, bio }]);
    setAge(0);
    setBio("");
    setDate("");
    setName("");
    setPhoneNo("");
  };

  console.log(storeProfile);

  return (
    <Container>
      {/* create a simple profile with a name, age, gender, DOB, phoneNo, bio, Profile Picture */}
      <div>
        <Sections>
          <input
            type="text"
            placeholder="Enter your name"
            // this is the second step
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />

          <select
            value={age}
            onChange={(e) => {
              setAge(e.target.value);
            }}
          >
            <option value="12 - 18"> 12 - 18 </option>
            <option value="19 - 25"> 19 - 25</option>
            <option value="26 - 40"> 26 - 40</option>
            <option value="41 - 60"> 41 - 60</option>
            <option value="60 and above"> 60 and above</option>
          </select>

          <input
            type="date"
            placeholder="Enter your DOB"
            value={date}
            onChange={(e) => {
              setDate(e.target.value);
            }}
          />
          <input
            type="number"
            placeholder="Enter Your Phone No"
            value={phoneNo}
            onChange={(e) => {
              setPhoneNo(e.target.value);
            }}
          />
          <textarea
            value={bio}
            onChange={(e) => {
              setBio(e.target.value);
            }}
          />
        </Sections>
        {/* <main>
          <span>Male</span>
          <input type="radio"  />
          <span>Female</span>
          <input type="radio" />
        </main> */}
        <Button onClick={createNewProfile}>Submmit</Button>
      </div>

      <Data>
        {storeProfile.map((data, index) => (
          <Card key={index}>
            <h3> {data.name} </h3>
            <p> {data.age} </p>
            <p> {data.date} </p>
            <p> {data.phoneNo} </p>
            <p> {data.bio} </p>
            {/* <p>Gender</p> */}
          </Card>
        ))}
      </Data>
    </Container>
  );
};

export default Profile;

const Container = styled.div`
  margin: 30px;
  display: flex;
  justify-content: space-around;
`;
const Sections = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;

  input {
    height: 40px;
    width: 350px;
    outline: none;
    margin: 10px 0;
    font-family: Poppins;
    font-weight: 600;
  }

  select {
    height: 40px;
    width: 350px;
    outline: none;
    margin: 10px 0;
    font-family: Poppins;
    font-weight: 600;
  }

  textarea {
    height: 150px;
    width: 350px;
    outline: none;
    margin: 10px 0;
    font-family: Poppins;
    font-weight: 600;
  }
`;
const Data = styled.div``;
const Button = styled.button`
  height: 40px;
  width: 120px;
  outline: none;
  border: none;
  background-color: darkmagenta;
  color: #fff;
  font-family: Poppins;

  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Card = styled.div`
  min-width: 300px;
  min-height: 300px;
  background-color: lightblue;
  padding: 20px;
  margin: 20px;
`;
