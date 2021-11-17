import React, {useState} from 'react';
import styled from "styled-components";
import {theme} from "../Utilities/theme";


const Container = styled.div`

  width: 40rem;
  height: 26rem;

  .box1{
      img {
        width: 20rem;
        height: 26rem;
      }
    }
  .box2{
      img {
        width: 20rem;
        height: 12.5rem;
        margin-bottom: 1rem;
      }
  }
  .wrapper{
    width: 40rem;
    height: 26rem;

    position: fixed;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    grid-column-gap: 1rem;
    grid-template-areas: "box1 box1 box2 box2";

  }
  `
function Grid(props) {
    return (
        <Container>
            <div className='wrapper'>
            <div className="box1">
                <img src="https://images.unsplash.com/photo-1616046229478-9901c5536a45?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aG91c2UlMjBpbnRlcmlvcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt=""/>
            </div>
            <div className="box2">
                <img src="https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aG91c2UlMjBpbnRlcmlvcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt=""/>
                <img src="https://images.unsplash.com/photo-1615873968403-89e068629265?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8aG91c2UlMjBpbnRlcmlvcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt=""/>

            </div>
            </div>
        </Container>
    );
}

export default Grid;