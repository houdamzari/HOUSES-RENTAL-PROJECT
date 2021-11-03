import React from 'react';
import styled from "styled-components";
import {theme} from "../Utilities/theme";



const Container = styled.div`
position: relative;
  width: 100vh;
  transform: rotate(90deg);

  top: 23rem;

  left: -18.5rem;
  h3{
  width: 100%;
    position: absolute;
    top: 0;
    left: 0;
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