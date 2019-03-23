import React, { Component } from 'react';
import List from './components/List';
import './App.css';
import {store} from './redux/store';
import {Provider} from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Provider store={store}>
            <List/>
          </Provider>
          
          
      </div>
      
    );
  }
}
export default App;

