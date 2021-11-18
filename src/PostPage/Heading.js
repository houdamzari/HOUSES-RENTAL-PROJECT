import React, { useState } from "react";
import styled from "styled-components";
import { theme } from "../Utilities/theme";

const Container = styled.div`
  h2 {
    text-transform: uppercase;
    position: relative;
  }
  p {
    color: grey;
    font-size: 0.7rem;
  }
  .flex {
    display: flex;
    flex-direction: row;
    gap: 4.5rem;
    align-items: center;
  }
  h4 {
    color: ${theme.green};
  }
`;
function Heading({ title, name, price }) {
  return (
    <Container>
      <div className="flex">
        <h2> {title}</h2>
        {price && <h4> {price + " DHs"} </h4>}
      </div>
      {name && <p> @{name}</p>}
    </Container>
  );
}

export default Heading;
