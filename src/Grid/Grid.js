import React from 'react';
import styled from "styled-components";
import {theme} from "../Utilities/theme";
import Spacer from "../Utilities/Spacer";
import Card from "./Card";


const Container = styled.div`
  .parent {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(5, 1fr);
    grid-column-gap: 30px;
    grid-row-gap: 30px;
  }



`
function Grid(props) {
    return (
        <Container>
                <div className="parent">
                    <Card  />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />


                </div>
        </Container>
    );
}

export default Grid;