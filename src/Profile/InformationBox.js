import React from 'react';
import styled from "styled-components";
import {theme} from "../Utilities/theme";
import Spacer from "../Utilities/Spacer";
import Heading from "./Heading";
import Button from "./Button";

const Container = styled.div`
    
    
       width: 50vw;

  .form {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(5, 1fr);
    grid-column-gap: 6rem;
    grid-row-gap: 0px;
  }

  .first{
    font-size: 1.3rem;
    letter-spacing: .4rem;
  }


`
function InformationBox(props) {
    return (
        <Container>
            <Spacer margin='2rem'/>

            <Heading/>
            <Spacer margin='4rem'/>
            <div className='form'>
                <p className="first">First Name :</p>
                <p className="second">XOOOOOOOO</p>
                <p className="first">Last Name :</p>
                <p className="second">XOOOOOOOO</p>
                <p className="first">Gender :</p>
                <p className="second">XOOOOOOOO</p>
                <p className="first">Email :</p>
                <p className="second">XOOOOOOOO</p>

            </div>
        </Container>
    );
}

export default InformationBox;