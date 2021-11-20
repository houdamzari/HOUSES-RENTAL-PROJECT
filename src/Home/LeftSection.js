import React from "react";
import styled from "styled-components";
import { theme } from "../Utilities/theme";
import Sidebar from "./Sidebar";
import HeadingPrimary from "./HeadingPrimary";
import SearchFilter from "./SearchFilter";

const Container = styled.div`
  width: 40%;
  height: fit-content;
`;

function LeftSection({ setDate, setCommo, setLocation, commo }) {
  return (
    <Container>
      <Sidebar height="85vh" />
      <HeadingPrimary />
      <SearchFilter
        setDate={setDate}
        setLocation={setLocation}
        setCommo={setCommo}
        commo={commo}
      />
    </Container>
  );
}

export default LeftSection;
