import React from 'react';
import styled from "styled-components";
import {theme} from "../Utilities/theme";
import logo from "../Home/media/LOGO.png";
import Button from "../Login/Button";

const Container = styled.div`

  position: relative;
  left: 8rem;
    .formcontrol{
        width: 22.7rem;
        height: 2.2rem;
        border-radius: .5rem;
        background-color:rgba(2, 102, 112,0.1);
        position: relative;
      top: -3rem;

    }
      h4{
          position: relative;
        font-weight: 300;
        top: -3rem;


      }
      img{
        height: 10rem;
        position: relative;   
      }
      .btn{
        position: relative;
        top: -2rem;
      }
`
function RegisterForm(props) {
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

            <h4 className="formlabel">Confirm Password :</h4>
            <div>
                <input type="password" className="formcontrol" id="inputPassword"/>
            </div>
            <div className='btn'><Button /></div>
        </Container>
    );
}

export default RegisterForm;