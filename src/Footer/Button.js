import React from 'react';
import styled from "styled-components";
import {theme} from "../Utilities/theme";
import {useHistory,useLocation} from "react-router-dom";


const Container = styled.div`
      position: relative;


  .btn{
      display: inline-block;
      width: 7rem;
      height: 3rem;
      border: none;
      border-radius: .5rem;
      color: white;
      letter-spacing: .1rem;
      cursor:pointer;
      text-transform: uppercase;
      font-size: .77rem;
      background-color: ${theme.turquois};
    &:hover{
      background-color: ${theme.green};
      color: ${theme.turquois};

    }
    }

`
function Button(props) {
    return (
        <Container>
            <button className='btn'> Get started</button>
        </Container>
    );
}

export default Button;