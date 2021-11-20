import React from "react";
import styled from "styled-components";
import { theme } from "../Utilities/theme";
import logo from "./media/LOGO.png";
import { useHistory } from "react-router-dom";
import Button from "../Login/Button";
import { Link } from "react-router-dom";
import { users } from "../data";
const Container = styled.div`
  position: relative;
  left: 8rem;
  .formcontrol {
    width: 22.7rem;
    height: 3rem;
    margin: 2rem 0;
    border-radius: 0.5rem;
    background-color: rgba(2, 102, 112, 0.1);
  }
  h4 {
    position: relative;
    font-weight: 300;
  }
  img {
    height: 10rem;
    position: relative;
  }
`;
function LoginForm(props) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  let history = useHistory();
  const handleSubmit = () => {
    users.map((p) => {
      if (p.email === email && p.password === password) {
        window.localStorage.setItem("login", true);
        history.push("/");
      }
    });
    if (window.localStorage.getItem("login") === "false") {
      alert("Wrong credentials");
    }
  };
  return (
    <Container>
        <Link to='/'><img src={logo} alt=""/></Link>
      <h4 className="formlabel">Email :</h4>
      <div>
        <input
          type="email"
          className="formcontrol"
          onChange={(e) => setEmail(e.target.value)}
          id="inputPassword"
        />
      </div>
      <h4 className="formlabel">Password :</h4>
      <div>
        <input
          type="password"
          className="formcontrol"
          onChange={(e) => setPassword(e.target.value)}
          id="inputPassword"
        />
      </div>
      <Button handleSubmit={handleSubmit} />
    </Container>
  );
}

export default LoginForm;
