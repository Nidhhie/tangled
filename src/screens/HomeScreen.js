import React from 'react';
import { Text, View, ImageBackground, Image,ScrollView } from 'react-native';
import Images from '../Constants/Images';
import Gen from '../Utils/Gen';
import { LinearGradient } from 'expo';
import TeaserComponent from '../components/TeaserComponent';

const { height, width } = Gen.getDimensions();
export default class HomeScreen extends React.Component {
 constructor(props){
     super(props);

     this.teasers= [
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

    render() {
        return (
            <ScrollView style={{ flex: 1 }}>
                <ImageBackground source={Images.tangled} style={{height:height/2.2,width}}>
                    <LinearGradient style={{height:height/2.2}}
                  colors={[ 'transparent','transparent','transparent','black']}
                    />
                </ImageBackground>
                {
                    this.teasers.map((teaser,index)=> (
                        <TeaserComponent
                         key={index}
                         teaser={{...teaser,index}}
                        />
                    ))
                }
            </ScrollView>
        )
    }
}