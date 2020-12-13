import React from "react";
import "./style.css";

import Card from "../../components/Card";
import Banner from "../../components/Banner";
import Header from "../../components/Header";
import Container from "../../components/Container";

function App() {
  return (
    <>
      <Banner>
        <Header>PropTypes Playground</Header>
      </Banner>
      <Container>
        <Card name="Pizza" image="/images/chicago-pizza.jpg" price={9} desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec vestibulum eros." />
        <Card primary name="Pizza" image="/images/chicago-pizza.jpg" price={9} desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec vestibulum eros." />
      </Container>
    </>
  );
}

export default App;
