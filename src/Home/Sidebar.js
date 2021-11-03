import React from "react";
import styled from "styled-components";
import { theme } from "../Utilities/theme";
import HeadingSecondary from "./HeadingSecondary";


const Container = styled.div`
    
    height: 80vh;
    width: 5vw;
    position: absolute;
    left: 0;
    top: 0;
  background-color: ${theme.yellow};

`
function Sidebar(props) {
    return (
        <Container>
            <HeadingSecondary />
        </Container>
    );
}

export default Sidebar;