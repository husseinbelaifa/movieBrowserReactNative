// @flow
import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";

const MovieRow = props => {
  return (
    <View style={styles.container}>
      <Image style={styles.photos} />

      <Text>{props.item.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default MovieRow;
