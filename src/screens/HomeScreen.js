import React from 'react';
import { Text, View, ImageBackground, Image } from 'react-native';
import Images from '../Constants/Images';
import Gen from '../Utils/Gen';
import { LinearGradient } from 'expo';

const { height, width } = Gen.getDimensions();
export default class HomeScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <ImageBackground source={Images.tangled} style={{height:height/2.2,width}}>
                    <LinearGradient style={{height:height/2.2}}
                  colors={[ 'transparent','transparent','transparent','black']}
                    />
                </ImageBackground>
            </View>
        )
    }
}