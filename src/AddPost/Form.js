import React, { useState } from "react";
import styled from "styled-components";
import { theme } from "../Utilities/theme";
import Button from "./Button";
import ReactMapboxGl, { Layer, Source } from "react-mapbox-gl";
import { MAPBOX_TOKEN } from "../Utilities/helpers";
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
  input[type="checkbox"] {
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
  .white{
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
  const [pictures, setPictures] = useState([]);
  const [coordinates, setCoords] = useState(null);
  const [price, setPrice] = useState("");
  const [dispo, setDispo] = useState(false);
  const [conditions, setConditions] = useState([0]);
  const [conditionsList, setConditionsList] = useState([]);

  const handlePics = (e) => {
    if (pictures) {
      setPictures([...pictures, ...e.target.files]);
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
      pictures: pictures,
      price: price,
      coordinates: coordinates,
      location: location,
      dispo: dispo,
      conditions: conditionsList.join(","),
    };
    setData(data);
    console.log(data);
  };
  return (
    <Container>
      <div className="firstflex">
        <h5 className="formlabel">Title :</h5>
        <div>
          <input
              type="text"
              className="formcontrol"
              id="inputPassword"
          />
        </div>
        <h5 className="formlabel">House pictures :</h5>
        <div>
          <input
            multiple
            type="file"
            onChange={(e) => handlePics(e)}
            className="formcontrol"
            id="Picture"
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
        <Spacer margin='2rem'/>

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

        <h5 className="formlabel">Disponibilité :</h5>
        <div>
          <input
            type="text"
            onChange={(e) => setDispo(e.target.value)}
            className="formcontrol"
            id="inputPassword"
          />
        </div>
        <Button  handleSubmit={() => handleSubmit()} />
      </div>
    </Container>
  );
}

export default Form;
