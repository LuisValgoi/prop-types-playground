import React from "react";

import * as UI from "./style";

export default function Container(props) {
  return (
    <UI.Container>
      <UI.Content>{props.children}</UI.Content>
    </UI.Container>
  );
}
