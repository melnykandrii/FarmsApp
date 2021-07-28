import { List } from "react-native-paper";
import styled from "styled-components/native";
import { theme } from "../../../infrastructure/theme";

export const Item = styled(List.Item)`
  padding: ${(props) => props.theme.space[4]};
`;
export const ListIcon = styled(List.Icon).attrs({
  color: theme.colors.brand.spring,
})``;
