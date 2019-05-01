import React from 'react';
import FloatingLabelInput from '../components/FloatingLabelInput';
import { View, StyleSheet, KeyboardAvoidingView } from 'react-native';
import Heading from '../components/Heading';
import Footer from '../components/Footer';

export default class LoginScreen extends React.Component {
    static navigationOptions = {
        header: null
    }
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: ""
        };
        this.loginInputs = [
            {
                name: 'firstName',
                label: "First Name",
                onChange: this.handleTextChange
            },
            {
                name: 'lastName',
                label: "Last Name",
                onChange: this.handleTextChange
            }
        ]
    };
    handleTextChange = (value, name) => this.setState({ name: value });

    onContinue = () => this.props.navigation.navigate('Home')

    render() {
        return (
            <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
                <View style={styles.container}>
                    <Heading size={18}>
                        Hey, What should we call you?
                </Heading>
                    {this.loginInputs.map((eachInput, index) => (
                        <FloatingLabelInput
                            key={index}
                            label={eachInput.label}
                            value={this.state[eachInput.name]}
                            onChangeText={(value) => this.handleTextChange(value, eachInput.name)}
                        />))}
                </View>
                <Footer onPress={this.onContinue} title={'Continue'} />
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    container: { flex: 1, paddingHorizontal: 25, paddingVertical: 35, height: '100%' }
})
