import React from 'react';
import {createAppContainer, createStackNavigator, createSwitchNavigator} from 'react-navigation';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import EditNameScreen from '../screens/EditNameScreen';
import StartScreen from "../screens/StartScreen";

export const ScreenNames = {
    Home: {key: 'Home', value: HomeScreen},
    Profile: {key: 'Profile', value: ProfileScreen},
    EditName: {key: 'EditName', value: EditNameScreen}
};

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
            screen: StartScreen
        },
        App: {
            screen: AppNavigator
        },
        Login: {
            screen: LoginScreen
        }
    },
    {
        initialRouteName: "Start"
    }
);




export default createAppContainer(createRootNavigator);
