import React from 'react';
import {Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Colors from '../Constants/Colors';
import TangledText from './TangledText';
import PropTypes from "prop-types";

const Footer = ({title, onPress, icon}) => (
    <TouchableOpacity onPress={onPress} style={styles.footer}>
        <TangledText bold color={Colors.white}>
            {title}
        </TangledText>
        {icon ? <Image source={icon} style={{height: 15}} resizeMode={'contain'}/> : null}
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    footer: {
        backgroundColor: Colors.black,
        width: '100%',
        height: 55,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    }
});

Footer.propTypes = {
    title: PropTypes.string,
    icon: PropTypes.func,
    onPress: PropTypes.func
};


export default Footer;