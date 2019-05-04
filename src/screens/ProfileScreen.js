import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Colors from '../Constants/Colors';
import NameCard from "../components/NameCard";
import {customNavigationOptions} from "../navigation/navigationOptions";
import {connect} from 'react-redux';
import User from "../Constants/User";
import {bindActionCreators} from "redux";
import {saveUser} from "../redux/actions";

class ProfileScreen extends React.Component {
    static navigationOptions = ({navigation}) => (customNavigationOptions({
        navigation,
        title: "Edit Personal Details"
    }));

    constructor(props) {
        super(props);
        const {firstName, lastName} = this.props.user;
        this.state = {
            user: {
                firstName, lastName
            }
        };
    }

    logout = async () => {
        this.props.saveUser(null);
        this.props.navigation.navigate('Login');
    };

    onPressEditButton = (nameDetails) => {
        this.props.navigation.navigate('EditName',{nameDetails})
    };

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.user !== prevState.user) {
            return {user: nextProps.user};
        } else return null;
    }

    render() {
        const {user} = this.state;
        return (
            <View style={styles.container}>
                <View style={{flex: 0.4}}>
                    {
                       User.map((item,index)=> <NameCard
                                  key={index}
                                  onPressEditButton={() => this.onPressEditButton({...item, value: user[item.name]})}
                                  details={{...item, value: user[item.name]}}
                        />
                       )}
                </View>
                <TouchableOpacity onPress={this.logout} style={{flex: 0.5, alignItems: 'center'}}>
                    <Text style={{color: 'red'}}> Logout </Text>
                </TouchableOpacity>
                <View style={{flex: 0.1, alignItems: 'center'}}>
                    <Text style={{color: Colors.textGrey}}> Demo App </Text>
                    <Text style={{color: Colors.textGrey}}> v1.02 </Text>
                </View>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {backgroundColor: Colors.grey, flex: 1}
});


function mapDispatchToProps(dispatch) {
    return bindActionCreators({saveUser}, dispatch)
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(ProfileScreen);