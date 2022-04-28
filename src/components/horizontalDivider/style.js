import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

export const Text = styled.span`
  color: ${(props) => props.color};
  font-family: "Roboto";
  font-weight: 500;

  margin: 0px 3px;
`;

export const Line = styled.div`
  width: 100%;
  height: 1px;

  background: ${(props) => props.background};
`;
