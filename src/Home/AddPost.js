import React from 'react';
import styled from "styled-components";
import {theme} from "../Utilities/theme";
import circle from "./media/addcircle.svg";



const Container = styled.div`


`

function AddPost(props) {
    return (
        <Container>
            <img src={circle} alt="circle"/>
        </Container>
    );
}

export default AddPost;