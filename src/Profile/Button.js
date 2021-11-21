import React from "react";
import styled from "styled-components";
import { theme } from "../Utilities/theme";
import { Link, useHistory, useLocation } from "react-router-dom";

const Container = styled.div`
  position: relative;
  margin-bottom: 5rem;
  margin-left: 6rem;

  .btn {
    display: block;
    margin-bottom: 20px;
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
function Button(props) {
  return (
    <Container>
      <Link to="/Historique">
        <button className="btn"> Historique</button>
      </Link>
    </Container>
  );
}

export default Button;
