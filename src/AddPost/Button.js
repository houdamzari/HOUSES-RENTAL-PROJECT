import React from "react";
import styled from "styled-components";
import { theme } from "../Utilities/theme";
import { useHistory, useLocation } from "react-router-dom";

const Container = styled.div`
  position: relative;
  top: 2rem;
  left: 13.3rem;

  .btn {
    display: block;
    width: 10rem;
    height: 3rem;
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
function Button({ handleSubmit }) {
  return (
    <Container>
      <button onClick={() => handleSubmit()} className="btn">
        {" "}
        Add Post
      </button>
    </Container>
  );
}

export default Button;
