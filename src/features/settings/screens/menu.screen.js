import React, { useContext, useState, useCallback } from "react";
import { TouchableOpacity } from "react-native";
import { List } from "react-native-paper";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
import { CloseIcon } from "../../../components/utils/close-screen.button.component";
import {
  MenuContainer,
  TopButtonsContainer,
  TopContainer,
  AvatarContainer,
  AvatarIcon,
  VersionContainer,
  AvatarPhoto,
  MenuBackground,
  MenuCover,
} from "../styles/menu.styles";
import { MenuItem } from "../components/menu.components";
import { ScreenButton } from "../../../components/buttons/screen-button.component";

export const MenuScreen = ({ navigation }) => {
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
    <MenuBackground>
      <MenuCover />
      <TopContainer>
        <TopButtonsContainer>
          <CloseIcon onClose={() => navigation.goBack()} />
          <ScreenButton title="Log Out" onNavigate={onLogOut} />
        </TopButtonsContainer>
      </TopContainer>

      <MenuContainer>
        <List.Section>
          <AvatarContainer>
            <TouchableOpacity onPress={() => navigation.navigate("Camera")}>
              {!photo && <AvatarIcon />}
              {photo && <AvatarPhoto source={{ uri: photo }} />}
            </TouchableOpacity>
            <Spacer position="top" size="large">
              <Text variant="label">{user.email}</Text>
            </Spacer>
          </AvatarContainer>
          <MenuItem
            title="Favourites"
            description="View your favourites"
            iconName="heart-multiple-outline"
            onNavigate={() => navigation.navigate("Favourites")}
          />
          <MenuItem
            title="Help"
            description="Any question?"
            iconName="help-circle-outline"
            onNavigate={() => navigation.navigate("About")}
          />
          <MenuItem
            title="About"
            description="More information"
            iconName="information-outline"
            onNavigate={() => navigation.navigate("About")}
          />
        </List.Section>
      </MenuContainer>
      <VersionContainer>
        <Text>fnb/release v.1.0.1</Text>
      </VersionContainer>
    </MenuBackground>
  );
};
