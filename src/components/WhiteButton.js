import React from 'react';
import {TouchableOpacity,Text,StyleSheet,Image} from 'react-native';
import Colors from '../Constants/Colors';
import Images from '../Constants/Images';
import Heading from './Heading';

const WhiteButton = ({title,onPress}) => {
return(
    <TouchableOpacity onPress={onPress} style={styles.button}>
        <Image source={Images.playIcon} style={{height:30,width:20}} resizeMode="contain"/>
        <Heading> {title} </Heading>
    </TouchableOpacity>
)
};

const styles = StyleSheet.create({
    button:{
        backgroundColor:Colors.white,
        flexDirection:'row',
        alignItems:'center',
        height:42,
        borderRadius:5,
        alignSelf:'center',
        paddingHorizontal:5,
        marginVertical:8

    }
})
export default WhiteButton;