import React, {useState} from 'react';
import styled from "styled-components";
import {theme} from "../Utilities/theme";


const Container = styled.div`
      h2{
        text-transform: uppercase;
        position: relative;
      }
  
      
  `
function Heading() {
    return (
        <Container>
            <h2> Houda MZARI </h2>

        </Container>
    );
}

export default Heading;