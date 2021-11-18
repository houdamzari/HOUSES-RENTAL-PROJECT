<<<<<<< HEAD
import React, { useState } from "react";
import styled from "styled-components";
import { theme } from "../Utilities/theme";
import Button from "../PostPage/Button";
import Grid from "../PostPage/Grid";
import Heading from "../PostPage/Heading";
import Description from "../PostPage/Description";
import Spacer from "../Utilities/Spacer";
import Comodities from "../PostPage/Comodities";
import Requirements from "../PostPage/Requirements";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10rem;
  position: relative;
  top: 3rem;
  left: 1rem;
  overflow-x: hidden;
`;
function BigContainer(props) {
  return (
    <Container>
      <div>
        <Grid />
      </div>
      <div>
        <Heading title="Modern apartment" name price />
        <Spacer margin="2rem" />
        <Description />
        <Spacer margin="4rem" />

        <Heading title="HOUSE COMMODITIES" />
        <Spacer margin="2rem" />
        <Comodities />
        <Spacer margin="4rem" />

        <Heading title="Requirements " />
        <Spacer margin="2rem" />
        <Requirements />
        <Spacer margin="3rem" />

        <Button />
      </div>
    </Container>
  );
}

export default BigContainer;
=======
import React from 'react';
import styled from "styled-components";
import {theme} from "../Utilities/theme";
import PictureSection from "./PictureSection";
import Heading from "./Heading";

const Container = styled.div`
    
    display: flex;
  flex-direction: row;
  gap: 10rem;
    
`
function BigContainer(props) {
    return (
        <Container>
            <div></div>
            <PictureSection/>
            <Heading/>
        </Container>
    );
}

export default BigContainer;
>>>>>>> f41d5adbed3cb63a4248feac020bf0c075be71cc
