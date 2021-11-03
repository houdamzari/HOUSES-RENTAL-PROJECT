import React from 'react';
import styled from "styled-components";
import {theme} from "../Utilities/theme";
import Illustration from "./Illustration";



const Container = styled.div`
  height: fit-content;


`
function RightSection(props) {
    return (
        <Container>

             <Illustration />

        </Container>
    );
}

export default RightSection;