import React from 'react';
import styled from "styled-components";
import {theme} from "../Utilities/theme";
import PictureSection from "./PictureSection";

const Container = styled.div`
    
    display: flex;
  flex-direction: row;
  gap: 10rem;
    
`
function BigContainer(props) {
    return (
        <Container>
            <PictureSection/>
        </Container>
    );
}

export default BigContainer;