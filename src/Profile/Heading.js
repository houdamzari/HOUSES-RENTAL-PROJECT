import React, {useState} from 'react';
import styled from "styled-components";
import {theme} from "../Utilities/theme";
import Spacer from "../Utilities/Spacer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMapMarkerAlt, faVenusMars} from "@fortawesome/free-solid-svg-icons";


const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  
      h2{
        text-transform: uppercase;
        position: relative;
        font-size: 2.2rem;
        letter-spacing: .3rem;

      }
  p{
    position: relative;
    font-size: 1.2rem;
    color: dimgrey;
    left: 4rem;
    top: .5rem;
  }
    .location{
      color: dimgrey;
      font-size: 1.2rem;
      position: relative;
      left: 4rem;
      top: .8rem;
    }
  
      
  `
function Heading() {
    return (
        <Container>

            <h2> Houda MZARI </h2>
            <FontAwesomeIcon className='location' icon={faMapMarkerAlt}></FontAwesomeIcon>

            <p>City</p>


        </Container>
    );
}

export default Heading;