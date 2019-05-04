import React from 'react';
import {AppLoading, Font} from 'expo';
import AppNavigator from './src/navigation/AppNavigator';
import {Provider} from 'react-redux'
import {store} from './src/redux/store';
import {StatusBar} from "react-native";

//entry point

export default class App extends React.Component {
   constructor(props){
    super(props);
    this.state = {
      isReady: false,
    };

  }

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
        <StatusBar barStyle={'dark-content'} />
        <AppNavigator/>
      </Provider>
    );
  }

  async _cacheResourcesAsync() {
       //added font similar to proxima nova
       //not prefetching images because data loads instantaneously
    return Font.loadAsync({
      'helvetica-bold': require('./assets/fonts/Helvetica-Bold.ttf'),
      'helvetica': require('./assets/fonts/helvetica-light-587ebe5a59211.ttf'),
    });

  }
}