import React from "react";

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
