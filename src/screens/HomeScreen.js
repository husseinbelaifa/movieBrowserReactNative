import React from "react";
import { View, Text } from "react-native";

export class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>HomeScreen</Text>
      </View>
    );
  }
}

export default HomeScreen;
