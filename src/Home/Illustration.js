import React from 'react';
import styled from "styled-components";
import {theme} from "../Utilities/theme";
import Building from "./media/Building.png";


const Container = styled.div`
  
      img{
        position: relative;
        width: 40rem;
        height: 30rem;
        top: -2rem;
      }
      
`

function Illustration(props) {
    return (
        <Container>
            <img src={Building} alt="Building"/>
        </Container>
    );
}

export default Illustration;