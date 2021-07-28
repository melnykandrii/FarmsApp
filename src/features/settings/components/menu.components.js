import React from "react";
import { TouchableOpacity } from "react-native";
import { Item, ListIcon } from "../styles/menu-component.styles";
import { Text } from "../../../components/typography/text.component";

export const MenuItem = (props) => {
  return (
    <Item
      {...props}
      title={props.title}
      description={props.description}
      left={() => <ListIcon {...props} icon={props.iconName} />}
      onPress={props.onNavigate}
    />
  );
};

export const LogOut = (props) => {
  return (
    <TouchableOpacity onPress={props.onLogOut}>
      <Text variant="button">Log Out</Text>
    </TouchableOpacity>
  );
};
