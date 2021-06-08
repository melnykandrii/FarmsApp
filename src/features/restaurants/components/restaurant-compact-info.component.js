import React from "react";

import styled from "styled-components/native";
import { Platform } from "react-native";
import { WebView } from "react-native-webview";
import { Text } from "../../../components/typography/text.component";

const CompactImage = styled.Image`
  border-radius: ${(props) => props.theme.sizepx[1]};
  width: ${(props) => props.theme.sizepx[7]};
  height: ${(props) => props.theme.sizepx[6]};
`;

const CompactWebView = styled(WebView)`
  border-radius: ${(props) => props.theme.sizepx[1]};
  width: ${(props) => props.theme.sizepx[7]};
  height: ${(props) => props.theme.sizepx[6]};
`;

const Item = styled.View`
  padding: ${(props) => props.theme.space[3]};
  max-width: ${(props) => props.theme.sizepx[7]};
  align-items: center;
`;

const isAndroid = Platform.OS === "android";

export const RestaurantCompactInfo = ({ restaurant, isMap }) => {
  const Image = isAndroid && isMap ? CompactWebView : CompactImage;
  return (
    <Item>
      <Image source={{ uri: restaurant.photos[0] }} />
      <Text variant="caption" numberOfLines={3}>
        {restaurant.name}
      </Text>
    </Item>
  );
};
