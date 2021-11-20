/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import styled from "styled-components";
import Card from "./Card";
import axios from "axios";
const Container = styled.div`
  .parent {
    display: grid;
    grid-template-columns: repeat(3, 1fr);

    grid-column-gap: 50px;
    grid-row-gap: 30px;
    height: 100%;
    margin-bottom: 50px;
  }
`;
function Grid(props) {
  const [data, setData] = React.useState([]);
  React.useEffect(async () => {
    await axios
      .get("http://localhost:8080/posts")
      .then(({ data }) => setData(data));
  }, []);
  return (
    <Container>
      <div className="parent">
        {data.map((p) => (
          <Card data={p} />
        ))}
      </div>
    </Container>
  );
}

export default Grid;
