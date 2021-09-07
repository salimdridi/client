"use strict"

import React from 'react';
import './Back.css';

import al from "../../icons/arrow-left.svg";

class Back extends React.Component {
  render() { 
    return ( 
      <div className="Back">
            <h2 class="title" >Room Chat</h2>
            <div>
               <a title="Back" href="/"><img src={al} alt="image" class="back_btn" /></a>
            </div>
      </div>
     );
  }
}
 
export default Back;
