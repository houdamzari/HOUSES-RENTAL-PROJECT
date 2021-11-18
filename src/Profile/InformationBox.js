import React from 'react';
import styled from "styled-components";
import {theme} from "../Utilities/theme";
import Spacer from "../Utilities/Spacer";
import Heading from "./Heading";
import Button from "./Button";

const Container = styled.div`
    
      border: 1px solid #e1e1e1;
      border-radius: 1rem;
        
  
          .row{
            width: 50vw;
            height: 4rem;
            display: flex;
            flex-direction: row;
            gap: 9rem;
            border-bottom: 1px solid #e1e1e1;
            justify-content: flex-start;
            align-items: center;
          }
    p{
      width: 21%;
      margin-left: 2rem;
    }
  span{
    display: block;
    width: 50%;

  }
      
    
     `
function InformationBox(props) {
    return (
        <Container>
                <div className='row'>
                    <p> Full Name :</p>
                    <span> Lorem ipsum dolor sit amet, consectetur </span>
                </div>
                <div className='row'>
                     <p> Email :</p> <span> Lorem ipsum dolor sit amet, consectetur </span>
                </div>
                <div className='row'>
                    <p> CIN : </p> <span> Lorem ipsum dolor sit amet, consectetur </span>
                </div>
                <div className='row'>
                     <p>Phone Number :</p> <span> Lorem ipsum dolor sit amet, consectetur </span>
                </div>
                <div className='row'>
                     <p>City :</p>  <span> Lorem ipsum dolor sit amet, consectetur </span>
                </div>
        </Container>
    );
}

export default InformationBox;