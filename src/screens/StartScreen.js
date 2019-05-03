import React from 'react';
import {View} from 'react-native';
import Gen from "../Utils/Gen";


export default class StartScreen extends React.Component{
    async componentDidMount() {
        const isLoggedIn = await Gen.isUserLogged();
        this.props.navigation.navigate(isLoggedIn ? 'App' : 'Login');
    }

    render(){
        return(
            <View/>
        )
    }
}