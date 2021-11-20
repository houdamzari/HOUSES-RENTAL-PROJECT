import React from "react";
import styled from "styled-components";
import { theme } from "../Utilities/theme";
import logo from "../Home/media/LOGO.png";
import Button from "./Button";
import { Link } from "react-router-dom";
import Spacer from "../Utilities/Spacer";
import axios from "axios";
const Container = styled.div`
  position: relative;
  left: 8rem;
  .formcontrol {
    width: 22.7rem;
    height: 2.2rem;
    border-radius: 0.5rem;
    background-color: rgba(2, 102, 112, 0.1);
    position: relative;
    top: -3rem;
  }
  h4 {
    position: relative;
    font-weight: 300;
    top: -3rem;
  }
  img {
    height: 10rem;
    position: relative;
  }
  .btn {
    position: relative;
    top: -1.8rem;
  }
`;
function RegisterForm(props) {
  const [data, setData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    image: "",
    gender: "",
  });

  const handleSubmit = () => {
    axios
      .post("http://localhost:8080/students", data, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="" />
      </Link>
      <Spacer margin="1rem" />
      <h4 className="formlabel">First Name :</h4>
      <div>
        <input
          type="text"
          onChange={(e) => setData({ ...data, firstName: e.target.value })}
          className="formcontrol"
          id="inputPassword"
        />
      </div>
      <h4 className="formlabel">Last Name :</h4>
      <div>
        <input
          type="text"
          onChange={(e) => setData({ ...data, lastName: e.target.value })}
          className="formcontrol"
          id="inputPassword"
        />
      </div>
      <h4 className="formlabel">Image :</h4>
      <div>
        <input
          type="text"
          onChange={(e) => setData({ ...data, image: e.target.value })}
          className="formcontrol"
          id="inputPassword"
        />
      </div>
      <h4 className="formlabel">Email :</h4>
      <div>
        <input
          type="email"
          onChange={(e) => setData({ ...data, email: e.target.value })}
          className="formcontrol"
          id="inputPassword"
        />
      </div>
      <h4 className="formlabel">Gender :</h4>
      <div>
        <input
          type="text"
          onChange={(e) => setData({ ...data, gender: e.target.value })}
          className="formcontrol"
          id="inputPassword"
        />
      </div>

      <h4 className="formlabel"> Password :</h4>
      <div>
        <input
          type="password"
          onChange={(e) => setData({ ...data, password: e.target.value })}
          className="formcontrol"
          id="inputPassword"
        />
      </div>
      <div className="btn">
        <Button handleSubmit={() => handleSubmit()} />
      </div>
    </Container>
  );
}

export default RegisterForm;
