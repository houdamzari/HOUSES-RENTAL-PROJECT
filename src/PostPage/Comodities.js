import React from 'react';
import styled from "styled-components";
import BigContainer from "./BigContainer";


const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    gap: 1.5rem 8rem;
    grid-template-areas: 
    ". ."
    ". ."
    ". .";
  
  label{
    margin-left: 1rem;
    font-size: 1.1rem;
  }
  input{
  }
  
`
function Comodities(props) {
    return (
        <Container>
                <div><input type="checkbox" name='TV' />
                <label for="TV"> TV </label></div>
                <div><input type="checkbox" name='Bathtub'/>
                <label htmlFor="Bathtub"> Bathtub </label></div>

               <div> <input type="checkbox" name='Balcony'/>
                <label htmlFor="Balcony"> Balcony </label></div>
                <div><input type="checkbox" name='Balcony' checked/>
                <label htmlFor="Balcony"> Balcony </label></div>
           <div> <input type="checkbox" name='Balcony' checked/>
            <label htmlFor="Balcony"> Balcony </label></div>
           <div><input type="checkbox" name='Balcony'/>
            <label htmlFor="Balcony"> Balcony </label></div>
        </Container>
    );
}

export default Comodities;