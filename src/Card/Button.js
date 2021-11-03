import React from 'react';
import styled from "styled-components";
import {theme} from "../Utilities/theme";
import {useHistory,useLocation} from "react-router-dom";


const Container = styled.div`
      position: relative;
      top: 2.9rem;
      left: 1rem;

  .btn{
      display: block;
      width: 6.5rem
      height: 2rem;
      border: none;
      border-radius: .5rem;
      color: white;
      letter-spacing: .1rem;
      cursor:pointer;
      text-transform: uppercase;
      font-size: .7rem;
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
            <button className='btn'> View more</button>
        </Container>
    );
}

export default Button;