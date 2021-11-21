import React from "react";
import styled from "styled-components";
import { getSafe } from "../Utilities/helpers";
import Card from "./Card";
import axios from "axios";
const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 4fr);
`;
function Historique(props) {
  const [users, setUsers] = React.useState([]);
  const [userData, setUserData] = React.useState([]);
  const [histo, setHisto] = React.useState([]);
  React.useEffect(async () => {
    await axios
      .get("http://localhost:8080/students")
      .then(({ data }) => setUsers(data));
  }, []);
  React.useEffect(() => {
    const id = window.localStorage.getItem("userID");
    console.log(id);
    setUserData(users.filter((p) => p.studentId === id));
  }, [users]);
  React.useEffect(async () => {
    await axios
      .get(
        `http://localhost:8080/historique/${window.localStorage.getItem(
          "userID"
        )}`
      )
      .then(({ data }) => setHisto(data));
  }, [userData]);
  console.log(histo);
  return (
    <Container>
      {histo.map((item) => (
        <Card data={item} user={userData[0]} />
      ))}
    </Container>
  );
}

export default Historique;
