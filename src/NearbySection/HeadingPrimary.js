import React from 'react';
import styled from "styled-components";
import {theme} from "../Utilities/theme";



const Container = styled.div`
  position: relative;
  width: 100%;
  text-align: center;

  h3{
      position: relative;

      font-weight: 400;
      font-size: 3rem;
      letter-spacing: .7rem;
    text-transform:uppercase ;
    }
  .arrow{
    position: relative;
    display: inline-block;
    transform: rotate(180deg);
    top: .4rem;
    right: .5rem;
  }
  span{
    cursor: pointer;
  }

`
function HeadingPrimary({navigationPrevRef,navigationNextRef}) {
    return (
        <Container>
            <h3> <span ref={navigationPrevRef} className='arrow'>&#10170;</span> Nearby Houses <span ref={navigationNextRef}>&#10170;</span> </h3>

        </Container>
    );
}

export default HeadingPrimary;