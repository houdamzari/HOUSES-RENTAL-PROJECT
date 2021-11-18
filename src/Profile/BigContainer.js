import React from 'react';
import styled from "styled-components";
import {theme} from "../Utilities/theme";
import PictureSection from "./PictureSection";
import Heading from "./Heading";
import Spacer from "../Utilities/Spacer";
import Button from "./Button";
import InformationBox from "./InformationBox";

const Container = styled.div`
    
    display: flex;
  flex-direction: row;
  gap: 10rem;
  position: relative;
  left: 3rem;
  top: 2rem;
    
`
function BigContainer(props) {
    return (
        <Container>
            <PictureSection/>
            <InformationBox/>

        </Container>
    );
}

export default BigContainer;