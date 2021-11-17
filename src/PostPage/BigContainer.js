import React, {useState} from 'react';
import styled from "styled-components";
import {theme} from "../Utilities/theme";
import Button from "./Button";
import Grid from "./Grid";
import Heading from "./Heading";
import Description from "./Description";
import Spacer from "../Utilities/Spacer";
import Comodities from "./Comodities";
import Requirements from "./Requirements";


const Container = styled.div`
    display: flex;
  flex-direction: row;
  gap: 10rem;
  position: relative;
  top: 3rem;
  left: 1rem;
  overflow-x:hidden ;
`
function BigContainer(props) {
    return (
        <Container>
            <div>
                <Grid />
            </div>
            <div>
                <Heading title='Modern apartment' name  price />
                <Spacer margin='2rem'/>
                <Description />
                <Spacer margin='4rem'/>

                <Heading title='HOUSE COMMODITIES' />
                <Spacer margin='2rem'/>
                <Comodities />
                <Spacer margin='4rem'/>

                <Heading title='Requirements ' />
                <Spacer margin='2rem'/>
                <Requirements />
                <Spacer margin='3rem'/>

                <Button />
            </div>

        </Container>
    );
}

export default BigContainer;