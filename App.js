import React from "react";
import { View, Text, Icon } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer
} from "react-navigation";

import HomeScreen from "./src/screens/HomeScreen";
import FavoritesScreen from "./src/screens/FavoritesScreen";
import MovieDetailScreen from "./src/screens/MovieDetailScreen";

import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";

const homeStack = createStackNavigator(
  {
    Home: HomeScreen,
    MovieDetail: MovieDetailScreen
  },
  {
    initialRouteName: "Home"
  }
);

homeStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }
  return {
    tabBarVisible
  };
};

const favoritesStack = createStackNavigator(
  {
    Favorites: FavoritesScreen,
    MovieDetail: MovieDetailScreen
  },
  {
    initialRouteName: "Favorites"
  }
);

favoritesStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }
  return {
    tabBarVisible
  };
};

const tabNavigator = createMaterialBottomTabNavigator({
  Home: {
    screen: homeStack,
    navigationOptions: {
      tabBarLabel: "Home",
      tabBarIcon: ({ tintColor }) => {
        <View>
          <Icon style={[{ color: tintColor }]} size={25} name={"ios-home"} />
        </View>;
      }
    }
  },
  Favorites: {
    screen: favoritesStack,
    navigationOptions: {
      tabBarLabel: "Favorite",
      tabBarIcon: ({ tintColor }) => {
        <View>
          <Icon
            style={[{ color: tintColor }]}
            size={25}
            name={"ios-favorite"}
          />
        </View>;
      }
    }
  }
});

export default createAppContainer(tabNavigator);
