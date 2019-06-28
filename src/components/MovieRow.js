// @flow
import React from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native";
export class MovieRow extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    height: "44",
    width: "100%"
  }
});
