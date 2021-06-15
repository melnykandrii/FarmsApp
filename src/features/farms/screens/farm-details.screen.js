import React, { useState } from "react";
import { FarmInfoCard } from "../components/farm-info-card.component";
import { List } from "react-native-paper";
import { SafeArea } from "../../../components/utils/safe-area.component";
import { ScrollView } from "react-native";

export const FarmDetailsScreen = ({ route }) => {
  const [strawberryExpanded, setStrawberryExpanded] = useState(false);
  const [blueberryExpanded, setBlueberryExpanded] = useState(false);
  const [raspberryExpanded, setRaspberryExpanded] = useState(false);
  const [appleExpanded, setAppleExpanded] = useState(false);

  const { farm } = route.params;

  return (
    <SafeArea>
      <FarmInfoCard farm={farm} />
      <ScrollView>
        <List.Accordion
          title="Strawberry"
          left={(props) => <List.Icon {...props} icon="food-variant" />}
          expanded={strawberryExpanded}
          onPress={() => setStrawberryExpanded(!strawberryExpanded)}
        >
          <List.Item title="1lb" />
          <List.Item title="2lb" />
          <List.Item title="3lb" />
          <List.Item title="4lb" />
          <List.Item title="5lb" />
          <List.Item title="10lb" />
          <List.Item title="20lb" />
        </List.Accordion>
        <List.Accordion
          title="Blueberry"
          left={(props) => <List.Icon {...props} icon="food" />}
          expanded={blueberryExpanded}
          onPress={() => setBlueberryExpanded(!blueberryExpanded)}
        >
          <List.Item title="1lb" />
          <List.Item title="2lb" />
          <List.Item title="3lb" />
          <List.Item title="4lb" />
          <List.Item title="5lb" />
          <List.Item title="10lb" />
          <List.Item title="20lb" />
        </List.Accordion>
        <List.Accordion
          title="Raspberry"
          left={(props) => <List.Icon {...props} icon="noodles" />}
          expanded={raspberryExpanded}
          onPress={() => setRaspberryExpanded(!raspberryExpanded)}
        >
          <List.Item title="1lb" />
          <List.Item title="2lb" />
          <List.Item title="3lb" />
          <List.Item title="4lb" />
          <List.Item title="5lb" />
          <List.Item title="10lb" />
          <List.Item title="20lb" />
        </List.Accordion>
        <List.Accordion
          title="Apples"
          left={(props) => <List.Icon {...props} icon="glass-mug-variant" />}
          expanded={appleExpanded}
          onPress={() => setAppleExpanded(!appleExpanded)}
        >
          <List.Item title="Cortland" />
          <List.Item title="Macintosh" />
          <List.Item title="Golden Apple" />
          <List.Item title="Gala" />
        </List.Accordion>
      </ScrollView>
    </SafeArea>
  );
};
