// @flow
import React from "react";

import { FlatList, TouchableOpacity, View, StyleSheet } from "react-native";

export class MovieListView extends React.Component {
  render() {
    return (
      <FlatList
        style={styles.container}
        data={this.props.data}
        keyExtractor={(item, index) => item.id.toString()}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
