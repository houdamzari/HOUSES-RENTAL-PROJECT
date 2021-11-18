import React from "react";
import styled from "styled-components";
import Card from "./Card";
import { data } from "../data";

const Container = styled.div`
  .parent {
    display: grid;
    grid-template-columns: repeat(3, 1fr);

    grid-column-gap: 50px;
    grid-row-gap: 30px;
    height: 100%;
    margin-bottom: 50px;
  }
`;
function Grid(props) {
  return (
    <Container>
      <div className="parent">
        {data.map((p) => (
          <Card data={p} />
        ))}
      </div>
    </Container>
  );
}

export default Grid;
