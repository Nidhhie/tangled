import React from 'react';
import {createAppContainer, createStackNavigator, createSwitchNavigator} from 'react-navigation';
import LoginScreen from '../screens/LoginScreen';
import StartScreen from "../screens/StartScreen";
import {ScreenNames} from "./ScreenNames";

const data = {};
Object.values(ScreenNames).forEach((s) => {
    data[s.key] = s.value;
});

const config = {
    navigationOptions: {}
};

const AppNavigator = createStackNavigator(data, config);

const createRootNavigator = createSwitchNavigator(
    {
        Start: {
            screen: StartScreen  //initial route
        },
        App: {
            screen: AppNavigator //logged in routes in here
        },
        Login: {
            screen: LoginScreen //logged out/first time user route
        }
    },
    {
        initialRouteName: "Start"
    }
);




export default createAppContainer(createRootNavigator);
