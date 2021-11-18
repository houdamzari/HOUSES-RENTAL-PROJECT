import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../Utilities/theme";
import logo from "../Home/media/LOGO.png";
import instagram from "./media/instagram.svg";
import profile from "./media/profile.svg";
import { users } from "../data";

const Container = styled.div`
  position: relative;
  border-bottom: 2px solid rgba(2, 102, 112, 0.2);
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
      props.condition1 ? `2px solid ${theme.turquois}` : "none"};
    padding: ${(props) => (props.condition1 ? `18px 0px` : "none")};
  }

  .home {
    border-bottom: ${(props) =>
      props.condition ? `2px solid ${theme.turquois}` : "none"};
    padding: ${(props) => (props.condition ? `18px 0px` : "none")};
  }

  .projects {
    border-bottom: ${(props) =>
      props.condition ? `4px solid ${theme.turquois}` : "none"};
  }

  .skills {
    border-bottom: ${(props) =>
      props.condition2 ? `4px solid ${theme.turquois}` : "none"};
  }

  .contact {
    border-bottom: ${(props) =>
      props.condition3 ? `4px solid ${theme.turquois}` : "none"};
  }

  .logo {
    width: 10rem;
    height: 5rem;
    position: relative;
    top: 3rem;
    left: -5rem;
  }

  .profile {
    width: 0.5rem;
    height: 2rem;
    position: relative;
    margin-left: -4rem;
  }

  .instagram {
    position: relative;
    left: 8rem;
  }
`;

function Navbar(props) {
  const location = useLocation();
  const condition = location.pathname === "/";
  const condition1 = location.pathname === "/About";
  React.useEffect(() => {
    if (
      window.localStorage.getItem("login") &&
      window.localStorage.getItem("login") !== "true"
    ) {
      window.localStorage.setItem("login", false);
    }
  });
  console.log(window.localStorage.getItem("login"));
  return (
    <Container condition={condition} condition1={condition1}>
      <nav>
        <ul>
          <li>
            <Link className="home" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="about" to="/About">
              About
            </Link>
          </li>
          <li>
            <Link to="/">
              <img className="logo" src={logo} alt="logo" />
            </Link>
          </li>

          <li>
            <Link className="instagram" to="/projects">
              <img src={instagram} alt="instagram" />
            </Link>
          </li>
          <li>
            <Link
              className="profile"
              to={
                window.localStorage.getItem("login") === "false"
                  ? "/login"
                  : window.localStorage.getItem("login") === "true"
                  ? "/Profile"
                  : null
              }
            >
              <img src={profile} alt="profile" />
            </Link>
          </li>
        </ul>
      </nav>
    </Container>
  );
}

export default Navbar;
