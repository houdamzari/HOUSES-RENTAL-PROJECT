import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../Utilities/theme";
import logo from "../Home/media/LOGO.png";
import instagram from "./media/instagram.svg";
import profile from "./media/profile.svg";




const Container = styled.div`
  position: relative;
  border-bottom: 2px solid ${theme.turquois};
  top: -2rem;

  ul {
    display: flex;
    flex-direction: row;
    text-decoration: none;
    padding: 0 0;
    align-items: center;
    list-style: none;
    justify-content: space-between;
    margin-left: 6rem;

  }
  li > * {
    width: 10rem;
    height: 3rem;
    color: ${theme.turquois};
    font-size: 1.2rem;
    text-decoration: none;
    font-weight: 600;
    letter-spacing: 4px;
    position: relative;
    top: 1.5rem;

  }
  .about {
    border-bottom: ${(props) =>
    props.condition ? `4px solid ${theme.turquois}` : "none"};
  }
  .projects {
    border-bottom: ${(props) =>
    props.condition1 ? `4px solid ${theme.turquois}` : "none"};
  }
  .skills {
    border-bottom: ${(props) =>
    props.condition2 ? `4px solid ${theme.turquois}` : "none"};
  }
  .contact {
    border-bottom: ${(props) =>
    props.condition3 ? `4px solid ${theme.turquois}` : "none"};
  }
  .logo{
    width: 10rem;
    height: 5rem;
    position: relative;
    top: 3rem;
    left: -5rem;
  }
  .profile {
    width: .5rem;
    height: 2rem;
    position: relative;
    margin-left: -4rem;
  }
  .instagram{
        position: relative;
    left: 8rem;
  }
`;

function Navbar(props) {
    const location = useLocation();
    const condition = location.pathname === "/";
    const condition1 = location.pathname === "/About";
    // const condition2 = location.pathname === "/skills";
    // const condition3 = location.pathname === "/contact";

    return (
        <Container
            condition={condition}
            condition1={condition1}
            // condition2={condition2}
            // condition3={condition3}
        >
            <nav>
                <ul>

                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link className="about" to="/About">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to="/"><img className='logo' src={logo} alt="logo"/></Link>
                    </li>

                    <li>
                        <Link className="instagram" to="/projects">
                            <img src={instagram} alt="instagram"/>
                        </Link>
                    </li>
                    <li>
                        <Link className="profile" to="/contact">
                            <img src={profile} alt="profile"/>

                        </Link>
                    </li>
                </ul>
            </nav>
        </Container>
    );
}

export default Navbar;