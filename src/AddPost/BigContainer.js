import React from 'react';
import styled from "styled-components";
import {theme} from "../Utilities/theme";
import Form from "./Form";
import logo from './media/logo.svg';


const Container = styled.div`
  
      img{
        width: 20rem;
        position: relative;
        left: 36%;
        top:1rem;
      }
`
function BigContainer(props) {
    return (
        <Container>
            <img src={logo} alt=""/>
            <Form/>
        </Container>
    );
}

export default BigContainer;