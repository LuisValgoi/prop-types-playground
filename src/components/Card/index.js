import React from "react";
import PropTypes from "prop-types";

import * as UI from "./style";

export default function Card({ name, price, desc, image, primary }) {
  return (
    <UI.Card>
      <UI.Image alt="Image" src={image} />
      <UI.Content>
        <UI.TitleWrapper>
          <UI.Title>{name}</UI.Title>
          <UI.Price primary={primary}>{`R$ ${price},00`}</UI.Price>
        </UI.TitleWrapper>
        <UI.Description>{desc}</UI.Description>
        <UI.Button primary={primary}>Add to Cart</UI.Button>
      </UI.Content>
    </UI.Card>
  );
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  desc: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  primary: PropTypes.bool,
};

Card.defaultProps = {
  name: "N/A",
  price: 0,
  desc: "N/A",
};
