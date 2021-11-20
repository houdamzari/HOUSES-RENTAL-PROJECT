import React from "react";
import styled from "styled-components";
import { theme } from "../Utilities/theme";
import BigContainer from "./BigContainer";

const Container = styled.div``;
function Home({ setDate, setCommo, setLocation, commo }) {
  return (
    <Container>
      <BigContainer
        setDate={setDate}
        setLocation={setLocation}
        setCommo={setCommo}
        commo={commo}
      />
    </Container>
  );
}

export default Home;
