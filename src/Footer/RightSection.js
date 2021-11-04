import React from 'react';
import styled from "styled-components";
import {theme} from "../Utilities/theme";
import Button from "./Button";

const Container = styled.div`
  padding-top: 5rem;
  position: relative;
  width: 20rem;
  left: -14rem;
  top: 1.5rem;

  h5{
        width: 25rem;
        margin-bottom: 2rem;
        color: ${theme.lightyellow};
        position: relative;
        top: .7rem;
      }
      

`
function RightSection(props) {
    return (
        <Container>
            <h5>Ready to find the best flatmate for you ?</h5>
            <hr/>
            <Button />

        </Container>
    );
}

export default RightSection;