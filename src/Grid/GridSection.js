import React from 'react';
import styled from "styled-components";
import {theme} from "../Utilities/theme";
import HeadingPrimary from "./HeadingPrimary";
import Card from "../Card/Card";
import Spacer from "../Utilities/Spacer";
import Grid from "./Grid";


const Container = styled.div`
    padding: 0 10rem;
    
`
function GridSection(props) {
    return (
        <Container>

            <HeadingPrimary />
            <Spacer margin='2rem'/>
            <Grid />
        </Container>
    );
}

export default GridSection;