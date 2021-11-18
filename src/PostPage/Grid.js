import React, { useState } from "react";
import styled from "styled-components";
import { theme } from "../Utilities/theme";

const Container = styled.div`
  width: 40rem;
  height: 26rem;

  .box1 {
    img {
      width: 20rem;
      height: 26rem;
    }
  }
  .box2 {
    img {
      width: 20rem;
      height: 12.5rem;
      margin-bottom: 1rem;
    }
  }
  .wrapper {
    width: 40rem;
    height: 26rem;

    position: fixed;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    grid-column-gap: 1rem;
    grid-template-areas: "box1 box1 box2 box2";
  }
`;
function Grid({ post, getSafe }) {
  return (
    <Container>
      <div className="wrapper">
        <div className="box1">
          <img src={getSafe(() => post.images[0].url)} alt="" />
        </div>
        <div className="box2">
          <img src={getSafe(() => post.images[1].url)} alt="" />
          <img src={getSafe(() => post.images[2].url)} alt="" />
        </div>
      </div>
    </Container>
  );
}

export default Grid;
