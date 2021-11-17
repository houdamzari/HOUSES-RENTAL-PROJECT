import React from 'react';
import styled from "styled-components";
import BigContainer from "./BigContainer";


const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr ;
    gap: 1.5rem 8rem;
    grid-template-areas: 
    ". ."
    ". ."
    ". .";
  
  label{
    margin-left: 1rem;
    font-size: 1.1rem;
  }
  
`
function Requirements(props) {
    return (
        <Container>
            <div><input type="checkbox" name='NonSmoker' checked />
                <label for="NonSmoker"> Non Smoker </label></div>
            <div><input type="checkbox" name='Clean' checked />
                <label htmlFor="Clean"> Clean </label></div>

            <div> <input type="checkbox" name='EnsaStudent' checked/>
                <label htmlFor="EnsaStudent"> Ensa Student </label></div>
            <div><input type="checkbox" name='18' checked/>
                <label htmlFor="18"> has 18 yo or older </label></div>

        </Container>
    );
}

export default Requirements;