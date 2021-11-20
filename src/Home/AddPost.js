import React from "react";
import styled from "styled-components";
import { theme } from "../Utilities/theme";
import circle from "./media/addcircle.svg";
import { Link } from "react-router-dom";

const Container = styled.div`
  position: fixed;
  z-index: 9999999;
  right: 6rem;

  img {
    position: absolute;
    width: 4rem;
    height: 4rem;
  }
`;

function AddPost(props) {
  return (
    <Container>
      {window.localStorage.getItem("login") === "true" && (
        <Link to="/AddPost">
          <img src={circle} alt="circle" />
        </Link>
      )}
    </Container>
  );
}

export default AddPost;
