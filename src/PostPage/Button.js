import React from "react";
import styled from "styled-components";
import { theme } from "../Utilities/theme";
import axios from "axios";
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
  const data = { ...post, status: "request" };
  console.log(data);
  const handleClick = async () => {
    await axios
      .put(`http://localhost:8080/posts/${post.postId}`, {
        ...post,
        status: "request",
      })
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
    alert("request sent");
  };
  console.log(post);
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
