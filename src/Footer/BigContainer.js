import React from 'react';
import styled from "styled-components";
import {theme} from "../Utilities/theme";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import CenterSection from "./CenterSection";


const Container = styled.div`
  padding-left: 4rem;
  padding-right: 4rem;

  padding-bottom: 10rem;
    width: 100vw;
    height: 60vh;
    background-color: #111111;
    display: flex;
    flex-direction: row;    
    gap: 20rem;
`

function BigContainer(props) {
    return (
        <Container>
            <LeftSection />
            <CenterSection />
            <RightSection />
        </Container>
    );
}

export default BigContainer;