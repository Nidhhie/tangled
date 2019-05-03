import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import EditNameScreen from '../screens/EditNameScreen';

export const ScreenNames = {
    Login: {key: 'Login', value: LoginScreen},
    Home: {key:'Home',value: HomeScreen},
    Profile: {key: 'Profile', value: ProfileScreen},
    EditName: {key:'EditName',value: EditNameScreen}
};

const data = {};
Object.values(ScreenNames).forEach((s) => {
    data[s.key] = s.value;
});

const config = {
    navigationOptions: {}
};

const AppNavigator = createStackNavigator(data, config);
export default createAppContainer(AppNavigator);