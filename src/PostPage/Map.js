import React from "react";
import styled from "styled-components";
import ReactMapboxGl, { Layer, Source } from "react-mapbox-gl";
import { MAPBOX_TOKEN } from "../Utilities/helpers";
import { theme } from "../Utilities/theme";
const Map = ReactMapboxGl({
  ...MAPBOX_TOKEN,
  scrollZoom: false,
});
const Wrapper = styled.div`
  width: 100%;
  height: 70vh;
  .mapboxgl-map {
    div:last-child {
      gap: 20px !important;
      box-shadow: none !important;
      border: none !important;
      inset: 50px 50px auto auto !important;
      .mapboxgl-ctrl-attrib-inner {
        display: none !important;
      }
      #zoomIn,
      #zoomOut {
        border-radius: 1000px !important;
        width: 45px !important;
        height: 45px !important;
        background-repeat: no-repeat !important;
        background-position-x: 45% !important;
        background-position-y: 13px !important;
      }
      #zoomIn {
        background-position-y: 10px !important;
      }
      #zoomOut {
        background-position-y: -16.51px !important;
      }
    }
  }
`;

function PoiMap({ mapCenter }) {
  return (
    <Wrapper>
      <Map
        onStyleLoad={(map) => {
          map.resize();
        }}
        pitch={[1]}
        zoom={[13]}
        center={mapCenter}
        //eslint-disable-next-line
        style={"mapbox://styles/ibayoussef/ck9l4l53d0hbj1imrqjbcqdh2"}
        containerStyle={{
          width: "51.2vw",
          zIndex: "1",
          height: "30vh",
        }}
      >
        <>
          <Source
            id="point"
            geoJsonSource={{
              type: "geojson",
              data: {
                type: "Point",
                coordinates: mapCenter,
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
      </Map>
    </Wrapper>
  );
}

export default PoiMap;
