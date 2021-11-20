import React from 'react';
import styled from "styled-components";
import {theme} from "../Utilities/theme";
import logo from "./media/logo.svg";
import news from "./media/sendmail.svg";
import {Link} from "react-router-dom";


const Container = styled.div`
      
    img{
      position: relative;
      width: 20rem;
      top: 3rem;
    }
  
      .newssection{
        display: flex;
        flex-direction: row;
        position: relative;
        top: 3rem;
        align-items: center;
      }
  
      .newsletter{
        position: relative;
        background-color: transparent;
        border:none;
        border-bottom: 2px solid ${theme.yellow};
        height: 2.1rem;
        left: 3rem;
        top: 2.7rem;

        color: ${theme.grey};
        padding-left: 1rem;
      }
      .newsicon{
        width: 3rem;
        height: 3rem;
        position: relative;
        cursor: pointer;
        left: .2rem;
      }
  
`

function LeftSection(props) {
    return (
        <Container>
            <Link to='/'><img src={logo} alt=""/></Link>
            <div className="newssection">
                <input className='newsletter' placeholder='Email Address' type='email'/>
                <img className='newsicon' src={news} alt=""/>
            </div>
        </Container>
    );
}

export default LeftSection;