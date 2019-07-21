import React, { Component } from 'react';
import './side-bar.css';

class SideBar extends Component {
  render() {
    return (
      <div className="SideBar">
  
        <div className="SideBar__option">
          <img className="SideBar__img" src="/images/me.png" />
        </div>
  
        <div className="SideBar__option">
          <img className="SideBar__img" src="/images/myself.png" />
        </div>
  
      </div>
    );
  }
}

export default SideBar;
