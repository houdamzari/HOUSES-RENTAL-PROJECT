import React from 'react';
import styled from "styled-components";
import {theme} from "../Utilities/theme";
import Illustration from "./Illustration";
import AddPost from "./AddPost";



const Container = styled.div`
  height: fit-content;


`
function RightSection(props) {
    return (
        <Container>
                <AddPost/>
             <Illustration />

        </Container>
    );
}

export default RightSection;