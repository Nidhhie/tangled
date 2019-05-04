import React from 'react';
import {AppLoading,Font} from 'expo';
import AppNavigator from './src/navigation/AppNavigator';
import {Provider} from 'react-redux'
import { persistor, store } from './src/redux/store';
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
      <AppNavigator/>
      </Provider>
    );
  }

  async _cacheResourcesAsync() {
    return Font.loadAsync({
      'helvetica-bold': require('./assets/fonts/Helvetica-Bold.ttf'),
      'helvetica': require('./assets/fonts/helvetica-light-587ebe5a59211.ttf'),
    });

  }
}