import React from "react";
import styled from "styled-components";
import { theme } from "../Utilities/theme";
import Spacer from "../Utilities/Spacer";
import { getSafe } from "../Utilities/helpers";
import Button from "./Button";

const Container = styled.div`
  width: 20rem;
  height: 40rem;
  position: relative;

  .picture {
    position: relative;
    width: 20rem;
    height: 15rem;
    border-radius: 50%;
    img {
      width: 15rem;
      height: 15rem;
      border-radius: 50%;
      position: relative;
      left: 4rem;
    }
  }
`;
function PictureSection({ userData }) {
  return (
    <Container>
      <div className="picture">
        <img src={getSafe(() => userData.image)} alt="" />
      </div>
      <Spacer margin="2rem" />

      <hr></hr>
      <Spacer margin="3rem" />

      <Button />
    </Container>
  );
}

export default PictureSection;
