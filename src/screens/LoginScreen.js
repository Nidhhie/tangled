import React from 'react';
import {bindActionCreators} from "redux";
import {saveUser} from '../redux/actions';
import {connect} from 'react-redux';
import {KeyboardAvoidingView, StyleSheet, View,Text} from "react-native";
import Images from "../Constants/Images";
import FloatingLabelInput from "../components/FloatingLabelInput";
import TangledText from "../components/TangledText";
import Footer from "../components/Footer";
import User from "../Constants/User";
import TermsAndConditionsText from "../components/TermsAndConditionsText";

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
                    <TangledText bold size={18}>
                        Hey, What should we call you?
                    </TangledText>
                    {User.map((item,index)=> <FloatingLabelInput
                        key={index}
                        label={item.label}
                        value={user[item.name]}
                        onChangeText={(value) => this.handleTextChange(value, item.name)}
                    />)}
                    <TermsAndConditionsText/>
                </View>
                <Footer onPress={this.onContinue} title={"Continue"} icon={Images.forwardArrow}/>
            </KeyboardAvoidingView>
        )
    }
}


const styles = StyleSheet.create({
    container: {flex: 1, paddingHorizontal: 25, paddingVertical: 35, height: '100%'},
    underline:{textDecorationLine:'underline'}
});

function mapDispatchToProps(dispatch) {
    return bindActionCreators({saveUser}, dispatch)
}

export default connect(null, mapDispatchToProps)(LoginScreen);