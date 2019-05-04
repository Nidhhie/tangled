import React from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import Colors from '../Constants/Colors';
import Images from '../Constants/Images';
import TangledText from './TangledText';
import PropTypes from "prop-types";

const WhiteButton = ({title, onPress}) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.button}>
            <Image source={Images.playIcon} style={{height: 30, width: 20}} resizeMode="contain"/>
            <TangledText bold> {title} </TangledText>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: Colors.white,
        flexDirection: 'row',
        alignItems: 'center',
        height: 42,
        borderRadius: 5,
        alignSelf: 'center',
        paddingHorizontal: 5,
        marginVertical: 8

    }
});
WhiteButton.propTypes = {
    title: PropTypes.string.isRequired,
    onPress: PropTypes.func

};
export default WhiteButton;