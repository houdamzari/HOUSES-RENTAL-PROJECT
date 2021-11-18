import React from "react";
import styled from "styled-components";
import { theme } from "../Utilities/theme";

const Container = styled.div`
  position: relative;
  left: 20rem;
  margin-bottom: 5rem;
  .btn {
    display: block;
    width: 10rem;
    height: 3rem;
    padding-top: 10px;
    border: none;
    border-radius: 0.5rem;
    color: white;
    letter-spacing: 0.1rem;
    cursor: pointer;
    text-transform: uppercase;
    font-size: 1rem;
    background-color: ${theme.turquois};
    &:hover {
      background-color: ${theme.green};
      color: ${theme.turquois};
    }
  }
`;
function Button({ post, getSafe }) {
  return (
    <Container>
      <a href={"mailto:" + getSafe(() => post.student.email)} className="btn">
        {" "}
        Contact Me
      </a>
    </Container>
  );
}

export default Button;
