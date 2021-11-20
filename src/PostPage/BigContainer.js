import React, { useState } from "react";
import styled from "styled-components";
import Button from "../PostPage/Button";
import Grid from "../PostPage/Grid";
import Heading from "../PostPage/Heading";
import Description from "../PostPage/Description";
import Spacer from "../Utilities/Spacer";
import Comodities from "../PostPage/Comodities";
import Requirements from "../PostPage/Requirements";
import { useParams } from "react-router-dom";
import axios from "axios";
import { getSafe } from "../Utilities/helpers";
import Map from "./Map";
const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10rem;
  position: relative;
  top: 3rem;
  left: 1rem;
  overflow-x: hidden;
`;
function BigContainer(props) {
  let { id } = useParams();
  const [post, setPost] = useState([]);
  const [data, setData] = useState([]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  React.useEffect(async () => {
    await axios
      .get("http://localhost:8080/posts")
      .then(({ data }) => setData(data));
  }, []);
  React.useEffect(() => {
    const post = data.filter((p) => p.postId === id);
    setPost(post);
  }, [id, data]);

  return (
    <Container>
      <div>
        <Grid post={getSafe(() => post[0])} getSafe={getSafe} />
        <Map
          mapCenter={getSafe(() => [
            parseFloat(post[0].location.latitude),
            parseFloat(post[0].location.longitude),
          ])}
        />
      </div>
      <div>
        <Heading
          title={getSafe(() => post[0].title)}
          name={getSafe(
            () => post[0].student.lastName + " " + post[0].student.firstName
          )}
          price={getSafe(() => post[0].prix)}
        />
        <Spacer margin="2rem" />
        <Description post={post[0]} getSafe={getSafe} />
        <Spacer margin="4rem" />

        <Heading title="HOUSE COMMODITIES" />
        <Spacer margin="2rem" />
        <Comodities post={post[0]} getSafe={getSafe} />
        <Spacer margin="4rem" />

        <Heading title="Requirements " />
        <Spacer margin="2rem" />
        <Requirements post={post[0]} getSafe={getSafe} />
        <Spacer margin="3rem" />

        <Button email post={post[0]} getSafe={getSafe} />
      </div>
    </Container>
  );
}

export default BigContainer;
