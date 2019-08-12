import React from "react";
import {
  createBottomTabNavigator,
  createAppContainer,
  createStackNavigator
} from "react-navigation";
import { Icon } from "native-base";
import Signup from "./Screens/signup";
import Home from "./Screens/home";
import Login from './Screens/login';
import ChatHome from "./Screens/ChatComponent/chatHome"
const AppNavigator = createStackNavigator(
  {

    Home: {
      screen: Home,
      navigationOptions: {
        tabBarLabel: "Home",
        // color:"#1A5CAD",
        //tabBarActiveTintColor
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-home" size={20} style={{ color: "white" }} />
        )
      }
    },
    Signup: {
      screen: Signup,
      navigationOptions: {
        tabBarLabel: "Membership",
        title: 'Sign Up',
        // color:"#1A5CAD",
        //tabBarActiveTintColor
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-home" size={20} style={{ color: "white" }} />
        )
      }
    },
    Login: {
      screen: Login,
      navigationOptions: {
        // tabBarLabel: "Membership",
        // title: 'Sign In',
        // // color:"#1A5CAD",
        // //tabBarActiveTintColor
        tabBarIcon: ({ tintColor }) => (
          <Icon name="home" size={20} style={{ color: "black" }} />
        )
      }
    },
    ChatHome: {
      screen: ChatHome,
      navigationOptions: {
        // tabBarLabel: "Membership",
        // title: 'Sign In',
        // // color:"#1A5CAD",
        // //tabBarActiveTintColor
        tabBarIcon: ({ tintColor }) => (
          <Icon name="home" size={20} style={{ color: "black" }} />
        )
      }
    },

  },
  {
    // tabBarOptions: {
    //   activeTintColor: "white",
    //   inactiveTintColor: 'white',
    //   style: {
    //     backgroundColor: 'red',
    //   },
    // },

    initialRouteName: "ChatHome"
  }
);

export default createAppContainer(AppNavigator);
