import React from 'react';
import styled from "styled-components";
import {theme} from "../Utilities/theme";
import Form from "./Form";
import logo from './media/logo.svg';
import Spacer from "../Utilities/Spacer";
import {Link} from "react-router-dom";


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
            <Link to='/'><img src={logo} alt=""/></Link>
            <Spacer margin='3rem'/>
            <Form/>
            <Spacer margin='4rem'/>

        </Container>
    );
}

export default BigContainer;