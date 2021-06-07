import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { Camera } from "expo-camera";
import styled from "styled-components/native";
import { Text } from "../../../components/typography/text.component";
import { EmptyView } from "../../../components/empty-screens/empty-screen.styles";
import { Icon } from "react-native-elements";
import { Spacer } from "../../../components/spacer/spacer.component";

const CameraProfile = styled(Camera)`
  flex: 1;
`;

export const CameraScreen = () => {
  const cameraRef = useRef();
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.front);
  const [flashMode, setFlashMode] = useState(Camera.Constants.FlashMode.off);
  /*
  snap = async () => {
    if (this.camera) {
      let photo = await this.camera.takePictureAsync();
    }
*/
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
    <CameraProfile ref={(camera) => (cameraRef.current = camera)} type={type}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            setType(
              type === Camera.Constants.Type.front
                ? Camera.Constants.Type.back
                : Camera.Constants.Type.front
            );
          }}
        >
          <Text style={styles.text}> Flip </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            setFlashMode(
              flashMode === Camera.Constants.FlashMode.off
                ? Camera.Constants.FlashMode.torch
                : Camera.Constants.Type.off
            );
          }}
        >
          <Text style={styles.text}> Flash </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => null}>
          <Text style={styles.text}> Photo </Text>
        </TouchableOpacity>
      </View>
    </CameraProfile>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: "transparent",
    flexDirection: "row",
    margin: 20,
  },
  button: {
    flex: 0.2,
    alignSelf: "flex-end",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    color: "white",
  },
});
