import React from 'react';
import {createAppContainer, createStackNavigator, createSwitchNavigator} from 'react-navigation';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import EditNameScreen from '../screens/EditNameScreen';
import {Image, TouchableOpacity} from "react-native";
import Images from "../Constants/Images";
import Gen from "../Utils/Gen";
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


export const customNavigationOptions = ({navigation, title}) => ({
    headerLeft: (<TouchableOpacity onPress={() => navigation.goBack()}>
        <Image source={Images.backButton} resizeMode={'contain'} style={{height: 20, width: 20, marginLeft: 6}}/>
    </TouchableOpacity>),
    title: title,
    headerTitleStyle: {textAlign: 'center', alignSelf: 'center'},
});


export default createAppContainer(createRootNavigator);
