import styled from "styled-components";
import { Modal } from "react-native-paper";

import { theme } from "../../../infrastructure/theme";

export const ModalContainer = styled(Modal).attrs({
  contentContainerStyle: {
    flex: 1,
    padding: 5,
    backgroundColor: theme.colors.bg.primary,
    borderRadius: 20,
  },
})`
  padding: ${(props) => props.theme.space[5]};
`;

export const TopContainer = styled.View`
  flex: 0.5;
  align-items: flex-end;
  justify-content: center;
`;

export const TitleContainer = styled.View`
  flex: 0.4;
  align-items: center;
  justify-content: flex-start;
`;

export const ContentContainer = styled.View`
  flex: 5;
  justify-content: center;
  align-items: center;
`;

export const Scroll = styled.ScrollView`
  margin-horizontal: 10px;
  padding-horizontal: 20px;
`;

export const ButtonContainer = styled.View`
  flex: 0.8;
`;
