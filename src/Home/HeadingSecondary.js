import React from 'react';
import styled from "styled-components";
import {theme} from "../Utilities/theme";



const Container = styled.div`
position: relative;
  top: 43rem;

  left: -40.7rem;

  h3{
  width: 100vw;
  transform: rotate(90deg);
    color: ${theme.turquois};
    letter-spacing: .27rem;
    opacity: 70%;
    font-size: 1.28rem;
}
`

function HeadingSecondary(props) {
    return (
        <Container>
            <h3>The best flatsharing  website in Tetouan.</h3>
        </Container>
    );
}

export default HeadingSecondary;