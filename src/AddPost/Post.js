import React from 'react';
import styled from "styled-components";
import {theme} from "../Utilities/theme";
import Form from "./Form";
import BigContainer from "./BigContainer";

const Container = styled.div`
  // background-color: ${theme.lightyellow};
  width: 100vw;
  height: 100vh;
  padding: 0 12rem;
  overflow-x: hidden;

`


function Post(props) {
    return (
        <Container>
            <BigContainer />
        </Container>
    );
}

export default Post;