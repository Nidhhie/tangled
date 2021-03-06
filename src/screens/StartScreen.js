import React from 'react';
import {View} from 'react-native';
import Gen from "../Utils/Gen";
import {connect} from 'react-redux'

class StartScreen extends React.Component {
    async componentDidMount() {
        const {user} = this.props;
        this.props.navigation.navigate(user ? 'App' : 'Login');
    }

    render() {
        // can add a spinner or splash screen like image here if lag is visible
        return (
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
