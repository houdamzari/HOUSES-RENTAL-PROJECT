import React from "react";
import styled from "styled-components";
const Wrapper = styled.div`
  @media (max-width: 768px) {
    transform: ${(props) =>
      props.id === props.activeSlide + 1
        ? "scale(0.89)"
        : props.id === props.activeSlide - 1
        ? "scale(0.89)"
        : props.id !== props.activeSlide
        ? "none"
        : null};
    width: 212px !important;
    height: 240px !important;
    margin: 0;
  }
  margin-left: ${(props) =>
    props.id === props.activeSlide + 1 ? "5rem" : null};
  width: ${(props) =>
    props.id === props.activeSlide + 1
      ? "30rem"
      : props.id === props.activeSlide - 1
      ? "30rem"
      : "35rem"};
  height: 33rem;
  object-fit: contain;
  position: relative;
  transform: ${(props) =>
    props.id === props.activeSlide + 2
      ? "scale(0.7) "
      : props.id === props.activeSlide - 2
      ? "scale(0.7) "
      : props.id !== props.activeSlide
      ? "scale(0.8)"
      : null};

  img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

function HeaderSliderImg({ img, id, activeSlide }) {
  return (
    <Wrapper id={id} activeSlide={activeSlide}>
      <img src={img} alt="img" />
    </Wrapper>
  );
}

export default HeaderSliderImg;
