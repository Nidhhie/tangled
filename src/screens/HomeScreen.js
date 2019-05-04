import React from 'react';
import {
    Text,
    View,
    ImageBackground,
    Image,
    ScrollView,
    StyleSheet,
    RefreshControl,
    Platform,
    StatusBar,
    KeyboardAvoidingView
} from 'react-native';
import Images from '../Constants/Images';
import Gen from '../Utils/Gen';
import { LinearGradient } from 'expo';
import TeaserComponent from '../components/TeaserComponent';
import WhiteButton from '../components/WhiteButton';
import Colors from '../Constants/Colors';
import TangledText from '../components/TangledText';
import {SafeAreaView} from "react-navigation";

const { height, width } = Gen.getDimensions();
export default class HomeScreen extends React.Component {
    static navigationOptions = {
        header: null
    };

    constructor(props) {
        super(props);
      this.state={

      };
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
    };

    _onRefresh = () => {
        this.setState({refreshing: true});
        setTimeout(()=>this.setState({refreshing: false}),1000)
    };

    render() {
        return (
            <ScrollView
                refreshControl={
                    <RefreshControl
                       refreshing={this.state.refreshing}
                        onRefresh={this._onRefresh}
                    />
                }
                style={{ flex: 1 }}>
                <SafeAreaView style={{flex:1}}>
                    <StatusBar/>
                <ImageBackground source={Images.tangled} style={styles.tangledImage}>
                    <LinearGradient style={{ height: height / 1.8 }}
                        colors={['transparent', 'transparent', 'transparent', 'black']}>
                        <View style={{ flex: 0.1, justifyContent: 'center', alignItems: 'center' }}>
                            <TangledText style={{ color: Colors.white }}> Pull to refresh </TangledText>
                        </View>
                        <View style={{ flex: 0.9, justifyContent: 'flex-end', alignItems: 'center' }}>
                            <TangledText bold color={Colors.white} size={24}>
                                Tangled
                        </TangledText>
                        <TangledText style={{ color: Colors.white,opacity: Platform.OS === 'ios'? 0.8 : 0.5 }}>
                        2010   •    7+   •   1h 40m
                         </TangledText>
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
                </SafeAreaView>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    tangledImage: {
        height: height / 1.8,
        width
    }
})