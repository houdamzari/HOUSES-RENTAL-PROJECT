import React from "react";
import styled from "styled-components";
import { theme } from "../Utilities/theme";
import HeadingSecondary from "./HeadingSecondary";


const Container = styled.div`
    
    height: 85vh;
    width: 5vw;
    position: relative;
    left: 0;
    top: -6.3rem;
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