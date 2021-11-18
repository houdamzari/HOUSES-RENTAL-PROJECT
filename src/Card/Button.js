import React from "react";
import styled from "styled-components";
import { theme } from "../Utilities/theme";
import { useHistory, useLocation } from "react-router-dom";

const Container = styled.div`
  position: relative;
  top: 2.9rem;
  z-index: 999999999;
  left: 1rem;
  height: fit-content;
  .btn {
    display: block;
    width: 6.5rem;
    height: fit-content;
    border: none;
    border-radius: 0.5rem;
    color: white;
    letter-spacing: 0.1rem;
    cursor: pointer;
    text-transform: uppercase;
    font-size: 0.7rem;
    background-color: ${theme.turquois};
    &:hover {
      background-color: ${theme.green};
      color: ${theme.turquois};
    }
  }
`;
function Button({ handleClick }) {
  return (
    <Container>
      <button
        className="btn"
        onClick={() => (handleClick ? handleClick() : null)}
      >
        {" "}
        View more
      </button>
    </Container>
  );
}

export default Button;
