import styled from "styled-components";

import * as Colors from "../../styles/Constants";

export const Container = styled.div`
  height: 100%;
  padding: 1rem;
  margin: 1rem;
  border-radius: 0.25rem;
  background-color: ${Colors.COLOR_WHITE};
  border: 1px solid rgba(0, 0, 0, 0.125);
  box-shadow: 0px 0px 10px 0px rgba(168, 168, 168, 0.84);
  -webkit-box-shadow: 0px 0px 10px 0px rgba(168, 168, 168, 0.84);
  -moz-box-shadow: 0px 0px 10px 0px rgba(168, 168, 168, 0.84);
`;

export const Content = styled.div`
  height: 100%;
  max-width: inherit;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
