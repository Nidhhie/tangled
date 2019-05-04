import React from 'react';
import {Text} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import CustomFormWithFooter from "../components/CustomFormWithFooter";
import Images from "../Constants/Images";
import Colors from "../Constants/Colors";

export default class EditNameScreen extends React.Component{
    static navigationOptions = {
        header:null
    };

    constructor(props) {
        super(props);
        const {name,label,value} = this.props.navigation.state.params.name;
        this.state = {
            editNameInputs: [
                {
                    name,
                    label,
                    onChange: this.handleTextChange,
                    value
                }
            ]
        };

    };

    handleTextChange = (value, name) => this.setState(prevState => ({
        editNameInputs: prevState.editNameInputs.map(
            input => (input.name === name ? {...input, value} : input)
        )
    }));

    onSave = ()=>{

    };

    render(){
        return(
            <CustomFormWithFooter inputs={this.state.editNameInputs}
                                  handleTextChange={this.handleTextChange}
                                  footer={{
                                      onPressFooter: this.onSave,
                                      title: 'Save',
                                  }}
                                  backButton={(<Ionicons onPress={()=>this.props.navigation.goBack()} name={'ios-close'} color={Colors.textGrey} size={36}/>)}
                                  heading={"Update Your Name"}
            />
        )
    }
}