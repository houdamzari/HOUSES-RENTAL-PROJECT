import React from 'react';
import styled from "styled-components";
import {theme} from "../Utilities/theme";


const Container = styled.div`
  padding-top: 5rem;
      ul{
        width: 10rem;
        position: relative;
        left: -7rem;
        top: 1rem;

      }
  li{
    list-style: none;
    color: ${theme.grey};
    line-height: 3rem;
    font-size: 1.2rem;
    cursor: pointer;
    &:hover{
      color: ${theme.green};
    }
  }
`
function CenterSection(props) {
    return (
        <Container>
            <ul>
                <li>Privacy Policy</li>
                <li>About us</li>
                <li>Contact us</li>
            </ul>
        </Container>
    );
}

export default CenterSection;