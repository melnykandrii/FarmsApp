import React from "react";

import styled from "styled-components/native";
import { Platform } from "react-native";
import { WebView } from "react-native-webview";
import { Text } from "../../../components/typography/text.component";

const CompactImage = styled.Image`
  border-radius: ${(props) => props.theme.sizepx[4]};
  width: ${(props) => props.theme.sizepx[6]};
  height: ${(props) => props.theme.sizepx[6]};
`;

const CompactWebView = styled(WebView)`
  border-radius: ${(props) => props.theme.sizepx[1]};
  width: ${(props) => props.theme.sizepx[7]};
  height: ${(props) => props.theme.sizepx[6]};
`;

const Item = styled.View`
  align-items: center;
  padding: ${(props) => props.theme.space[3]};
  max-width: ${(props) => props.theme.sizepx[7]};
`;

const isAndroid = Platform.OS === "android";

export const UserCallout = ({ user, photo }) => {
  const Image = isAndroid ? CompactWebView : CompactImage;
  return (
    <Item>
      {photo && (
        <Image
          source={{
            uri: photo,
          }}
        />
      )}
      <Text variant="body">{user.email}</Text>
    </Item>
  );
};
