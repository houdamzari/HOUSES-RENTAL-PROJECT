import React, {useState} from 'react';
import styled from "styled-components";
import {theme} from "../Utilities/theme";


const Container = styled.div`
     p{
       width: 80%;
     }
  
    
  
  `
function Description(props) {
    return (
        <Container>
           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti doloribus dolorum illo quasi sapiente. Asperiores commodi deleniti eaque eius esse explicabo facilis, impedit nostrum possimus sapiente unde vero vitae. Odio?</p>

        </Container>
    );
}

export default Description;