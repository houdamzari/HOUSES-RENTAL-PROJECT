import React from "react";
import styled from "styled-components";
import { theme } from "../Utilities/theme";
import BigContainer from "./BigContainer";
import { useCurrentPosition } from "../Utilities/useCurrentPosition";

const Container = styled.div``;
function Home(props) {
  const [position] = useCurrentPosition();
  const [userPos, setUserPos] = React.useState({});
  React.useEffect(() => {
    if (
      position &&
      position.coords &&
      position.coords.latitude &&
      position.coords.longitude
    ) {
      setUserPos({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
    }
  }, [position]);
  console.log(userPos);
  return (
    <Container>
      <BigContainer />
    </Container>
  );
}

export default Home;
