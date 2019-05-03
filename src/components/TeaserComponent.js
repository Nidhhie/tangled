import React from 'react';
import { Image, StyleSheet, View, Text,Platform } from 'react-native';
import Gen from '../Utils/Gen';
import Colors from '../Constants/Colors';
import Heading from './Heading';
import Images from '../Constants/Images';

const { height, width } = Gen.getDimensions();

const TeaserComponent = ({ teaser }) => {
    const { index, title, details, image } = teaser;
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={{ color: Colors.white, opacity: Platform.OS === 'ios'? 0.8 : 0.4 }}> TEASER {index+1}</Text>
            </View>
            <Image source={image} style={styles.teaserImage} />
            <View style={styles.footer}>
                <View style={{ flex: 0.7 }}>
                <Heading size={18}>
                    {title}
                </Heading>
                <Text>  {details}</Text>
                </View>
                <View style={{ flex: 0.3,alignItems:'flex-end',justifyContent:'center' }}>
                <Image source={Images.playIcon}
                resizeMode={'contain'}
                 style={styles.playIcon} />       
                </View>
            </View>
        </View>
    )
};
const styles = StyleSheet.create({
    container: { backgroundColor: Colors.white },
    header: { backgroundColor: Colors.black, height: 40, justifyContent: 'center' },
    footer: { backgroundColor: Colors.white, height: 60, justifyContent: 'center',flexDirection:'row',paddingHorizontal:6 },
    teaserImage: { height: height / 3, width },
    playIcon: { height:40, width:40 }

});

export default TeaserComponent;