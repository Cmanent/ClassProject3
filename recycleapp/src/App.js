import React, { Component, Fragment } from "react";
import Header from './components/Header';
import SubHeader from './components/SubHeader';
import Footer from './components/Footer';
import Content from './components/Content';

class App extends Component {

  render() {
    return (
      <Fragment>
        <Header/>
        <SubHeader/>
        <Content/>
        <Footer/>
      </Fragment>
    );
  }
}

export default App;
