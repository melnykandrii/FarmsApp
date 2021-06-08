import React, { useState, useEffect, useRef, useContext } from "react";
import { View, TouchableOpacity } from "react-native";
import { Camera } from "expo-camera";
import { Text } from "../../../components/typography/text.component";
import { EmptyView } from "../../../components/empty-screens/empty-screen.styles";
import { Icon } from "react-native-elements";
import { Spacer } from "../../../components/spacer/spacer.component";
import {
  CameraButton,
  CameraProfile,
  CameraTypeIcon,
  ButtonContainer,
  FlashIcon,
  SnapIcon,
} from "../components/camera.styles";

import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const CameraScreen = ({ navigation }) => {
  const cameraRef = useRef();
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.front);
  const [flashMode, setFlashMode] = useState(Camera.Constants.FlashMode.off);
  const [autoFocus, setAutoFocus] = useState(Camera.Constants.AutoFocus.off);
  const { user } = useContext(AuthenticationContext);

  const snap = async () => {
    if (cameraRef) {
      const photo = await cameraRef.current.takePictureAsync();
      await AsyncStorage.setItem(`${user.uid}-photo`, photo.uri);
      navigation.goBack();
    }
  };
  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return (
      <EmptyView>
        <Icon name="exclamation-triangle" type="font-awesome-5" />
        <Spacer size="large">
          <Text variant="label">No access to the camera</Text>
        </Spacer>
      </EmptyView>
    );
  }
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          setAutoFocus(
            autoFocus === Camera.Constants.AutoFocus.off
              ? Camera.Constants.AutoFocus.on
              : Camera.Constants.AutoFocus.off
          );
        }}
      >
        <CameraProfile
          ref={(camera) => (cameraRef.current = camera)}
          type={type}
          flashMode={flashMode}
        >
          <ButtonContainer>
            <CameraButton
              onPress={() => {
                setType(
                  type === Camera.Constants.Type.front
                    ? Camera.Constants.Type.back
                    : Camera.Constants.Type.front
                );
              }}
            >
              <CameraTypeIcon />
            </CameraButton>
            <CameraButton onPress={snap}>
              <SnapIcon />
            </CameraButton>
            <CameraButton
              onPress={() => {
                setFlashMode(
                  flashMode === Camera.Constants.FlashMode.off
                    ? Camera.Constants.FlashMode.on
                    : Camera.Constants.FlashMode.off
                );
              }}
            >
              {flashMode === Camera.Constants.FlashMode.off ? (
                <FlashIcon color="white" />
              ) : (
                <FlashIcon color="gold" />
              )}
            </CameraButton>
          </ButtonContainer>
        </CameraProfile>
      </TouchableOpacity>
    </View>
  );
};