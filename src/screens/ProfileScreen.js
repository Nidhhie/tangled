import React from 'react';
import {View,StyleSheet,Text,TouchableOpacity} from 'react-native';
import Colors from '../Constants/Colors';
import NameCard from "../components/NameCard";
import {customNavigationOptions} from "../navigation/navigationOptions";
import Gen from "../Utils/Gen";

export default class ProfileScreen extends React.Component {
    static navigationOptions = ({navigation}) => (customNavigationOptions({navigation,title:"Edit Personal Details"}));

    constructor(props) {
        super(props);

        this.nameDetails = [
            {
                label: 'First Name',
                name:'firstName',
                option: 'Edit',
                value: 'Priya'
            },
            {
                label: 'Last Name',
                name:'lastName',
                option: 'Edit',
                value: 'Abc'
            }
        ]
    }

    logout = async() => {
       await Gen.logout();
       this.props.navigation.navigate('Login');
    };

    onPressEditButton = (name) => {
           this.props.navigation.navigate('EditName',{name})
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={{flex:0.4}}>
                {this.nameDetails.map((eachName, index) => <NameCard key={index} onPressEditButton={()=>this.onPressEditButton(eachName)} details={eachName}/>)}
                </View>
                <TouchableOpacity onPress={this.logout} style={{flex:0.5,alignItems: 'center'}}>
                    <Text style={{color:'red'}}> Logout </Text>
                </TouchableOpacity>
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
