import React from 'react';
import styled from "styled-components";
import {theme} from "../Utilities/theme";
import Spacer from "../Utilities/Spacer";



const Container = styled.div`
  position: relative;
  top: 7rem;

  h3{
    width: 85%;

    position: relative;
      left: 10rem;

      font-weight: 400;
      font-size: 3.5rem;
      letter-spacing: .7rem;
    text-transform: uppercase;
    }
      h4{
        width: 80%;

        position: relative;
        left: 10rem;
    
        font-weight: 200;
        font-size: 1.5rem;
        letter-spacing: .5rem;
      }

`
function HeadingPrimary(props) {
    return (
        <Container>
            <h4>Are you tired looking for a flatmate that meets yours needs ?</h4>
            <Spacer margin='4rem' />
            <h3>We got you</h3>

        </Container>
    );
}

export default HeadingPrimary;