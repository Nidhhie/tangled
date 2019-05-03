import React from 'react';
import {View,StyleSheet,Text} from 'react-native';
import Colors from '../Constants/Colors';
import NameCard from "../components/NameCard";
import {customNavigationOptions} from "../navigation/AppNavigator";

export default class ProfileScreen extends React.Component {
    static navigationOptions = ({navigation}) => (customNavigationOptions({navigation,title:"Edit Personal Details"}));

    constructor(props) {
        super(props);

        this.nameDetails = [
            {
                title: 'First Name',
                option: 'Edit',
                name: 'Priya'
            },
            {
                title: 'Last Name',
                option: 'Edit',
                name: 'Abc'
            }
        ]
    }


    render() {
        return (
            <View style={styles.container}>
                <View style={{flex:0.4}}>
                {this.nameDetails.map((eachName, index) => <NameCard key={index} details={eachName}/>)}
                </View>
                <View style={{flex:0.5,alignItems: 'center'}}>
                    <Text style={{color:'red'}}> Logout </Text>
                </View>
                <View style={{flex:0.1,alignItems: 'center'}}>
                    <Text style={{color:Colors.textGrey}}> Demo App </Text>
                    <Text style={{color:Colors.textGrey}}> v1.02 </Text>
                </View>
                </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {backgroundColor: Colors.grey, flex: 1}
});
