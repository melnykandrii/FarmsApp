import React from "react";
import { Icon } from "react-native-elements";
import { Text } from "../typography/text.component";
import { Spacer } from "../spacer/spacer.component";
import { theme } from "../../infrastructure/theme";
import { EmptyView } from "./empty.screen.styles";
import { EmptyIcon } from "./empty.screen.styles";

export const EmptyScreen = (props) => {
  return (
    <EmptyView>
      <Icon
        name="exclamation-triangle"
        type="font-awesome-5"
        color={props.color || theme.colors.brand.spring}
      />
      <Spacer size="large">
        <Text variant="body">{props.text}</Text>
      </Spacer>
    </EmptyView>
  );
};

export const EmptyStateScreen = (props) => {
  return (
    <EmptyView>
      <EmptyIcon {...props} icon={props.icon} />
      <Spacer size="large">
        <Text variant="emptyBody">{props.label}</Text>
        <Text variant="emptyDescription">{props.description}</Text>
      </Spacer>
    </EmptyView>
  );
};
