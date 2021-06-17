import React from "react";
import { Icon } from "react-native-elements";
import { Text } from "../typography/text.component";
import { Spacer } from "../spacer/spacer.component";
import { theme } from "../../infrastructure/theme";
import { ErrorView } from "./error.screen.style";

export const ErrorScreen = (props) => {
  return (
    <ErrorView>
      <Icon
        name="exclamation-triangle"
        type="font-awesome-5"
        color={theme.colors.ui.error}
      />
      <Spacer size="large">
        <Text variant="body">{props.text}</Text>
      </Spacer>
    </ErrorView>
  );
};
