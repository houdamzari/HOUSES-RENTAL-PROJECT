import React, {useState} from 'react';
import styled from "styled-components";
import {theme} from "../Utilities/theme";
import Spacer from "../Utilities/Spacer";


const Container = styled.div`
      h2{
        text-transform: uppercase;
        position: relative;
      }
  p{
    position: relative;
    left: 4rem;
    font-size: 1.2rem;
  }
  
      
  `
function Heading() {
    return (
        <Container>
            <h3> Houda MZARI </h3>

            <p>City</p>


        </Container>
    );
}

export default Heading;