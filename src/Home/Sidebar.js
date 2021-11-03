import React from "react";
import styled from "styled-components";
import { theme } from "../Utilities/theme";
import HeadingSecondary from "./HeadingSecondary";


const Container = styled.div`
    
    height: ${props => props.height};
    width: 5vw;
    position: absolute;
    left: 0;
    top: 0;
  background-color: ${theme.yellow};
  overflow: hidden;

`
function Sidebar({height}) {
    return (
        <Container height={height}>
            <HeadingSecondary />
        </Container>
    );
}

export default Sidebar;