import styled from "styled-components/native";
import { Avatar } from "react-native-paper";

export const CartIcon = styled(Avatar.Icon).attrs({
  size: 128,
})`
  background: ${(props) => props.bg || props.theme.colors.brand.spring};
`;

export const EmptyView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const EmptyScrollView = styled.ScrollView.attrs({
  contentContainerStyle: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
})``;
