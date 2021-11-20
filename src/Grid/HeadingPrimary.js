import React from "react";
import styled from "styled-components";
import { theme } from "../Utilities/theme";

const Container = styled.div`
  position: relative;
  width: 100%;
  text-align: center;

  h3 {
    position: relative;

    font-weight: 400;
    font-size: 3rem;
    letter-spacing: 0.7rem;
    text-transform: uppercase;
  }
`;
function HeadingPrimary({ commo, location, date }) {
  const condition = commo || location || date;
  return (
    <Container>
      {!commo && !location && !date && <h3> Recently added </h3>}
      {condition && <h3>Search Results</h3>}
    </Container>
  );
}

export default HeadingPrimary;
