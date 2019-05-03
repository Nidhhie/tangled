import React from 'react';
import {Text,StyleSheet,TouchableOpacity} from 'react-native';
import Colors from '../Constants/Colors';
import Heading from './Heading';

const Footer = ({title,onPress}) => (
<TouchableOpacity onPress={onPress} style={styles.footer}>
    <Heading color={Colors.white}>
        {title}
    </Heading>
</TouchableOpacity>
);

const styles = StyleSheet.create({
    footer: {
        backgroundColor: Colors.black,
        width:'100%',
        height:40,
        justifyContent:'center',
        alignItems:'center'
     }
});


export default Footer;