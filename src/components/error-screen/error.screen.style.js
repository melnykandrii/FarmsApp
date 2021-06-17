import styled from "styled-components/native";

export const ErrorView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const ErrorScrollView = styled.ScrollView.attrs({
  contentContainerStyle: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
})``;
