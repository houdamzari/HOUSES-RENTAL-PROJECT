import React from 'react';
import styled from "styled-components";
import {theme} from "../Utilities/theme";
import HeadingPrimary from "./HeadingPrimary";
import Card from "../Card/Card";
import HeaderSlider from "./HeaderSlider";
import Spacer from "../Utilities/Spacer";



const Container = styled.div`
    
    
`
function NearbySection(props) {
    const navigationPrevRef = React.useRef(null)
    const navigationNextRef = React.useRef(null)
    return (
        <Container>
            <Spacer margin='4rem' />
            <HeadingPrimary navigationPrevRef={navigationPrevRef} navigationNextRef={navigationNextRef} />
            <Spacer margin='2rem' />
            <HeaderSlider navigationPrevRef={navigationPrevRef} navigationNextRef={navigationNextRef} img={[{ id: 0,city: 'Tetouan', price:'3700DHs'},
                { id: 1,city: 'Tetouan', price:'3700DHs'},
                {id: 2,city: 'Fnideq', price:'3700DHs'},
                {id: 3,city: 'Mediq', price:'3700DHs'},
                {id: 4,city: 'Martil', price:'3700DHs'}]} />
            <Spacer margin='7rem'/>

        </Container>
    );
}

export default NearbySection;