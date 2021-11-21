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
  const [filter, setFilter] = React.useState([]);
  React.useEffect(async () => {
    await axios
      .get("http://localhost:8080/students?limit=10")
      .then(({ data }) => setUsers(data));
  }, []);
  React.useEffect(() => {
    const id = window.localStorage.getItem("userID");
    setUserData(users.filter((p) => p.studentId === id));
  }, [users]);
  React.useEffect(async () => {
    await axios
      .get(`http://localhost:8080/posts?limit=10`)
      .then(({ data }) => setHisto(data));
  }, [userData]);
  React.useEffect(() => {
    if (histo) {
      const output = histo.filter(
        (p) =>
          p.status === "request" &&
          p.student.studentId === window.localStorage.getItem("userID")
      );
      setFilter(output);
    }
  }, [histo]);
  return (
    <Container>
      {filter.map((item) => (
        <Card data={item} user={userData[0]} />
      ))}
    </Container>
  );
}

export default Historique;
