import React from "react";
import styled from "styled-components";
import { theme } from "../Utilities/theme";
import Spacer from "../Utilities/Spacer";
import Heading from "./Heading";
import Button from "./Button";
import { getSafe } from "../Utilities/helpers";
const Container = styled.div`
  width: 50vw;

  .form {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(5, 1fr);
    grid-column-gap: 6rem;
    grid-row-gap: 0px;
  }

  .first {
    font-size: 1.3rem;
    letter-spacing: 0.4rem;
  }
`;
function InformationBox({ userData }) {
  console.log(userData);
  return (
    <Container>
      <Spacer margin="2rem" />

      <Heading
        city={getSafe(() => userData.home)}
        name={getSafe(() => userData.firstName + " " + userData.lastName)}
      />
      <Spacer margin="4rem" />
      <div className="form">
        <p className="first">First Name :</p>
        <p className="second">{getSafe(() => userData.firstName)}</p>
        <p className="first">Last Name :</p>
        <p className="second">{getSafe(() => userData.lastName)}</p>
        <p className="first">Gender :</p>
        <p className="second">{getSafe(() => userData.gender)}</p>
        <p className="first">Email :</p>
        <p className="second">{getSafe(() => userData.email)}</p>
      </div>
    </Container>
  );
}

export default InformationBox;
