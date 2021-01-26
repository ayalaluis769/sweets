import React, { Component } from 'react';
import './App.css';
import background from "./"
import { SWEETS } from './shared/sweets';
import Directory from "./components/DirectoryComponent";
import Header from "./components/HeaderComponent";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sweets: SWEETS
    };
  }

  render() {
    return ( 
      <div className="App" style={{backgroundImage: `url(/assets/images/layout.jpg)`, backgroundSize: "cover"}}>
        <Header />
        <Directory sweets={this.state.sweets}/>
      </div>
    )
  }
}

export default App;
