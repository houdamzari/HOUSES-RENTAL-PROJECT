import React from 'react';
import styled from "styled-components";
import {theme} from "../Utilities/theme";
import {Link} from "react-router-dom";

const Container = styled.div`
      position: relative;
      left: 16rem;
  top: 12rem;


  .btn{
      display: block;
      width:13rem;
    
      height: 3.5rem;
      border: none;
      border-radius: .5rem;
      color: white;
      letter-spacing: .1rem;
      cursor:pointer;
      text-transform: uppercase;
      font-size: 1.2rem;
      background-color: ${theme.turquois};
    &:hover{
      background-color: ${theme.green};
      color: ${theme.turquois};

    }
    }
      a:link{
        text-decoration: none;

      }

`
function Button(props) {
    return (
        <Container>
            <Link to='/'><button className='btn'> Get started</button></Link>
        </Container>
    );
}

export default Button;