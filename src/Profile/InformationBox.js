import React from 'react';
import styled from "styled-components";
import {theme} from "../Utilities/theme";
import Spacer from "../Utilities/Spacer";
import Heading from "./Heading";
import Button from "./Button";

const Container = styled.div`
    
      border: 1px solid #e1e1e1;
      border-radius: 1rem;
       width: 50vw;


  .row{
            width: 30vw;
            height: 8rem;
            justify-content: center;
            align-items: center;
        > * {
          position: relative;
          top: 50%;
          left: 50%;
          transform: translate(-0%,-200%);
        }
    
    p{
      width: 100%;
      //margin-left: 2rem;
    }
          }
   
  span{
    display: block;
    width: 100%;

  }
      
    
     `
function InformationBox(props) {
    return (
        <Container>
                <div className='row'>
                    <p> First Name :</p>
                    <span> Lorem ipsum dolor sit amet, consectetur </span>
                </div>
                <div className='row'>
                    <p> Last Name :</p>
                    <span> Lorem ipsum dolor sit amet, consectetur </span>
                </div>
                <div className='row'>
                    <p> Gender : </p> <span> Lorem ipsum dolor sit amet, consectetur </span>
                </div>
                <div className='row'>
                     <p> Email :</p> <span> Lorem ipsum dolor sit amet, consectetur </span>
                </div>

        </Container>
    );
}

export default InformationBox;