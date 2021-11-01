import React from 'react';
import styled from "styled-components";
import {theme} from "../Utilities/theme";
import Sidebar from "./Sidebar";
import HeadingPrimary from "./HeadingPrimary";
import SearchFilter from "./SearchFilter";



const Container = styled.div`
    
    width:40%;
  height: fit-content;
`

function LeftSection(props) {
    return (
        <Container>
            <Sidebar />
            <HeadingPrimary />
            <SearchFilter />
        </Container>
    );
}

export default LeftSection;