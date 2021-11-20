import React from 'react';
import styled from "styled-components";
import {theme} from "../Utilities/theme";
import Form from "./Form";
import RegisterForm from "./RegisterForm";


const Container = styled.div`
    background-color: ${theme.yellow};
    width: 100vw;
  height: 100vh;
    overflow: hidden;
`
function Register(props) {
    return (
        <Container>
            <Form />

        </Container>
    );
}

export default Register;