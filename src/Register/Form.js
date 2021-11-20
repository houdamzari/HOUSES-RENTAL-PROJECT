import React from 'react';
import styled from "styled-components";
import {theme} from "../Utilities/theme";
import sidepic from "../Home/media/sideloginpic.jpg";
import RegisterForm from "./RegisterForm";
import Spacer from "../Utilities/Spacer";

const Container = styled.div`
  background-color: #ffff;
  width: 95vw;
  height: 92vh;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-51%);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  .sidepicture{
    width: 50%;
    position: relative;
    img{
      position: absolute;
      width: 100%;
      height: 100%;
      object-fit: cover;
      z-index: 99;
    }
  }
  
`
function Form(props) {
    return (
        <Container>
            <RegisterForm />

            <div className="sidepicture">
                <img src={sidepic} alt="sidepic"/>
            </div>
        </Container>
    );
}

export default Form;