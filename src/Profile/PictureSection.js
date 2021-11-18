import React from 'react';
import styled from "styled-components";
import {theme} from "../Utilities/theme";
import Spacer from "../Utilities/Spacer";
import Heading from "./Heading";
import Button from "./Button";

const Container = styled.div`
      
  padding: 5rem;
  border: 1px solid #e1e1e1;
  border-radius: 1rem;
  width: 25rem;
  height: 25rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  .picture{
      
      position: relative;
      width: 10rem;
      height: 10rem;
      border-radius: 50%;
      background-color: red;
        img{
          width: 10rem;
          height: 10rem;
          border-radius: 50%;

        }
      
    }
  
    
   `
function PictureSection(props) {
    return (
        <Container>
            <Spacer margin='4rem'/>

            <div className="picture">
                <img src="https://images.unsplash.com/photo-1500048993953-d23a436266cf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=869&q=80" alt=""/>
            </div>
            <Spacer margin='2rem'/>

            <Heading/>
            <Spacer margin='2rem'/>

            <Button/>
        </Container>
    );
}

export default PictureSection;