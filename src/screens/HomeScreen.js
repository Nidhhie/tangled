import React from 'react';
import { Text, View, ImageBackground, Image, ScrollView, StyleSheet } from 'react-native';
import Images from '../Constants/Images';
import Gen from '../Utils/Gen';
import { LinearGradient } from 'expo';
import TeaserComponent from '../components/TeaserComponent';
import WhiteButton from '../components/WhiteButton';
import Colors from '../Constants/Colors';
import Heading from '../components/Heading';

const { height, width } = Gen.getDimensions();
export default class HomeScreen extends React.Component {
    static navigationOptions = {
        header: null
    }

    constructor(props) {
        super(props);

        this.teasers = [
            {
                title: "Tangled - I See the Light (HD)",
                image: Images.teaser1,
                details: "Archiebuild  •  6m+ Views  •  7 years ago",
                //TODO replace details with type,views and years attrs
            },
            {
                title: "Tangled - I See the Light (HD)",
                image: Images.teaser2,
                details: "Archiebuild  •  6m+ Views  •  7 years ago",
            }
        ]
    }

    onPressTrailerButton = () => {
        this.props.navigation.navigate('Profile')
    }

    render() {
        return (
            <ScrollView style={{ flex: 1 }}>
                <ImageBackground source={Images.tangled} style={styles.tangledImage}>
                    <LinearGradient style={{ height: height / 2.2 }}
                        colors={['transparent', 'transparent', 'transparent', 'black']}>
                        <View style={{ flex: 0.1, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ color: Colors.white }}> Pull to refresh </Text>
                        </View>
                        <View style={{ flex: 0.9, justifyContent: 'flex-end', alignItems: 'center' }}>
                            <Heading color={Colors.white} size={24}>
                                Tangled
                        </Heading>
                        <Text style={{ color: Colors.white,opacity:0.5 }}> 
                        2010   •    7+   •   1h 40m
                         </Text>
                            <WhiteButton 
                            onPress={this.onPressTrailerButton}
                            title={"Watch Trailer"}
                             />
                        </View>
                    </LinearGradient>
                </ImageBackground>
                {
                    this.teasers.map((teaser, index) => (
                        <TeaserComponent
                            key={index}
                            teaser={{ ...teaser, index }}
                        />
                    ))
                }
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    tangledImage: {
        height: height / 2.2,
        width
    }
})