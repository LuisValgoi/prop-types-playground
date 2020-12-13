import styled from "styled-components";

import * as Colors from "../../styles/Constants";

export const Card = styled.div`
  height: max-content;
  width: 288px;
  background-color: ${Colors.COLOR_GREY};
  border-radius: 0.25rem;
  border: 1px solid rgba(0, 0, 0, 0.125);
  display: flex;
  padding: 0.5rem;
  margin: 0.5rem;
  flex-direction: column;
`;

export const Image = styled.img`
  height: 180px;
  width: 100%;
  display: block;
`;

export const Content = styled.div`
  padding: 0.3rem;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Title = styled.h2`
  width: 100%;
  margin-bottom: 0.75rem;
`;

export const Price = styled.span`
  font-weight: bold;
  color: #fff;
  background-color: ${(props) => (props.primary ? Colors.COLOR_BLUE : Colors.COLOR_PINK)};
  height: max-content;
  display: inline;
  padding: 0.25rem;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: 0.25rem;
`;

export const Description = styled.p`
  width: 100%;
  margin-top: 0;
  margin-bottom: 1rem;
  box-sizing: border-box;
`;

export const Button = styled.button`
  cursor: pointer;
  width: 100%;
  border-radius: 0.25rem;
  padding: 0.25rem;
  user-select: none;
  border: 1px solid transparent;
  text-align: center;
  vertical-align: middle;
  display: inline-block;
  color: ${Colors.COLOR_WHITE};
  background-color: ${(props) => (props.primary ? Colors.COLOR_BLUE : Colors.COLOR_PINK)};
`;
