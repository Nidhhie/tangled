import React from 'react';
import Images from "../Constants/Images";
import Gen from "../Utils/Gen";
import CustomFormWithFooter from "../components/CustomFormWithFooter";

export default class LoginScreen extends React.Component {
    static navigationOptions = {
        header: null
    };

    constructor(props) {
        super(props);
        this.state = {
            loginInputs: [
                {
                    name: 'firstName',
                    label: "First Name",
                    onChange: this.handleTextChange,
                    value: ""
                },
                {
                    name: 'lastName',
                    label: "Last Name",
                    onChange: this.handleTextChange,
                    value: ""
                }
            ]
        };

    };

    handleTextChange = (value, name) => this.setState(prevState => ({
        loginInputs: prevState.loginInputs.map(
            input => (input.name === name ? {...input, value} : input)
        )
    }));

    onContinue = () => {
        const {loginInputs} = this.state;
        let isEmpty;
        loginInputs.forEach((input)=>{
           if(input.value.length === 0)
               isEmpty = true;
        });

       if(isEmpty){
           alert('please enter your name');
           return
       }
        Gen.login();
        this.props.navigation.navigate('Home')
    };

    render() {
        return (
            <CustomFormWithFooter inputs={this.state.loginInputs}
                                  handleTextChange={this.handleTextChange}
                                  footer={{
                                      onPressFooter: this.onContinue,
                                      title: 'Continue',
                                      icon: Images.forwardArrow
                                  }}
                                  heading={"Hey, What should we call you?"}
            />
        )
    }
}

