import React from "react";
import styled from "styled-components";
import BigContainer from "./BigContainer";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 1.5rem 8rem;
  grid-template-areas:
    ". ."
    ". ."
    ". .";

  label {
    margin-left: 1rem;
    font-size: 1.1rem;
  }
`;
function Requirements({ post, getSafe }) {
  return (
    <Container>
      {getSafe(() =>
        post.details.conditions.split(",").map((item) => <h4>{item}</h4>)
      )}
    </Container>
  );
}

export default Requirements;
