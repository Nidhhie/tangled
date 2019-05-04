import React from 'react';
import {Ionicons} from '@expo/vector-icons';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import {saveUser} from "../redux/actions";
import Gen from "../Utils/Gen";
import {KeyboardAvoidingView, StyleSheet, View} from "react-native";
import Colors from "../Constants/Colors";
import Footer from "../components/Footer";
import FloatingLabelInput from "../components/FloatingLabelInput";
import Heading from "../components/Heading";

class EditNameScreen extends React.Component{
    static navigationOptions = {
        header:null
    };

    constructor(props) {
        super(props);
        this.nameDetails = this.props.navigation.state.params.nameDetails;
        this.state = {
            name: this.nameDetails.value
        }
    };

    handleTextChange = (value) => this.setState({name:value});

    onSave = async ()=>{
      const {name} = this.state;
      if(!name){
          alert('please enter your name');
      }
      else{
          this.props.saveUser({...this.props.user,[this.nameDetails.name] : name});
          alert('name updated successfully');
      }
    };

    render(){
        const {name} = this.state;
        const {label} = this.nameDetails;
        return(
            <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
                <View style={styles.container}>
                    <Ionicons onPress={()=>this.props.navigation.goBack()} name={'ios-close'} color={Colors.textGrey} size={36}/>
                    <Heading size={18}>
                        Update your Name
                    </Heading>
                        <FloatingLabelInput
                            label={label}
                            value={name}
                            onChangeText={this.handleTextChange}
                        />
                </View>
                <Footer onPress={this.onSave} title={"Save"}/>
            </KeyboardAvoidingView>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({saveUser}, dispatch)
}
const mapStateToProps = (state) => {
    return {
        user: state.user,
    };
};

const styles = StyleSheet.create({
    container: {flex: 1, paddingHorizontal: 25, paddingVertical: 35, height: '100%'}
});


export default connect(mapStateToProps,mapDispatchToProps)(EditNameScreen)