import React from 'react';
import { Image, Text, View } from 'react-native';
import { Asset, AppLoading } from 'expo';
import LoginScreen from './src/screens/LoginScreen';
import AppNavigator from './src/navigation/AppNavigator';

export default class App extends React.Component {
  state = {
    isReady: false,
  };

  render() {
    if (!this.state.isReady) {
      return (
        <AppLoading
          startAsync={this._cacheResourcesAsync}
          onFinish={() => this.setState({ isReady: true })}
          onError={console.warn}
        />
      );
    }

    return (
      <AppNavigator/>
    );
  }

  async _cacheResourcesAsync() {
    return new Promise(function(resolve, reject){
			setTimeout(function(){
				resolve();
      }, 200)})
     
  }
}