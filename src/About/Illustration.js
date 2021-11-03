import React from 'react';
import styled from "styled-components";
import {theme} from "../Utilities/theme";
import Building from "./media/illustration.jpg";


const Container = styled.div`
  
      img{
        position: relative;
        width: 35rem;
        height: 34rem;

        left: 6rem;
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