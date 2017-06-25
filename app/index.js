import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

import ItemList from './itemList';

export default class App extends Component {



  render() {
    const store = configureStore();

    return (
      <Provider store={store}>
        <ItemList/>
      </Provider>
    );
  }
}
