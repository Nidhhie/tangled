import React from 'react';
import Gen from "../Utils/Gen";
import {bindActionCreators} from "redux";
import {saveUser} from '../redux/actions';
import {connect} from 'react-redux';
import {KeyboardAvoidingView, StyleSheet, View} from "react-native";
import Images from "../Constants/Images";
import FloatingLabelInput from "../components/FloatingLabelInput";
import Heading from "../components/Heading";
import Footer from "../components/Footer";
import User from "../Constants/User";

class LoginScreen extends React.Component {
    static navigationOptions = {
        header: null
    };

    constructor(props) {
        super(props);
        this.state = {
            user: {firstName: "", lastName: ""}
        };
    };

    handleTextChange = (value, name) => this.setState(prevState => ({
        user: {...prevState.user,[name]:value}
    }));

    onContinue = () => {
        let {user} = this.state;
        if (Object.keys(user).length === 0) {
            alert('please enter your name');
            return
        }
        this.props.saveUser(user);
        this.props.navigation.navigate('Home')
    };

    render() {
        const {user} = this.state;
        return (
            <KeyboardAvoidingView style={{flex: 1}} behavior="padding">
                <View style={styles.container}>
                    <Heading size={18}>
                        Hey, What should we call you?
                    </Heading>
                    {User.map((item)=> <FloatingLabelInput
                        label={item.label}
                        value={user[item.name]}
                        onChangeText={(value) => this.handleTextChange(value, item.name)}
                    />)}
                </View>
                <Footer onPress={this.onContinue} title={"Continue"} icon={Images.forwardArrow}/>
            </KeyboardAvoidingView>
        )
    }
}


const styles = StyleSheet.create({
    container: {flex: 1, paddingHorizontal: 25, paddingVertical: 35, height: '100%'}
});

function mapDispatchToProps(dispatch) {
    return bindActionCreators({saveUser}, dispatch)
}

export default connect(null, mapDispatchToProps)(LoginScreen);