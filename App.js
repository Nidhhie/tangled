import React from 'react';
import { Image, Text, View } from 'react-native';
import { Asset, AppLoading } from 'expo';
import LoginScreen from './src/screens/LoginScreen';
import AppNavigator from './src/navigation/AppNavigator';
import rootReducer from './src/redux/rootReducer'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

const store = createStore(rootReducer)

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
      <Provider store={store}>
      <AppNavigator/>
      </Provider>
    );
  }

  async _cacheResourcesAsync() {
    return new Promise(function(resolve, reject){
			setTimeout(function(){
				resolve();
      }, 200)})
     
  }
}