import React from 'react';
import {Image, StyleSheet, View, Text, Platform} from 'react-native';
import Gen from '../Utils/Gen';
import Colors from '../Constants/Colors';
import TangledText from './TangledText';
import Images from '../Constants/Images';
import PropTypes from "prop-types";

const {height, width} = Gen.getDimensions();

const TeaserComponent = ({teaser}) => {
    const {index, title, details, image} = teaser;
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TangledText style={{
                    color: Colors.white,
                    opacity: Platform.OS === 'ios' ? 0.8 : 0.4
                }}> TEASER {index + 1}</TangledText>
            </View>
            <Image source={image} style={styles.teaserImage}/>
            <View style={styles.footer}>
                <View style={{flex: 0.8}}>
                    <TangledText gutterbottom={Platform.OS === 'ios' ? 4 : 0} bold>
                        {title}
                    </TangledText>
                    <TangledText size={14} color={Colors.textGrey}>{details}</TangledText>
                </View>
                <View style={{flex: 0.2, alignItems: 'flex-end', justifyContent: 'center'}}>
                    <Image source={Images.playIcon}
                           resizeMode={'contain'}
                           style={styles.playIcon}
                    />
                </View>
            </View>
        </View>
    )
};
const styles = StyleSheet.create({
    container: {backgroundColor: Colors.white},
    header: {backgroundColor: Colors.black, paddingVertical: 10, justifyContent: 'center'},
    footer: {
        backgroundColor: Colors.white,
        paddingVertical: 14,
        justifyContent: 'center',
        flexDirection: 'row',
        paddingHorizontal: 6
    },
    teaserImage: {height: height / 3, width},
    playIcon: {height: 35, width: 35}

});

TeaserComponent.propTypes = {
    teaser: PropTypes.object.isRequired
};

export default TeaserComponent;