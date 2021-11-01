import React from 'react';
import styled from "styled-components";
import {theme} from "../Utilities/theme";



const Container = styled.div`
      width: 65%;
  position: relative;
  top: -35rem;

  h3{
      position: relative;
      left: 10rem;

      font-weight: 400;
      font-size: 3rem;
      letter-spacing: .7rem;
    }

`
function HeadingPrimary(props) {
    return (
        <Container>
            <h3>Find the flatmate that suits you.</h3>

        </Container>
    );
}

export default HeadingPrimary;