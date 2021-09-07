"use strict"

import React, { useState } from 'react';
import { Link } from "react-router-dom";

import './Join.css';

import chat_svg from "../../icons/chat.svg";

export default function SignIn() {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  return (
    <React.Fragment>
    <div className="shape" ></div>
    <div className="shape_2" ></div>
    <div className="container_join">
      <div className="wrapper_join">
       <div className="into_join">
         <h1 className="heading">Join to Room</h1>
         <p className="text" >Register by entering your name and creating or joining a room.</p>
         
         <div>
          <input placeholder="Name" className="joinInput" type="text" onChange={(event) => setName(event.target.value)} />
         </div>
         <div>
          <input placeholder="Room" className="joinInput mt-20" type="text" onChange={(event) => setRoom(event.target.value)} />
         </div>
         <Link onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
          <button className={'button mt-20'} type="submit">Sign In</button>
         </Link>
      
      </div>
      <div className="image_join">
        <img src={chat_svg} alt="" />
      </div>
     </div> 
    </div>
    </React.Fragment>
  );
}
