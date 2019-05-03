import React from 'react';
import {Text,StyleSheet,TouchableOpacity,Image} from 'react-native';
import Colors from '../Constants/Colors';
import Heading from './Heading';

const Footer = ({title,onPress,icon}) => (
<TouchableOpacity onPress={onPress} style={styles.footer}>
    <Heading color={Colors.white}>
        {title}
    </Heading>
    {icon && <Image source={icon} style={{height:15}} resizeMode={'contain'}/>}
</TouchableOpacity>
);

const styles = StyleSheet.create({
    footer: {
        backgroundColor: Colors.black,
        width:'100%',
        height:40,
        justifyContent:'center',
        alignItems:'center',
        flexDirection: 'row'
     }
});


export default Footer;