import React, { Component } from 'react';

import {Provider} from 'react-redux';


import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import MainHomePage from './components/home/MainHomePage';

import store from './store';

export class App extends Component {
  render() {
    return (
      <Provider store ={store}>
        <Navbar />
        <MainHomePage />
        <Footer />
      </Provider>
  
    )
  }
}

export default App
