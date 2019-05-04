import {Image, TouchableOpacity} from "react-native";
import Images from "../Constants/Images";
import React from "react";

export const customNavigationOptions = ({navigation, title}) => ({
    headerLeft: (<TouchableOpacity onPress={() => navigation.goBack()}>
        <Image source={Images.backButton} resizeMode={'contain'} style={{height: 20, width: 20, marginLeft: 6}}/>
    </TouchableOpacity>),
    title: title,
    headerTitleStyle: {textAlign: 'center', alignSelf: 'center'},
});