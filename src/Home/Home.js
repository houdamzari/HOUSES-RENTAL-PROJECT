import React from "react";
import styled from "styled-components";
import { theme } from "../Utilities/theme";
import BigContainer from "./BigContainer";

const Container = styled.div``;
function Home(props) {
  return (
    <Container>
      <BigContainer />
    </Container>
  );
}

export default Home;
