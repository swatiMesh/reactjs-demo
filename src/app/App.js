import React from 'react';
import './App.css';
import Header from './common/header';
import { Provider } from 'react-redux';
import store from './stores/store';

class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Header></Header>
        </div>
      </Provider>
    );
  }
}

export default App;
