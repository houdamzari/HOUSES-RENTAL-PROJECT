import React from 'react';
import styled from "styled-components";
import {theme} from "../Utilities/theme";

const Container = styled.div`
    .picture{
      
      position: relative;
      width: 10rem;
      height: 10rem;
      border-radius: 50%;
      background-color: red;
    }
  
    
   `
function PictureSection(props) {
    return (
        <Container>
            <div className="picture">

            </div>
        </Container>
    );
}

export default PictureSection;