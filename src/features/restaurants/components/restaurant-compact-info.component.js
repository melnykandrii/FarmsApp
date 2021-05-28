import React from "react";
import styled from "styled-components/native";
import { Platform } from "react-native";
import { WebView } from "react-native-webview";
import { Text } from "../../../components/typography/text.component";

const CompactImage = styled.Image`
border-radius: 10px
width: 120px;
height: 100px;
`;

const CompactWebView = styled(WebView)`
  border-radius: 10px;
  overflow: hidden;
  width: 120px;
  height: 100px;
`;

const Item = styled.View`
  padding: 10px;
  max-width: 120px;
  align-items: center;
`;

const isAndroid = Platform.OS === "android";

export const RestaurantCompactInfo = ({ restaurant }) => {
  const Image = isAndroid ? CompactWebView : CompactImage;
  return (
    <Item>
      <Image source={{ uri: restaurant.photos[0] }} />
      <Text center variant="caption" numberOfLines={3}>
        {restaurant.name}
      </Text>
    </Item>
  );
};
