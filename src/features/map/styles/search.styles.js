import styled from "styled-components/native";

export const SearchView = styled.View`
  position: absolute;
  z-index: 999;
  top: ${(props) => props.theme.space[5]};
  width: 96%;
  left: ${(props) => props.theme.space[3]};
`;
