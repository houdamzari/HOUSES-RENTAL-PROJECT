import React, {useState} from 'react';
import styled from "styled-components";
import {theme} from "../Utilities/theme";


const Container = styled.div`
      h2{
        text-transform: uppercase;
        position: relative;
      }
  p{
    color: grey;
    font-size: .7rem;
  }
      .flex{
        display: flex;
        flex-direction: row;
        gap: 4.5rem;
        align-items: center;
      }
    h4{
      color: ${theme.green};
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