import React from "react";
import styled from "styled-components";
import BigContainer from "./BigContainer";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 1.5rem 8rem;
  grid-template-areas:
    ". ."
    ". ."
    ". .";

  label {
    margin-left: 1rem;
    font-size: 1.1rem;
  }
  input {
  }
`;
function Comodities({ post, getSafe }) {
  return (
    <Container>
      <div>
        <input
          type="checkbox"
          checked={getSafe(() =>
            post.details.television === "Disponnible" ? true : false
          )}
          name="TV"
        />
        <label for="TV"> TV </label>
      </div>
      <div>
        <input
          type="checkbox"
          checked={getSafe(() =>
            post.details.machineLaver === "Disponnible" ? true : false
          )}
          name="Bathtub"
        />
        <label htmlFor="Bathtub"> Washing Machine </label>
      </div>

      <div>
        {" "}
        <input
          type="checkbox"
          name="Balcony"
          checked={getSafe(() =>
            post.details.refrigerateur === "Disponnible" ? true : false
          )}
        />
        <label htmlFor="Balcony"> Refrigerator </label>
      </div>
      <div>
        <input
          type="checkbox"
          name="Balcony"
          checked={getSafe(() =>
            post.details.chauffeEau === "Disponnible" ? true : false
          )}
        />
        <label htmlFor="Balcony"> Chauffage d'eau </label>
      </div>
      <div>
        {" "}
        <input
          type="checkbox"
          name="Balcony"
          checked={getSafe(() =>
            post.details.internetAccess === "Disponnible" ? true : false
          )}
        />
        <label htmlFor="Balcony"> Internet Access</label>
      </div>
      <div>
        <input
          type="checkbox"
          name="Balcony"
          checked={getSafe(() =>
            post.details.ascenseur === "Disponnible" ? true : false
          )}
        />
        <label htmlFor="Balcony"> Ascenseur </label>
      </div>
    </Container>
  );
}

export default Comodities;
