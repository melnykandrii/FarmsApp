import React, { useContext, useState, useCallback } from "react";
import { TouchableOpacity } from "react-native";
import { List, Avatar } from "react-native-paper";
import { SafeArea } from "../../../components/utils/safe-area.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import styled from "styled-components/native";
import { theme } from "../../../infrastructure/theme";
import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";

const SettingItem = styled(List.Item)`
  padding: ${(props) => props.theme.space[4]};
`;

const AvatarContainer = styled.View`
  align-items: center;
`;

const AvatarIcon = styled(Avatar.Icon).attrs({
  backgroundColor: theme.colors.brand.spring,
  size: 180,
  icon: "human",
})``;

export const SettingsScreen = ({ navigation }) => {
  const { onLogOut, user } = useContext(AuthenticationContext);
  const [photo, setPhoto] = useState(null);

  const getProfilePicture = async (currentUser) => {
    const photoUri = await AsyncStorage.getItem(`${currentUser.uid}-photo`);
    setPhoto(photoUri);
  };
  useFocusEffect(
    useCallback(() => {
      getProfilePicture(user);
    }, [user])
  );
  return (
    <SafeArea>
      <List.Section>
        <AvatarContainer>
          <TouchableOpacity onPress={() => navigation.navigate("Camera")}>
            {!photo && <AvatarIcon />}
            {photo && (
              <Avatar.Image
                size={180}
                source={{ uri: photo }}
                backgroundColor={theme.colors.brand.spring}
              />
            )}
          </TouchableOpacity>
          <Spacer position="top" size="large">
            <Text variant="label">{user.email}</Text>
          </Spacer>
        </AvatarContainer>
        <SettingItem
          title="Favourites"
          description="View your favourites"
          left={(props) => (
            <List.Icon
              {...props}
              color={theme.colors.brand.spring}
              icon="heart-multiple-outline"
            />
          )}
          onPress={() => navigation.navigate("Favourites")}
        />
        <SettingItem
          title="About"
          description="More information"
          left={(props) => (
            <List.Icon
              {...props}
              color={theme.colors.brand.spring}
              icon="information-outline"
            />
          )}
          onPress={() => navigation.navigate("About")}
        />
        <SettingItem
          title="Log Out"
          left={(props) => (
            <List.Icon
              {...props}
              color={theme.colors.brand.spring}
              icon="exit-run"
            />
          )}
          onPress={onLogOut}
        />
      </List.Section>
    </SafeArea>
  );
};
