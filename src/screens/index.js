import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer
} from "react-navigation";

import HomeScreen from "./HomeScreen";
import FavoritesScreen from "./FavoritesScreen";
import MovieDetailScreen from "./MovieDetailScreen";

// const homeStack = createStackNavigator(
//   {
//     Home: HomeScreen,
//     MovieDetail: MovieDetailScreen
//   },
//   {
//     initialRouteName: "Home"
//   }
// );

// homeStack.navigationOptions = ({ navigation }) => {
//   let tabBarVisible = true;
//   if (navigation.state.index > 0) {
//     tabBarVisible = false;
//   }
//   return {
//     tabBarVisible
//   };
// };

// const favoritesStack = createStackNavigator(
//   {
//     Favorites: FavoritesScreen,
//     MovieDetail: MovieDetailScreen
//   },
//   {
//     initialRouteName: "Favorites"
//   }
// );

// favoritesStack.navigationOptions = ({ navigation }) => {
//   let tabBarVisible = true;
//   if (navigation.state.index > 0) {
//     tabBarVisible = false;
//   }
//   return {
//     tabBarVisible
//   };
// };

const tabNavigator = createBottomTabNavigator({
  Home: { screen: HomeScreen },
  Favorites: { screen: FavoritesScreen }
});

export default createAppContainer(tabNavigator);
