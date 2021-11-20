import React from "react";
import styled from "styled-components";

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
  const [tags, setTags] = React.useState([]);
  React.useEffect(() => {
    let array = [];
    getSafe(() => post.details.tags.map((tag) => array.push(tag.slug)));
    setTags(array);
  }, [post]);
  return (
    <Container>
      <div>
        <input
          type="checkbox"
          checked={getSafe(() => (tags.includes("tv") ? true : false))}
          name="TV"
        />
        <label for="TV"> TV </label>
      </div>
      <div>
        <input
          type="checkbox"
          checked={getSafe(() => (tags.includes("wach") ? true : false))}
          name="Bathtub"
        />
        <label htmlFor="Bathtub"> Washing Machine </label>
      </div>

      <div>
        {" "}
        <input
          type="checkbox"
          name="Balcony"
          checked={getSafe(() => (tags.includes("refri") ? true : false))}
        />
        <label htmlFor="Balcony"> Refrigerator </label>
      </div>
      <div>
        <input
          type="checkbox"
          name="Balcony"
          checked={getSafe(() => (tags.includes("heater") ? true : false))}
        />
        <label htmlFor="Balcony"> Chauffage d'eau </label>
      </div>
      <div>
        {" "}
        <input
          type="checkbox"
          name="Balcony"
          checked={getSafe(() => (tags.includes("internet") ? true : false))}
        />
        <label htmlFor="Balcony"> Internet Access</label>
      </div>
      <div>
        <input
          type="checkbox"
          name="Balcony"
          checked={getSafe(() => (tags.includes("ascenseur") ? true : false))}
        />
        <label htmlFor="Balcony"> Ascenseur </label>
      </div>
    </Container>
  );
}

export default Comodities;
