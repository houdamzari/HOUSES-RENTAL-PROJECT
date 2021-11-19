import React from 'react';
import styled from "styled-components";
import {theme} from "../Utilities/theme";
import Spacer from "../Utilities/Spacer";
import Heading from "./Heading";
import Button from "./Button";

const Container = styled.div`
      
  width: 20rem;
  height: 40rem;
  position: relative;
  
  .picture{
      
      position: relative;
      width: 20rem;
      height: 15rem;
      border-radius: 50%;
        img{
          width: 15rem;
          height: 15rem;
          border-radius: 50%;
          position: relative;
          left: 4rem;

        }
      
    }
  
    
   `
function PictureSection(props) {
    return (
        <Container>

            <div className="picture">
                <img src="https://images.unsplash.com/photo-1500048993953-d23a436266cf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=869&q=80" alt=""/>
            </div>
            <Spacer margin='2rem'/>

            <hr></hr>
            <Spacer margin='3rem'/>

            <Button/>
        </Container>
    );
}

export default PictureSection;