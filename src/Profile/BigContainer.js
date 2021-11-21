import React from "react";
import styled from "styled-components";
import { theme } from "../Utilities/theme";
import PictureSection from "./PictureSection";
import axios from "axios";
import InformationBox from "./InformationBox";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10rem;
  position: relative;
  left: 3rem;
  top: 2rem;
`;
function BigContainer(props) {
  const [users, setUsers] = React.useState([]);
  const [userData, setUserData] = React.useState([]);
  React.useEffect(async () => {
    await axios
      .get("http://localhost:8080/students?limit=10")
      .then(({ data }) => setUsers(data));
  }, []);
  React.useEffect(() => {
    const id = window.localStorage.getItem("userID");
    console.log(id);
    setUserData(users.filter((p) => p.studentId === id));
  }, [users]);

  return (
    <Container>
      <PictureSection userData={userData[0]} />
      <InformationBox userData={userData[0]} />
    </Container>
  );
}

export default BigContainer;
