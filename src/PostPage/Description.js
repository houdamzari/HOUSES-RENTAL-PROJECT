import React, { useState } from "react";
import styled from "styled-components";
import { theme } from "../Utilities/theme";

const Container = styled.div`
  p {
    width: 80%;
  }
`;
function Description({ post, getSafe }) {
  return (
    <Container>
      <p>{getSafe(() => post.description)}</p>
    </Container>
  );
}

export default Description;
