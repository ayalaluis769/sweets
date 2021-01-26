import React, { Component } from "react";
import { Navbar, NavbarBrand, Jumbotron } from "reactstrap";

class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <Jumbotron fluid>
          <div className="container">
            <div className="row">
              <div className="col">
                <h1>Sweets By C</h1>
              </div>
            </div>
          </div>
          <Navbar dark sticky="top">
          <div className="container">
            <NavbarBrand href="/">
              The Tasty Treats no one can beat!
            </NavbarBrand>
          </div>
        </Navbar>
        </Jumbotron>
        
      </React.Fragment>
    );
  }
}

export default Header;
