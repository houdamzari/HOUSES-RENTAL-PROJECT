/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import styled from "styled-components";
import Card from "./Card";
import axios from "axios";
import moment from "moment";
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
function Grid({ commo, location, date }) {
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
  const [data, setData] = React.useState([]);
  const [filtered, setFiltered] = React.useState([]);
  const [datelist, setDateList] = React.useState([]);
  React.useEffect(async () => {
    await axios
      .get("http://localhost:8080/posts")
      .then(({ data }) => setData(data));
  }, []);
  React.useEffect(() => {
    if (date) {
      let dates = [];
      const theDate = new Date(date.start);
      while (theDate < date.end) {
        dates = [...dates, moment(theDate).format("DD/MM/YYYY")];
        theDate.setDate(theDate.getDate() + 1);
      }

      setDateList(dates);
    }
  }, [date]);

  React.useEffect(() => {
    if (data) {
      let output = data;
      if (commo) {
        output = data.filter(
          (p) =>
            commo.indexOf(p.details.tags[0]?.slug) > -1 ||
            commo.indexOf(p.details.tags[1]?.slug) > -1 ||
            commo.indexOf(p.details.tags[2]?.slug) > -1
        );
      }
      if (location) {
        output = data.filter((p) => p.region === location);
      }
      if (datelist.length !== 0) {
        output = data.filter((p) => datelist.indexOf(p.dateDePublication) > -1);
      }
      if (userData?.[0]) {
        output = data.filter((p) => p.gender === userData[0].gender);
      }
      setFiltered(output);
      console.log(output)
    }
  }, [commo, location, date, datelist, userData]);
  return (
    <Container>
      <div className="parent">
        {filtered.length !== 0 && filtered.map((p) => <Card data={p} />)}
        {filtered.length === 0 && data.map((p) => <Card data={p} />)}
      </div>
    </Container>
  );
}

export default Grid;
