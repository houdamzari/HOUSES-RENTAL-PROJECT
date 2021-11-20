import React, { useState } from "react";
import styled from "styled-components";
import { theme } from "../Utilities/theme";
import Button from "./Button";
import ReactMapboxGl, { Layer, Source } from "react-mapbox-gl";
import { MAPBOX_TOKEN } from "../Utilities/helpers";
import axios from "axios";
import moment from "moment";
import Spacer from "../Utilities/Spacer";
const Map = ReactMapboxGl({
  ...MAPBOX_TOKEN,
  scrollZoom: false,
});
const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15rem;
  position: relative;
  top: 1rem;
  .tags {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 30px;
  }
  .dropdown-content {
    transition: all 0.4s;
    display: none;
    > * {
      opacity: 0;
    }
  }
  .formcontrol {
    width: 22.7rem;
    height: 2.5rem;
    margin: 0.7rem;
    border-radius: 0.5rem;
    background-color: rgba(2, 102, 112, 0.1);
  }
  .flex {
    display: flex;
    flex-direction: row;
    gap: 1rem;
  }
  .coordinates {
    width: 11rem;
    height: 2.5rem;
  }
  h5 {
    position: relative;
    font-weight: 300;
    left: 0.8rem;
  }

  .dropbtn {
    left: 0.5rem;
    width: 23rem;
    height: 2.5rem;
    background-color: transparent;
    border-radius: 10px;
    border: 2px solid ${theme.turquois};
    font-size: 1.1rem;
    margin-left: 0.5rem;
    margin-bottom: 0.7rem;
    margin-top: 0.5rem;
  }
  input[type="checkbox"]:not(.tagss) {
    opacity: 0;
    appearance: none;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    &:checked {
      ~ .dropdown-content {
        > * {
          opacity: 1;
        }
        display: block;
        position: relative;
        left: 0;
        top: 0;
        width: 100%;
        background-color: ${theme.grey};
        height: fit-content;
        z-index: 99999;
        border-radius: 10px;
        display: block;
      }
      ~ .location {
        margin: 0px 0px;
      }
    }
  }
  // input[type="text"] {
  //   display: inline-block;
  //   height: 40%;
  //   width: 25%;
  //   font-size: 1.1rem;
  //   top: 0;
  //   border: 2px solid ${theme.turquois};
  // }
  ul {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  li {
    list-style: none;
    position: relative;
    top: 0.5rem;

    border-bottom: 2px solid ${theme.turquois};
    left: -1rem;
    padding-bottom: 0.7rem;
  }
  .white {
    width: 21.5rem;
    height: 2.5rem;
    background-color: white;
    position: relative;
    top: -2.3rem;
  }
`;
function Form(props) {
  const [location, setLocation] = useState("");
  const [checkk, setCheckk] = useState(false);
  const [data, setData] = useState({});
  const [picture1, setPicture1] = useState({});
  const [picture2, setPicture2] = useState({});
  const [picture3, setPicture3] = useState({});
  const [coordinates, setCoords] = useState(null);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");
  const [dispo, setDispo] = useState([]);
  const [conditions, setConditions] = useState([0]);
  const [conditionsList, setConditionsList] = useState([]);
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
  const handleTags = (e) => {
    if (dispo.includes(e.target.value)) {
      setDispo(dispo.filter((p) => p.slug !== e.target.value));
    } else {
      setDispo([...dispo, { slug: e.target.value, name: e.target.value }]);
    }
  };
  const handleSubmit = () => {
    let i = 0;
    let array = [];
    while (i < conditions.length) {
      array.push(document.getElementById(`input${i}`).value);
      i++;
    }
    setConditionsList(array);
    const data = {
      description: desc,
      title: title,
      images: [picture1, picture2, picture3],
      dateDePublication: moment(new Date()).format("DD/MM/YYYY"),
      dureeDeDisponibilite: "5",
      nombreDeCollegues: "1",
      maxNombreDeCollegues: "2",
      prix: price,
      location: {
        dateEntree: new Date(),
        dureeDeLocation: "5",
        longitude: coordinates.lng.toString(),
        latitude: coordinates.lat.toString(),
      },
      region: location.toLowerCase(),
      gender: userData[0].gender,
      ville: location,
      details: { conditions: conditionsList.join(","), tags: dispo },
    };
    setData(data);
    axios
      .post(`http://localhost:8080/posts/${userData[0].studentId}`, data, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((res) => alert("Post Added"))
      .catch((err) => console.error(err));
  };
  console.log(data);
  return (
    <Container>
      <div className="firstflex">
        <h5 className="formlabel">Title :</h5>
        <div>
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            className="formcontrol"
            id="inputPassword"
          />
        </div>
        <h5 className="formlabel">Description :</h5>
        <div>
          <textarea
            type="text"
            className="formcontrol"
            id="inputPassword"
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
        </div>
        <h5 className="formlabel">3 House pictures links please :</h5>
        <div>
          <input
            type="text"
            onChange={(e) =>
              setPicture1({ description: "img1", url: e.target.value })
            }
            className="formcontrol"
            id="inputPassword"
          />
          <input
            type="text"
            onChange={(e) =>
              setPicture2({ description: "img2", url: e.target.value })
            }
            className="formcontrol"
            id="inputPassword"
          />
          <input
            type="text"
            onChange={(e) =>
              setPicture3({ description: "img3", url: e.target.value })
            }
            className="formcontrol"
            id="inputPassword"
          />
        </div>

        <h5 className="formlabel">Adresse coordinates :</h5>
        <Spacer margin="2rem" />
        <div className="flex">
          <Map
            onStyleLoad={(map) => {
              map.resize();
            }}
            onClick={(map, e) => setCoords(e.lngLat)}
            pitch={[1]}
            zoom={[10]}
            center={[-5.3626, 35.5889]}
            //eslint-disable-next-line
            style={"mapbox://styles/ibayoussef/ck9l4l53d0hbj1imrqjbcqdh2"}
            containerStyle={{
              width: "100%",
              zIndex: "1",
              height: "30vh",
            }}
          >
            {" "}
            {coordinates && (
              <>
                <Source
                  id="point"
                  geoJsonSource={{
                    type: "geojson",
                    data: {
                      type: "Point",
                      coordinates: [coordinates.lng, coordinates.lat],
                    },
                  }}
                />
                <Layer
                  id="point"
                  type="circle"
                  sourceId="point"
                  paint={{
                    "circle-radius": 10,
                    "circle-color": theme.turquois,
                  }}
                />
              </>
            )}
            <div className="white"></div>
          </Map>
        </div>
      </div>
      <div className="secondflex">
        <Spacer margin="2rem" />

        <div className="dropdown">
          <input
            checked={checkk}
            onChange={(e) => setCheckk(!checkk)}
            type="checkbox"
          />
          <button className="dropbtn">
            {location.length > 0 ? location : "City"}
          </button>
          <div className="dropdown-content location">
            <ul>
              <li
                onClick={(e) => {
                  setLocation(e.target.innerHTML);
                  setCheckk(false);
                }}
              >
                Tetouan
              </li>
              <li
                onClick={(e) => {
                  setLocation(e.target.innerHTML);
                  setCheckk(false);
                }}
              >
                Martil
              </li>
              <li
                onClick={(e) => {
                  setLocation(e.target.innerHTML);
                  setCheckk(false);
                }}
              >
                Mediq
              </li>
              <li
                onClick={(e) => {
                  setLocation(e.target.innerHTML);
                  setCheckk(false);
                }}
              >
                Fenideq
              </li>
            </ul>
          </div>
        </div>
        <h5 className="formlabel">Price :</h5>
        <div>
          <input
            type="text"
            onChange={(e) => setPrice(e.target.value)}
            className="formcontrol"
            id="inputPassword"
          />
        </div>

        <h5 className="formlabel">Conditions:</h5>
        {conditions.map((p, i) => (
          <div className="conditions">
            <input type="text" className="formcontrol" id={`input${i}`} />
            <button
              onClick={() => {
                i + 1 === conditions.length
                  ? setConditions([...conditions, i + 2])
                  : setConditions(conditions.filter((q) => q !== i + 2));
              }}
            >
              {i + 1 !== conditions.length ? "-" : "+"}
            </button>
          </div>
        ))}

        <h5 className="formlabel">Tags :</h5>
        <div className="tags">
          <div>
            <input
              className="tagss"
              type="checkbox"
              onChange={(e) => handleTags(e)}
              value="tv"
              id="inputPassword"
            />
            <label>TV</label>
          </div>
          <div>
            <input
              className="tagss"
              type="checkbox"
              value="ascenseur"
              onChange={(e) => handleTags(e)}
              id="inputPassword"
            />
            <label>Elevator</label>
          </div>
          <div>
            <input
              className="tagss"
              value="internet"
              type="checkbox"
              onChange={(e) => handleTags(e)}
              id="inputPassword"
            />
            <label>Internet</label>
          </div>

          <div>
            <input
              className="tagss"
              type="checkbox"
              value="heater"
              onChange={(e) => handleTags(e)}
              id="inputPassword"
            />
            <label>Water Heater</label>
          </div>
          <div>
            <input
              type="checkbox"
              className="tagss"
              value="wach"
              onChange={(e) => handleTags(e)}
              id="inputPassword"
            />
            <label>Washing Machine</label>
          </div>
          <div>
            <input
              type="checkbox"
              className="tagss"
              value="refri"
              onChange={(e) => handleTags(e)}
              id="inputPassword"
            />
            <label>Refrigerator</label>
          </div>
        </div>
        <Button handleSubmit={() => handleSubmit()} />
      </div>
    </Container>
  );
}

export default Form;
