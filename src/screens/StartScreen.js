import React from 'react';
import {View} from 'react-native';
import Gen from "../Utils/Gen";
import {connect} from 'react-redux'

 class StartScreen extends React.Component{
    async componentDidMount() {
        const {user} = this.props;
        debugger
        this.props.navigation.navigate(user ? 'App' : 'Login');
    }

    render(){
        return(
            <View/>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
    };
};

export default connect(mapStateToProps)(StartScreen);
