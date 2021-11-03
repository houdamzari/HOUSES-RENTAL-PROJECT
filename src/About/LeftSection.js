import React from 'react';
import styled from "styled-components";
import {theme} from "../Utilities/theme";
import HeadingPrimary from "./HeadingPrimary";
import Button from "./Button";
import Sidebar from "../Home/Sidebar";



const Container = styled.div`
    
    width:40%;
  height: fit-content;
`

function LeftSection(props) {
    return (
        <Container>
            <Sidebar height='90vh' />
            <HeadingPrimary />
            <Button />
        </Container>
    );
}

export default LeftSection;