import React, { Component } from "react";
import Header from './Header/index';

class MainContainer extends Component {
  render() {
    return (
        
        <div>
            <Header />
            <h1>Simple SPA</h1>
            <ul className="header">
            <li><a href="/">Home</a></li>
            <li><a href="/stuff">Stuff</a></li>
            <li><a href="/contact">Contact</a></li>
            </ul>
            <div className="content">
                
            </div>
        </div>
    );
  }
}
 
export default MainContainer;