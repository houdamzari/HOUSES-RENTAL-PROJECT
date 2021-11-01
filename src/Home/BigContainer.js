import React from 'react';
import styled from "styled-components";
import {theme} from "../Utilities/theme";
import Sidebar from "./Sidebar";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";


const Container = styled.div`

    display: flex;
    flex-direction: row;
    gap:5rem;
  width: 100vw;
  
`
function BigContainer(props) {
    return (
        <Container>
            <LeftSection />
            <RightSection />
        </Container>
    );
}

export default BigContainer;