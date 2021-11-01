import React from 'react';
import styled from "styled-components";
import {theme} from "../Utilities/theme";
import logo from "./media/LOGO.png";
import Button from "../Login/Button";
import {Link} from "react-router-dom";

const Container = styled.div`

  position: relative;
  left: 8rem;
    .formcontrol{
        width: 22.7rem;
        height: 2.2rem;
        margin-top: 1rem;
        border-radius: .5rem;
        background-color:rgba(2, 102, 112,0.1);
      
}
      h4{
          position: relative;
        font-weight: 300; 
        
      }
      img{
        height: 10rem;
        position: relative;   
      }
`
function LoginForm(props) {
    return (
        <Container>
            <img src={logo} alt="logo"/>
            <h4 className="formlabel">Email :</h4>
            <div>
                <input type="email" className="formcontrol" id="inputPassword"/>
            </div>
            <h4 className="formlabel">Password :</h4>
            <div>
                <input type="password" className="formcontrol" id="inputPassword"/>
            </div>
             <Button />
        </Container>
    );
}

export default LoginForm;