"use strict"

import React from 'react';
import usr from "../../icons/Vector.svg";
import './InfoBar.css';


const InfoBar = ({ room, name, users }) => (
  
  <div className="infoBar" id="ib">
      <h2 class="title" >Room Chat</h2>
      <div class="yourInfo">
        <div class="wrp-yi" >  
          <div class="into-yi" >  
            <h3 className="room" >{room}</h3>
            <h3 className="name" >{name}</h3>
          </div> 
        </div> 
      </div>
      {
      users
        ? (
            <div className={"activeContainer " + (users.length >= 5 ? 'overF' : 'x')}>
              <h2>
                {users.map(({name}) => (
                  <div key={name} className="activeItem">
                    <img className="activeImage" src={usr} alt="" ></img>
                    {name}                  
                  </div>
                ))}
              </h2>
            </div>
           
        )
        : null
    }
  </div>
);




export default InfoBar;



