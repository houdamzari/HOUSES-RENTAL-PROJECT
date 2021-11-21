import React from "react";
import styled from "styled-components";
import axios from "axios";
import HeadingPrimary from "./HeadingPrimary";
import Card from "../Card/Card";
import HeaderSlider from "./HeaderSlider";
import Spacer from "../Utilities/Spacer";
import { getSafe } from "../Utilities/helpers";
import { useCurrentPosition } from "../Utilities/useCurrentPosition";
import { orderByDistance, getDistance } from "geolib";
const Container = styled.div``;
function NearbySection(props) {
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);
  const [position] = useCurrentPosition();
  const [userPos, setUserPos] = React.useState({});
  const [nearest, setNearest] = React.useState([]);
  const [data, setData] = React.useState([]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const [users, setUsers] = React.useState([]);
  const [userData, setUserData] = React.useState([]);
  React.useEffect(async () => {
    await axios
      .get("http://localhost:8080/students")
      .then(({ data }) => setUsers(data));
  }, []);
  React.useEffect(() => {
    const id = window.localStorage.getItem("userID");
    console.log(id);
    setUserData(users.filter((p) => p.studentId === id));
  }, [users]);
  React.useEffect(async () => {
    await axios
      .get("http://localhost:8080/posts")
      .then(({ data }) => setData(data));
  }, []);

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
  React.useEffect(() => {
    if (data) {
      let output = getSafe(() => data);
      if (userData?.[0]) {
        output = data.filter((p) => p.gender === userData[0].gender);
      }
      if (userPos) {
        try {
          output = output
            .map((o, i) => {
              return {
                ...o,
                distance: getDistance(
                  {
                    latitude: parseFloat(o.location?.latitude),
                    longitude: parseFloat(o.location?.longitude),
                  },
                  {
                    latitude: userPos.latitude,
                    longitude: userPos.longitude,
                  }
                ),
              };
            })
            .sort((s, v) => s.distance - v.distance);
        } catch (error) {
          console.error("invalid coordinates at !origin");
        }
      }

      if (userPos) {
        try {
          output = orderByDistance(
            { latitude: userPos.latitude, longitude: userPos.longitude },
            // eslint-disable-next-line

            output.map((t) => {
              if (
                t &&
                t.location &&
                t.location?.coordinates[1] &&
                t.location?.coordinates[0]
              ) {
                return {
                  ...t,
                  latitude: getSafe(() => parseFloat(t.location.latitude)),
                  longitude: getSafe(() => parseFloat(t.location.longitude)),
                };
              }
              return false;
            })
          );
        } catch (error) {
          console.error("invalid coordinates");
        }

        setNearest(output);
      }
    }
  }, [userPos, data, userData]);

  return (
    <Container>
      <Spacer margin="4rem" />
      <HeadingPrimary
        navigationPrevRef={navigationPrevRef}
        navigationNextRef={navigationNextRef}
      />
      <Spacer margin="2rem" />
      <HeaderSlider
        navigationPrevRef={navigationPrevRef}
        navigationNextRef={navigationNextRef}
        img={nearest}
        userPos={userPos}
      />
      <Spacer margin="7rem" />
    </Container>
  );
}

export default NearbySection;
