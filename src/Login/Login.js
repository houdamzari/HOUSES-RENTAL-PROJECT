import React from 'react';
import styled from "styled-components";
import {theme} from "../Utilities/theme";
import Form from "./Form";
import LoginForm from "./LoginForm";


const Container = styled.div`
    background-color: ${theme.yellow};
    width: 100vw;
  height: 100vh;
    
`
function Login(props) {
    return (
        <Container>
            <Form />

        </Container>
    );
}

export default Login;