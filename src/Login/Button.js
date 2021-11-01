import React from 'react';
import styled from "styled-components";
import {theme} from "../Utilities/theme";
import {useHistory,useLocation} from "react-router-dom";


const Container = styled.div`
      display: flex;
      flex-direction: row;
      gap: 5rem;
      position: relative;
      top: 3rem;
      left:-1rem;
    .btn{
      padding: 0 1rem 0 1rem;
        margin: 1rem;
      width: 8rem;
      height: 3rem;
      border: none;
      border-radius: .5rem;
      color: white;
      letter-spacing: .1rem;
      cursor:pointer ;
      text-transform: uppercase;
      font-size: 1rem;

    }
  .login{
    background-color: ${props => !props.status?'rgba(2, 102, 112, 0.5)':theme.turquois}!important;

  }
  .register{
    background-color: ${props => props.status?'rgba(2, 102, 112, 0.5)':theme.turquois}!important;

  }
`

function Button(props) {
    const location = useLocation()
    const history = useHistory()
    const[status,setStatus]= React.useState(false)
    React.useEffect(()=>{if (location.pathname==='/login'){setStatus(false)}if (location.pathname==='/register'){setStatus(true)}},[status])

    return (
        <Container status={status}>
            <button onClick={()=> {
                setStatus(true);
                history.push('/register')

            }} className='btn register'> Register</button>
            <button onClick={()=> {
                setStatus(false);
                history.push('/login')
            }} className='btn login'> Login</button>

        </Container>
    );
}

export default Button;